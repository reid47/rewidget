import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import { withModifiers } from './modifiers';

describe('withModifiers', () => {
  let BaseComponent, Component, wrapper;

  beforeEach(() => {
    BaseComponent = props => <div {...props} />;
    Component = withModifiers(BaseComponent);
  });

  it('sets the displayName properly', () => {
    expect(Component.displayName).toBe('withModifiers(BaseComponent)');
  });

  describe('when rendering without modifier props', () => {
    beforeEach(() => {
      wrapper = shallow(<Component {...{
        className: 'some-class-name',
        someProp: 'some-prop-value',
        style: {
          margin: '47px 47px',
          padding: '28%',
          overflow: 'visible'
        }
      }}/>);
    });

    it('passes the props down to the base component', () => {
      expect(wrapper.find(BaseComponent)).toHaveClassName('some-class-name');
      expect(wrapper.find(BaseComponent)).toHaveProp('someProp', 'some-prop-value');
      expect(wrapper.find(BaseComponent)).toHaveStyle('margin', '47px 47px');
      expect(wrapper.find(BaseComponent)).toHaveStyle('padding', '28%');
      expect(wrapper.find(BaseComponent)).toHaveStyle('overflow', 'visible');
    });
  });

  describe('when given modifiers as well as other class names', () => {
    beforeEach(() => {
      wrapper = shallow(<Component {...{
        className: 'some-class-name',
        ma: 0,
        pa: 'xl'
      }}/>);
    });

    it('preserves the additional class name', () => {
      expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-pa-xl mod-ma-z some-class-name');
    });
  });

  describe('margin props', () => {
    describe('ma prop', () => {
      beforeEach(() => {
        wrapper = shallow(<Component ma="xs"/>);
      });

      it('does not pass the prop to the base component', () => {
        expect(wrapper.find(BaseComponent)).not.toHaveProp('ma');
      });

      it('applies the right class to the base component', () => {
        expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-ma-xs');
      });

      describe('when given a numeric value', () => {
        beforeEach(() => {
          wrapper = shallow(<Component ma={1/2}/>);
        });

        it('applies the right class to the base component', () => {
          expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-ma-s');
        });
      });
    });

    describe('ml prop', () => {
      beforeEach(() => {
        wrapper = shallow(<Component ml="xs"/>);
      });

      it('does not pass the prop to the base component', () => {
        expect(wrapper.find(BaseComponent)).not.toHaveProp('ml');
      });

      it('applies the right class to the base component', () => {
        expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-ml-xs');
      });

      describe('when given a numeric value', () => {
        beforeEach(() => {
          wrapper = shallow(<Component ma={1/4}/>);
        });

        it('applies the right class to the base component', () => {
          expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-ma-xs');
        });
      });
    });

    describe('mr prop', () => {
      beforeEach(() => {
        wrapper = shallow(<Component mr="xs"/>);
      });

      it('does not pass the prop to the base component', () => {
        expect(wrapper.find(BaseComponent)).not.toHaveProp('mr');
      });

      it('applies the right class to the base component', () => {
        expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-mr-xs');
      });

      describe('when given a numeric value', () => {
        beforeEach(() => {
          wrapper = shallow(<Component ma={2}/>);
        });

        it('applies the right class to the base component', () => {
          expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-ma-l');
        });
      });
    });

    describe('mt prop', () => {
      beforeEach(() => {
        wrapper = shallow(<Component mt="xs"/>);
      });

      it('does not pass the prop to the base component', () => {
        expect(wrapper.find(BaseComponent)).not.toHaveProp('mt');
      });

      it('applies the right class to the base component', () => {
        expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-mt-xs');
      });

      describe('when given a numeric value', () => {
        beforeEach(() => {
          wrapper = shallow(<Component ma={3}/>);
        });

        it('applies the right class to the base component', () => {
          expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-ma-xl');
        });
      });
    });

    describe('mb prop', () => {
      beforeEach(() => {
        wrapper = shallow(<Component mb="xs"/>);
      });

      it('does not pass the prop to the base component', () => {
        expect(wrapper.find(BaseComponent)).not.toHaveProp('mb');
      });

      it('applies the right class to the base component', () => {
        expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-mb-xs');
      });

      describe('when given a numeric value', () => {
        beforeEach(() => {
          wrapper = shallow(<Component ma={4}/>);
        });

        it('applies the right class to the base component', () => {
          expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-ma-xxl');
        });
      });
    });

    describe('mh prop', () => {
      beforeEach(() => {
        wrapper = shallow(<Component mh="xs"/>);
      });

      it('does not pass the prop to the base component', () => {
        expect(wrapper.find(BaseComponent)).not.toHaveProp('mh');
      });

      it('applies the right class to the base component', () => {
        expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-mh-xs');
      });
    });

    describe('mv prop', () => {
      beforeEach(() => {
        wrapper = shallow(<Component mv="xs"/>);
      });

      it('does not pass the prop to the base component', () => {
        expect(wrapper.find(BaseComponent)).not.toHaveProp('mv');
      });

      it('applies the right class to the base component', () => {
        expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-mv-xs');
      });
    });
  });

  describe('padding props', () => {
    describe('pa prop', () => {
      beforeEach(() => {
        wrapper = shallow(<Component pa="xs"/>);
      });

      it('does not pass the prop to the base component', () => {
        expect(wrapper.find(BaseComponent)).not.toHaveProp('pa');
      });

      it('applies the right class to the base component', () => {
        expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-pa-xs');
      });
    });

    describe('pl prop', () => {
      beforeEach(() => {
        wrapper = shallow(<Component pl="xs"/>);
      });

      it('does not pass the prop to the base component', () => {
        expect(wrapper.find(BaseComponent)).not.toHaveProp('pl');
      });

      it('applies the right class to the base component', () => {
        expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-pl-xs');
      });
    });

    describe('pr prop', () => {
      beforeEach(() => {
        wrapper = shallow(<Component pr="xs"/>);
      });

      it('does not pass the prop to the base component', () => {
        expect(wrapper.find(BaseComponent)).not.toHaveProp('pr');
      });

      it('applies the right class to the base component', () => {
        expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-pr-xs');
      });
    });

    describe('pt prop', () => {
      beforeEach(() => {
        wrapper = shallow(<Component pt="xs"/>);
      });

      it('does not pass the prop to the base component', () => {
        expect(wrapper.find(BaseComponent)).not.toHaveProp('pt');
      });

      it('applies the right class to the base component', () => {
        expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-pt-xs');
      });
    });

    describe('pb prop', () => {
      beforeEach(() => {
        wrapper = shallow(<Component pb="xs"/>);
      });

      it('does not pass the prop to the base component', () => {
        expect(wrapper.find(BaseComponent)).not.toHaveProp('pb');
      });

      it('applies the right class to the base component', () => {
        expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-pb-xs');
      });
    });

    describe('ph prop', () => {
      beforeEach(() => {
        wrapper = shallow(<Component ph="xs"/>);
      });

      it('does not pass the prop to the base component', () => {
        expect(wrapper.find(BaseComponent)).not.toHaveProp('ph');
      });

      it('applies the right class to the base component', () => {
        expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-ph-xs');
      });
    });

    describe('pv prop', () => {
      beforeEach(() => {
        wrapper = shallow(<Component pv="xs"/>);
      });

      it('does not pass the prop to the base component', () => {
        expect(wrapper.find(BaseComponent)).not.toHaveProp('pv');
      });

      it('applies the right class to the base component', () => {
        expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-pv-xs');
      });
    });
  });

  describe('c prop', () => {
    beforeEach(() => {
      wrapper = shallow(<Component c="primary"/>);
    });

    it('does not pass the prop to the base component', () => {
      expect(wrapper.find(BaseComponent)).not.toHaveProp('c');
    });

    it('applies the right class to the base component', () => {
      expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-c-primary');
    });
  });

  describe('bg prop', () => {
    beforeEach(() => {
      wrapper = shallow(<Component bg="secondary"/>);
    });

    it('does not pass the prop to the base component', () => {
      expect(wrapper.find(BaseComponent)).not.toHaveProp('bg');
    });

    it('applies the right class to the base component', () => {
      expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-bg-secondary');
    });
  });

  describe('d prop', () => {
    beforeEach(() => {
      wrapper = shallow(<Component d="inline-block"/>);
    });

    it('does not pass the prop to the base component', () => {
      expect(wrapper.find(BaseComponent)).not.toHaveProp('d');
    });

    it('applies the right class to the base component', () => {
      expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-d-inline-block');
    });
  });

  describe('o prop', () => {
    beforeEach(() => {
      wrapper = shallow(<Component o="scroll-x"/>);
    });

    it('does not pass the prop to the base component', () => {
      expect(wrapper.find(BaseComponent)).not.toHaveProp('o');
    });

    it('applies the right class to the base component', () => {
      expect(wrapper.find(BaseComponent)).toHaveClassName('rw mod-o-scroll-x');
    });
  });
});