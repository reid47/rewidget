import React from 'react';
import { clsNs, uniqueId } from '../../util';
import './list-view.css';

export default class ListView extends React.Component {
  static defaultProps = {
    data: [],
    displayItem: item => String(item),
    getValueFromItem: item => JSON.stringify(item),
    multiselect: false,
    className: ''
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedIndexes: {},
      currentIndex: -1
    };

    this.id = uniqueId('list-view');
    this.onFocus = this.onFocus.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.changeCurrentIndex = this.changeCurrentIndex.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
  }

  onFocus() {
    const { data, multiselect } = this.props;
    const { currentIndex, selectedIndexes } = this.state;

    if (currentIndex === -1) {
      if (Object.keys(selectedIndexes).length === 0 && data.length > 0) {
        this.updateSelection(0, multiselect ? null : { 0: true });
      } else {
        this.updateSelection(Number(Object.keys(selectedIndexes)[0]));
      }
    }
  }

  changeCurrentIndex(updateIndex, selectNewCurrent) {
    const { data } = this.props;
    const { currentIndex, selectedIndexes } = this.state;

    const newCurrentIndex = updateIndex(currentIndex);
    if (newCurrentIndex > -1 && newCurrentIndex < data.length) {
      if (!selectNewCurrent) {
        this.updateSelection(newCurrentIndex, null);
      } else {
        this.updateSelection(newCurrentIndex, {
          [newCurrentIndex]: !selectedIndexes[newCurrentIndex] || undefined
        });
      }
    }
  }

  onItemClick(index) {
    return evt => {
      // const { selectedIndexes } = this.state;
      const { multiselect } = this.props;

      if (evt.shiftKey) {
        console.log('shifty');
        evt.preventDefault();
        evt.stopPropagation();
      }

      if (multiselect && evt.shiftKey) {
        this.selectAdditionalItems(index);
      } else if (multiselect && evt.ctrlKey) {
        this.selectAdditionalItem(index);
      } else {
        this.selectSingleItem(index);
      }
    };
  }

  selectSingleItem(index) {
    const { multiselect } = this.props;
    const { currentIndex } = this.state;

    if (multiselect && index === currentIndex) {
      this.setState({
        currentIndex: index,
        selectedIndexes: {}
      });
    } else {
      this.setState({
        currentIndex: index,
        selectedIndexes: { [index]: true }
      });
    }
  }

  selectAdditionalItem(index) {
    const { selectedIndexes } = this.state;
    this.setState({
      currentIndex: index,
      selectedIndexes: {
        ...selectedIndexes,
        [index]: !selectedIndexes[index] || undefined
      }
    });
  }

  selectAdditionalItems(index) {
    const { currentIndex, selectedIndexes } = this.state;
    const min = index < currentIndex ? index : currentIndex;
    const max = index >= currentIndex ? index : currentIndex;
    const newSelection = {};
    for (let i = min; i <= max; i++) {
      newSelection[i] = true;
    }

    this.setState({
      currentIndex: index,
      selectedIndexes: {
        ...selectedIndexes,
        ...newSelection
      }
    });
  }

  updateSelection(newCurrent, newSelection) {
    const { data, getValueFromItem, multiselect, onChange } = this.props;
    const { selectedIndexes } = this.state;

    const changedState = {};
    if (newCurrent || newCurrent === 0) {
      changedState.currentIndex = newCurrent;
    }

    if (newSelection) {
      if (multiselect) {
        changedState.selectedIndexes = { ...selectedIndexes };
        Object.keys(newSelection).forEach(key => {
          if (newSelection[key]) {
            changedState.selectedIndexes[key] = newSelection[key];
          } else {
            delete changedState.selectedIndexes[key];
          }
        });
      } else {
        changedState.selectedIndexes = newSelection;
      }
    }

    this.setState(changedState);

    if (newSelection && onChange) {
      const newValues = Object.keys(changedState.selectedIndexes).map(index =>
        getValueFromItem(data[index])
      );
      onChange(newValues);
    }
  }

  onKeyDown(evt) {
    const { multiselect } = this.props;
    if (multiselect) this.handleKeyDownMultiSelect(evt);
    else this.handleKeyDownSingleSelect(evt);
  }

  handleKeyDownSingleSelect(evt) {
    // if (keyEventMatches(evt, 'ArrowDown')) {
    //   this.changeCurrentIndex(i => i + 1, true);
    //   evt.preventDefault();
    // } else if (keyEventMatches(evt, 'ArrowUp')) {
    //   this.changeCurrentIndex(i => i - 1, true);
    //   evt.preventDefault();
    // } else if (keyEventMatches(evt, 'Home')) {
    //   this.changeCurrentIndex(() => 0, true);
    //   evt.preventDefault();
    // } else if (keyEventMatches(evt, 'End')) {
    //   const { data } = this.props;
    //   this.changeCurrentIndex(() => data.length - 1, true);
    //   evt.preventDefault();
    // }
  }

  handleKeyDownMultiSelect(evt) {
    // if (keyEventMatches(evt, 'Shift+ArrowDown')) {
    //   this.changeCurrentIndex(i => i + 1, true);
    //   evt.preventDefault();
    // } else if (keyEventMatches(evt, 'Shift+ArrowUp')) {
    //   this.changeCurrentIndex(i => i - 1, true);
    //   evt.preventDefault();
    // } else if (keyEventMatches(evt, 'ArrowDown')) {
    //   this.changeCurrentIndex(i => i + 1, false);
    //   evt.preventDefault();
    // } else if (keyEventMatches(evt, 'ArrowUp')) {
    //   this.changeCurrentIndex(i => i - 1, false);
    //   evt.preventDefault();
    // } else if (keyEventMatches(evt, 'Home')) {
    //   this.changeCurrentIndex(() => 0, false);
    //   evt.preventDefault();
    // } else if (keyEventMatches(evt, 'End')) {
    //   const { data } = this.props;
    //   this.changeCurrentIndex(() => data.length - 1, false);
    //   evt.preventDefault();
    // } else if (keyEventMatches(evt, ' ')) {
    //   const { currentIndex, selectedIndexes } = this.state;
    //   this.updateSelection(null, {
    //     [currentIndex]: !selectedIndexes[currentIndex] || undefined
    //   });
    // }
  }

  render() {
    const {
      data,
      displayItem,
      getValueFromItem,
      multiselect,
      className,
      ...props
    } = this.props;
    const { selectedIndexes = {}, currentIndex = -1 } = this.state;

    const itemIds = {};
    const items = data.map((item, index) => {
      const itemId = `${this.id}_${index}`;
      itemIds[index] = itemId;

      return (
        <li
          {...{
            key: index,
            id: itemId,
            role: 'option',
            onClick: this.onItemClick(index),
            'aria-selected': String(!!selectedIndexes[index]),
            className: clsNs(
              'list-view-item',
              currentIndex === index && 'current',
              selectedIndexes[index] && 'selected'
            )
          }}>
          {displayItem(item)}
        </li>
      );
    });

    return (
      <ul
        {...{
          ...props,
          id: this.id,
          role: 'listbox',
          'aria-multiselectable': multiselect || undefined,
          'aria-activedescendant': itemIds[currentIndex] || undefined,
          tabIndex: 0,
          onFocus: this.onFocus,
          onKeyDown: this.onKeyDown,
          className: clsNs('list-view', className)
        }}>
        {items}
      </ul>
    );
  }
}
