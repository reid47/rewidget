import React from 'react';
import ReactDOM from 'react-dom';
import ListView from './ListView';
import { shallow } from 'enzyme';
import { fakeKeyDown } from '../../../config/test-helpers';
import 'jest-enzyme';

describe('ListView', () => {
  let wrapper, data, onChange;

  const ul = () => wrapper.find('ul');
  const lis = () => wrapper.find('ul li');
  const li = i => lis().at(i);
  const state = () => wrapper.state();

  beforeEach(() => {
    data = [
      { name: 'Alice', age: 11 },
      { name: 'Barb', age: 22 },
      { name: 'Cat', age: 33 }
    ];
    onChange = jest.fn();

    wrapper = shallow(<ListView {...{
      data,
      displayItem: item => item.name,
      getValueFromItem: item => item.age,
      onChange
    }}/>);
  });

  it('renders a ul element', () => {
    expect(ul().length).toBe(1);
    expect(ul()).toHaveClassName('list-view');
  });

  it('gives the ul element the correct role', () => {
    expect(ul().is('[role="listbox"]')).toBe(true);
  });

  it('gives the ul element the correct tab index', () => {
    expect(ul().props().tabIndex).toBe(0);
  });

  it('renders an li element for each item', () => {
    expect(lis().length).toBe(3);
    expect(lis()).toHaveClassName('list-view-item');
    expect(lis().every('[role="option"]')).toBe(true);
  });

  it('uses the given callback to display the item', () => {
    expect(li(0)).toHaveText('Alice');
    expect(li(1)).toHaveText('Barb');
    expect(li(2)).toHaveText('Cat');
  });

  it('sets the initial state correctly', () => {
    expect(state().selectedIndexes).toEqual({});
    expect(state().currentIndex).toEqual(-1);
  });

  it('sets aria-selected="false" on all elements', () => {
    expect(li(0).is('[aria-selected="false"]')).toBe(true);
    expect(li(1).is('[aria-selected="false"]')).toBe(true);
    expect(li(2).is('[aria-selected="false"]')).toBe(true);
  });

  it('does not set aria-activedescendant initially', () => {
    expect(ul().is('[aria-activedescendant]')).toBe(false);
  });

  describe('when clicking', () => {
    describe('when multiselect is false', () => {
      beforeEach(() => {
        li(1).simulate('click');
        li(2).simulate('click');
      });

      it('does not set aria-multiselectable', () => {
        expect(ul().is('[aria-multiselectable]')).toBe(false);
      });

      it('sets the current index correctly', () => {
        expect(state().currentIndex).toEqual(2);
      });

      it('adds the "current" CSS class correctly', () => {
        expect(li(0)).not.toHaveClassName('current');
        expect(li(1)).not.toHaveClassName('current');
        expect(li(2)).toHaveClassName('current');
      });

      it('selects the clicked element', () => {
        expect(state().selectedIndexes).toEqual({2: true});
      });

      it('adds the "selected" CSS class correctly', () => {
        expect(li(0)).not.toHaveClassName('selected');
        expect(li(1)).not.toHaveClassName('selected');
        expect(li(2)).toHaveClassName('selected');
      });

      it('sets aria-selected="true" on only the selected element', () => {
        expect(li(0).is('[aria-selected="false"]')).toBe(true);
        expect(li(1).is('[aria-selected="false"]')).toBe(true);
        expect(li(2).is('[aria-selected="true"]')).toBe(true);
      });

      it('sets the aria-activedescendant to the id of the selected item', () => {
        const id = li(2).props().id;
        expect(ul().is(`[aria-activedescendant="${id}"]`)).toBe(true);
      });

      it('calls the onChange callback with the new selection', () => {
        expect(onChange.mock.calls.length).toBe(2);
        expect(onChange).toHaveBeenCalledWith([22]);
        expect(onChange).toHaveBeenCalledWith([33]);
      });

      describe('when clicking the selected element', () => {
        beforeEach(() => {
          li(2).simulate('click');
        });

        it('does not deselect that element', () => {
          expect(state().selectedIndexes).toEqual({2: true});
          expect(li(2)).toHaveClassName('selected');
          expect(li(2).is('[aria-selected="true"]')).toBe(true);
        });
      });
    });

    fdescribe('when multiselect is true', () => {
      beforeEach(() => {
        wrapper.setProps({multiselect: true});
        li(1).simulate('click', {});
        li(2).simulate('click', {});
      });

      it('sets aria-multiselectable', () => {
        expect(ul().is('[aria-multiselectable]')).toBe(true);
      });

      it('sets the current index correctly', () => {
        expect(state().currentIndex).toEqual(2);
      });

      it('adds the "current" CSS class correctly', () => {
        expect(li(0)).not.toHaveClassName('current');
        expect(li(1)).not.toHaveClassName('current');
        expect(li(2)).toHaveClassName('current');
      });

      it('selects all clicked elements', () => {
        expect(state().selectedIndexes).toEqual({
          1: true,
          2: true
        });
      });

      it('adds the "selected" CSS class correctly', () => {
        expect(li(0)).not.toHaveClassName('selected');
        expect(li(1)).toHaveClassName('selected');
        expect(li(2)).toHaveClassName('selected');
      });

      it('sets aria-selected="true" on all clicked elements', () => {
        expect(li(0).is('[aria-selected="false"]')).toBe(true);
        expect(li(1).is('[aria-selected="true"]')).toBe(true);
        expect(li(2).is('[aria-selected="true"]')).toBe(true);
      });

      it('sets the aria-activedescendant to the id of the selected item', () => {
        const id = li(2).props().id;
        expect(ul().is(`[aria-activedescendant="${id}"]`)).toBe(true);
      });

      it('calls the onChange callback with the new selection', () => {
        expect(onChange.mock.calls.length).toBe(2);
        expect(onChange).toHaveBeenCalledWith([22]);
        expect(onChange).toHaveBeenCalledWith([22, 33]);
      });

      describe('when a selected item is clicked again', () => {
        beforeEach(() => {
          li(2).simulate('click', {});
        });

        it('does not change the current item', () => {
          expect(state().currentIndex).toEqual(2);
          expect(li(1)).not.toHaveClassName('current');
          expect(li(2)).toHaveClassName('current');
        });

        it('deselects the clicked item', () => {
          expect(state().selectedIndexes).toEqual({1: true});
        });

        it('sets the "selected" CSS class accordingly', () => {
          expect(li(0)).not.toHaveClassName('selected');
          expect(li(1)).toHaveClassName('selected');
          expect(li(2)).not.toHaveClassName('selected');
        });
      });
    });
  });

  describe('when using keyboard navigation', () => {
    describe('when multiselect is false', () => {
      describe('when there is no current item', () => {
        beforeEach(() => {
          wrapper.simulate('focus');
        });

        it('does not set aria-multiselectable', () => {
          expect(ul().is('[aria-multiselectable]')).toBe(false);
        });

        it('sets the currentIndex to 0', () => {
          expect(state().currentIndex).toEqual(0);
        });

        it('selects the first item', () => {
          expect(state().selectedIndexes).toEqual({0: true});
        });

        describe('when the down arrow is pressed', () => {
          beforeEach(() => {
            wrapper.simulate('keyDown', fakeKeyDown('ArrowDown'));
          });

          it('increases the currentIndex', () => {
            expect(state().currentIndex).toEqual(1);
          });

          it('updates the selection', () => {
            expect(state().selectedIndexes).toEqual({1: true});
          });

          it('sets the aria-activedescendant to the id of the selected item', () => {
            const id = li(1).props().id;
            expect(ul().is(`[aria-activedescendant="${id}"]`)).toBe(true);
          });

          describe('then when the up arrow is pressed twice', () => {
            beforeEach(() => {
              wrapper.simulate('keyDown', fakeKeyDown('ArrowUp'));
              wrapper.simulate('keyDown', fakeKeyDown('ArrowUp'));
            });

            it('sets the currentIndex back to 0', () => {
              expect(state().currentIndex).toEqual(0);
            });

            it('selects the first item', () => {
              expect(state().selectedIndexes).toEqual({0: true});
            });

            it('sets the aria-activedescendant to the id of the selected item', () => {
              const id = li(0).props().id;
              expect(ul().is(`[aria-activedescendant="${id}"]`)).toBe(true);
            });
          });
        });

        describe('when the end key is pressed', () => {
          beforeEach(() => {
            wrapper.simulate('keyDown', fakeKeyDown('End'));
          });

          it('makes the last item the current item', () => {
            expect(state().currentIndex).toEqual(2);
          });

          it('updates the selection', () => {
            expect(state().selectedIndexes).toEqual({2: true});
          });

          it('sets the aria-activedescendant to the id of the selected item', () => {
            const id = li(2).props().id;
            expect(ul().is(`[aria-activedescendant="${id}"]`)).toBe(true);
          });

          describe('then when the home key is pressed', () => {
            beforeEach(() => {
              wrapper.simulate('keyDown', fakeKeyDown('Home'));
            });

            it('makes the first item the current item', () => {
              expect(state().currentIndex).toEqual(0);
            });

            it('updates the selection', () => {
              expect(state().selectedIndexes).toEqual({0: true});
            });

            it('sets the aria-activedescendant to the id of the selected item', () => {
              const id = li(0).props().id;
              expect(ul().is(`[aria-activedescendant="${id}"]`)).toBe(true);
            });
          });
        });
      });

      describe('when there is a current item', () => {
        beforeEach(() => {
          wrapper.setState({currentIndex: 1, selectedIndexes: {1: true}});
          wrapper.simulate('focus');
        });

        it('preserves the current item', () => {
          expect(state().currentIndex).toEqual(1);
        });

        it('does not change the selection', () => {
          expect(state().selectedIndexes).toEqual({1: true});
        });
      });
    });

    describe('when multiselect is true', () => {
      describe('when there is no current item', () => {
        beforeEach(() => {
          wrapper.setProps({multiselect: true});
          wrapper.simulate('focus');
        });

        it('sets aria-multiselectable', () => {
          expect(ul().is('[aria-multiselectable]')).toBe(true);
        });

        it('sets the current index correctly', () => {
          expect(state().currentIndex).toEqual(0);
        });

        it('adds the "current" CSS class correctly', () => {
          expect(li(0)).toHaveClassName('current');
          expect(li(1)).not.toHaveClassName('current');
          expect(li(2)).not.toHaveClassName('current');
        });

        it('does not select the current item automatically', () => {
          expect(state().selectedIndexes).toEqual({});
          expect(li(0)).not.toHaveClassName('selected');
        });

        describe('when the down arrow key is pressed', () => {
          beforeEach(() => {
            wrapper.simulate('keyDown', fakeKeyDown('ArrowDown'));
          });

          it('updates the current index', () => {
            expect(state().currentIndex).toEqual(1);
          });

          it('does not select the new current item', () => {
            expect(state().selectedIndexes).toEqual({});
          });

          describe('when the Space key is pressed', () => {
            beforeEach(() => {
              wrapper.simulate('keyDown', fakeKeyDown(' '));
            });

            it('does not change the current index', () => {
              expect(state().currentIndex).toEqual(1);
            });

            it('selects the current item', () => {
              expect(state().selectedIndexes).toEqual({1: true});
            });

            describe('when the Space key is pressed again', () => {
              beforeEach(() => {
                wrapper.simulate('keyDown', fakeKeyDown(' '));
              });

              it('does not change the current index', () => {
                expect(state().currentIndex).toEqual(1);
              });

              it('deselects the current item', () => {
                expect(state().selectedIndexes).toEqual({});
              });
            });
          });
        });

        describe('when Shift+ArrowDown is pressed', () => {
          beforeEach(() => {
            wrapper.simulate('keyDown', fakeKeyDown('ArrowDown', 'Shift'));
          });

          it('updates the current index', () => {
            expect(state().currentIndex).toEqual(1);
          });

          it('selects the new current item', () => {
            expect(state().selectedIndexes).toEqual({1: true});
          });
        });
      });

      describe('when there is a current item', () => {
        beforeEach(() => {
          wrapper.setState({currentIndex: 1, selectedIndexes: {2: true}});
          wrapper.simulate('focus');
        });

        it('preserves the current item', () => {
          expect(state().currentIndex).toEqual(1);
        });

        it('does not change the selection', () => {
          expect(state().selectedIndexes).toEqual({2: true});
        });
      });
    });
  });
});
