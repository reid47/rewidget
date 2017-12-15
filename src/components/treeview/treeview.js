import React from 'react';
import PropTypes from 'prop-types';
import { withKeyHandler } from '../key-handler';
import { TreeViewNode } from './treeviewnode';
import { clsNs } from '../../util';

const o = console.log

const Div = withKeyHandler('div');

const flattenItemKeys = (data, getItemChildren, prefix = '') => {
  let keys = [];
  data.forEach((item, i) => {
    const itemKey = prefix ? prefix + '_' + i : '' + i;
    keys.push(itemKey);
    const children = getItemChildren({itemData: item});
    if (children && children.length > 0) {
      keys = keys.concat(flattenItemKeys(children, getItemChildren, itemKey));
    }
  });
  return keys;
}

const setInitialItemStates = (itemStates, data, getItemChildren, getInitialCollapsedState, prefix, parentCollapsed) => {
  data.forEach((item, i) => {
    const itemKey = prefix ? prefix + '_' + i : '' + i;
    const isCollapsed = getInitialCollapsedState && getInitialCollapsedState(item);
    const children = getItemChildren({itemData: item});
    const hasChildren = children && children.length > 0;

    itemStates[itemKey] = {
      isCollapsed,
      isSelected: false,
      isHidden: parentCollapsed,
      hasChildren
    };

    if (hasChildren) {
      setInitialItemStates(
        itemStates, 
        children, 
        getItemChildren, 
        getInitialCollapsedState, 
        itemKey,
        isCollapsed);
    }
  });
}

export class TreeView extends React.Component {
  static propTypes = {
    data: PropTypes.array,
    getItemText: PropTypes.func,
    getItemChildren: PropTypes.func,
    getInitialCollapsedState: PropTypes.func,
    getItemIcon: PropTypes.func
  };

  static defaultProps = {
    data: [],
    getItemText: ({itemData}) => `${itemData}`,
    getItemChildren: () => null,
    getInitialCollapsedState: null,
    getItemIcon: ({hasChildren, isCollapsed}) => {
      if (!hasChildren) return null;
      if (isCollapsed) return '+';
      return '-';
    }
  };

  constructor(props) {
    super(props);
    this.moveFocusUpFrom = this.moveFocusUpFrom.bind(this);
    this.moveFocusDownFrom = this.moveFocusDownFrom.bind(this);
    this.moveFocusRightFrom = this.moveFocusRightFrom.bind(this);
    this.moveFocusLeftFrom = this.moveFocusLeftFrom.bind(this);
    this.onArrowUp = this.onArrowUp.bind(this);
    this.onArrowDown = this.onArrowDown.bind(this);
    this.onArrowRight = this.onArrowRight.bind(this);
    this.onArrowLeft = this.onArrowLeft.bind(this);
    this.moveFocusTo = this.moveFocusTo.bind(this);
    this.toggleCollapsedState = this.toggleCollapsedState.bind(this);
    this.setState = this.setState.bind(this);

    this.state = {
      focusedItemKey: '0',
      collapsedItems: {},
      itemStates: {}
    };

    setInitialItemStates(
      this.state.itemStates, 
      props.data, 
      props.getItemChildren,
      props.getInitialCollapsedState,
      '',
      false);

    this.flatKeyList = flattenItemKeys(props.data, props.getItemChildren);
  }

  onArrowDown(evt) {
    this.moveFocusDownFrom(evt.target.dataset.itemKey);
  }

  onArrowUp(evt) {
    this.moveFocusUpFrom(evt.target.dataset.itemKey);
  }

  onArrowRight(evt) {
    this.moveFocusRightFrom(evt.target.dataset.itemKey);
  }

  onArrowLeft(evt) {
    this.moveFocusLeftFrom(evt.target.dataset.itemKey);
  }

  moveFocusUpFrom(itemKey) {
    if (!this.flatKeyList) return;

    const { itemStates } = this.state;

    let currentIndex = this.flatKeyList.indexOf(itemKey) - 1;
    let newFocusedKey = this.flatKeyList[currentIndex];
    while (currentIndex >= 0 && itemStates[newFocusedKey].isHidden) {
      newFocusedKey = this.flatKeyList[currentIndex];
      currentIndex--;
    }
    
    if (newFocusedKey && !itemStates[newFocusedKey].isHidden) {
      this.moveFocusTo(newFocusedKey);
    }
  }

  moveFocusDownFrom(itemKey) {
    if (!this.flatKeyList) return;

    const { itemStates } = this.state;

    let currentIndex = this.flatKeyList.indexOf(itemKey) + 1;
    let newFocusedKey = this.flatKeyList[currentIndex];
    while (currentIndex < this.flatKeyList.length && itemStates[newFocusedKey].isHidden) {
      newFocusedKey = this.flatKeyList[currentIndex];
      currentIndex++;
    }
    
    if (newFocusedKey && !itemStates[newFocusedKey].isHidden) {
      this.moveFocusTo(newFocusedKey);
    }
  }

  moveFocusRightFrom(itemKey) {
    const { itemStates } = this.state;

    const { hasChildren, isCollapsed } = itemStates[itemKey];

    if (hasChildren) {
      if (!isCollapsed) {
        this.moveFocusTo(itemKey + '_0');
      } else {
        this.toggleCollapsedState(itemKey);
      }
    }
  }

  moveFocusLeftFrom(itemKey) {
    const { itemStates } = this.state;

    const { hasChildren, isCollapsed } = itemStates[itemKey];

    if (hasChildren && !isCollapsed) {
      this.toggleCollapsedState(itemKey);
    } else {
      const parentKey = itemKey.substring(0, itemKey.length - 2);
      if (itemStates[parentKey]) {
        this.moveFocusTo(parentKey);
      }
    }
  }

  moveFocusTo(itemKey) {
    if (!itemKey || itemKey === this.state.focusedItemKey) return;

    this.setState({focusedItemKey: itemKey}, () => {
      const el = this.treeElement && this.treeElement.querySelector('[tabindex="0"]');
      el && el.focus();
    });
  }

  toggleCollapsedState(itemKey) {
    const { itemStates } = this.state;
    const newCollapsedState = !itemStates[itemKey].isCollapsed;
    const newItemStates = { ...itemStates };

    newItemStates[itemKey].isCollapsed = newCollapsedState;
    const keysToHide = Object.keys(itemStates).filter(key => 
      key.startsWith(itemKey) && key.length !== itemKey.length);
    keysToHide.forEach(key => {
      newItemStates[key].isHidden = newCollapsedState
    });

    this.setState({ itemStates: newItemStates });
  }

  render() {
    const { data, getItemText, getItemChildren, getItemIcon } = this.props;

    const nodes = <ul 
        ref={el => this.treeElement = el}
        className={clsNs('treeview-list is-top-level')}>
        {data.map((itemData, key) => <TreeViewNode {...{
          key,
          itemKey: '' + key,
          itemData,
          getItemText,
          getItemChildren,
          getItemIcon,
          moveFocusTo: this.moveFocusTo,
          toggleCollapsedState: this.toggleCollapsedState,
          treeViewState: this.state
        }}/>)}
      </ul>;

    return (
      <Div {...{
        className: clsNs('treeview'),
        role: 'tree',
        onArrowDown: this.onArrowDown,
        onArrowUp: this.onArrowUp,
        onArrowRight: this.onArrowRight,
        onArrowLeft: this.onArrowLeft,
        onSpace: evt => {
          this.toggleCollapsedState(evt.target.dataset.itemKey);
        }
      }}>
        {nodes}
      </Div>
    );
  }
}