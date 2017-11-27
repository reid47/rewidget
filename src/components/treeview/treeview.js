import React from 'react';
import PropTypes from 'prop-types';
import { withKeyHandler } from '../key-handler';
import { TreeViewNode } from './treeviewnode';
import { clsNs } from '../../util';

const Div = withKeyHandler('div');

const keyToFirstChild = key => key + '_0';

const keyToNextSibling = (key, siblingCount) => {
  const currentIndex = +key.substring(key.length - 1);
  if (currentIndex + 1 >= siblingCount) return;
  const prefix = key.substring(0, key.length - 2);
  return prefix + '_' + (currentIndex + 1);
};

const keyToPreviousSibling = (key, siblingCount) => {
  const currentIndex = +key.substring(key.length - 1);
  if (currentIndex - 1 < 0) return;
  const prefix = key.substring(0, key.length - 2);
  return prefix + '_' + (currentIndex - 1);
};

const keyToParent = key => {
  const parent = key.substring(0, key.length - 2);
  console.log(key, 'parent:', parent)
  return parent;
}

const flattenItemKeys = (data, getItemChildren) => {
  const keys = [];
  data.forEach((item, i) => {
    keys.push(i);
    const children = getItemChildren(item);
    if (children && children.length > 0) {
      keys.push(flattenItemKeys(children, getItemChildren))
    }
  });
  return keys;
}

const flatten = arr => arr.reduce((flattened, item) =>
  flattened.concat(Array.isArray(item) ? flatten(item) : [item]), []);

export class TreeView extends React.Component {
  static propTypes = {
    data: PropTypes.array,
    getItemText: PropTypes.func,
    getItemChildren: PropTypes.func
  };

  static defaultProps = {
    data: [],
    getItemText: i => `${i}`,
    getItemChildren: () => null
  };

  constructor(props) {
    super(props);
    // this.onArrowUp = this.onArrowUp.bind(this);
    // this.onArrowDown = this.onArrowDown.bind(this);
    this.moveFocusUpFrom = this.moveFocusUpFrom.bind(this);
    this.moveFocusDownFrom = this.moveFocusDownFrom.bind(this);
    this.setState = this.setState.bind(this);

    this.state = {
      focusedItemKey: '0'
    };
  }

  moveFocusUpFrom(itemKey, indexInGroup, groupCount, hasChildren) {
    console.log({itemKey, indexInGroup, groupCount, hasChildren})
    let nextFocusedItemKey;

    if (hasChildren) {

    }

    if (nextFocusedItemKey) {
      this.setState({focusedItemKey: nextFocusedItemKey}, () => {
        const el = this.treeElement && this.treeElement.querySelector('[tabindex="0"]');
        el && el.focus();
      });
    }
  }

  moveFocusDownFrom(itemKey, indexInGroup, groupCount, hasChildren) {
    console.log({itemKey, indexInGroup, groupCount, hasChildren})
    let nextFocusedItemKey;

    if (hasChildren) {
      nextFocusedItemKey = keyToFirstChild(itemKey);
    } else if (indexInGroup === groupCount - 1) {
      nextFocusedItemKey = keyToFirstChild(keyToParent(itemKey));
      console.log(itemKey, keyToParent(itemKey), keyToNextSibling(keyToParent(itemKey)))
    } else {
      nextFocusedItemKey = keyToNextSibling(itemKey, groupCount);
    }

    if (nextFocusedItemKey) {
      this.setState({focusedItemKey: nextFocusedItemKey}, () => {
        const el = this.treeElement && this.treeElement.querySelector('[tabindex="0"]');
        el && el.focus();
      });
    }
  }

  render() {
    const { data, getItemText, getItemChildren } = this.props;

    // FLATTEN ALL ITEM KEYS INTO ONE LIST
        // actually maybe we can just use the array of nested arrays?
    // THEN WE CAN JUST GO UP AND DOWN (eventually also checking isExpanded)
    const flatKeyList = flattenItemKeys(data, getItemChildren);
    console.log({flatKeyList});
    console.log({superflat: flatten(flatKeyList)})

    const nodes = <ul ref={el => this.treeElement = el}>
        {data.map((itemData, key) => <TreeViewNode {...{
          key,
          itemKey: '' + key,
          itemData,
          getItemText,
          getItemChildren,
          indexInGroup: key,
          groupCount: data.length,
          moveFocusUp: this.moveFocusUpFrom,
          moveFocusDown: this.moveFocusDownFrom,
          treeViewState: this.state,
          treeViewSetState: this.setState
        }}/>)}
      </ul>;

    return (
      <Div {...{
        className: clsNs('treeview'),
        role: 'tree',
        onArrowDown: evt => {
          this.moveFocusDownFrom(
            evt.target.dataset.itemKey,
            +evt.target.dataset.indexInGroup,
            +evt.target.dataset.groupCount,
            evt.target.dataset.hasChildren);
        },
        onArrowUp: evt => {
          this.moveFocusUpFrom(
            evt.target.dataset.itemKey,
            +evt.target.dataset.indexInGroup,
            +evt.target.dataset.groupCount,
            evt.target.dataset.hasChildren);
        }
      }}>
        {nodes}
      </Div>
    );
  }
}