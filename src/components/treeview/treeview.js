import React from 'react';
import PropTypes from 'prop-types';
import { withKeyHandler } from '../key-handler';
// import { clsNs } from '../../util';

const keyToFirstChild = key => key + '_0';

const keyToNextSibling = key => {
  const prefix = key.substring(0, key.length - 2);
  const currentIndex = +key.substring(key.length - 1);
  console.log({prefix, currentIndex}, prefix + '_' + (currentIndex + 1));
  return prefix + '_' + (currentIndex + 1);
};

const TreeViewItem = withKeyHandler('li');

export class TreeView extends React.Component {
  static propTypes = {
    data: PropTypes.array,
    getItemText: PropTypes.func,
    getItemChildren: PropTypes.func,
    isRoot: PropTypes.bool
  };

  static defaultProps = {
    data: [],
    getItemText: i => `${i}`,
    getItemChildren: () => null,
    isRoot: true
  };

  constructor(props) {
    super(props);
    this.onArrowUp = this.onArrowUp.bind(this);
    this.onArrowDown = this.onArrowDown.bind(this);

    this.state = props.isRoot ? {
      focusedItemKey: '_0'
    } : {};
  }

  onArrowUp(evt) {
    const setState = this.props.treeViewSetState || this.setState;
    console.log('up', evt.target.dataset.itemId);
    const id = evt.target.dataset.itemId;
    const idx = this.itemKeys.indexOf(id);
    this.setState({
      focusedItemKey: this.itemKeys[(idx - 1) >= 0 ? (idx - 1) : this.itemKeys.length - 1]
    });
  }

  onArrowDown(evt) {
    const setState = this.props.treeViewSetState || this.setState;
    console.log('down', evt.target.dataset.itemId);
    const id = evt.target.dataset.itemId;
    const idx = this.itemKeys.indexOf(id);
    console.log({id, idx, next: this.itemKeys[(idx + 1) % this.itemKeys.length]})
    this.setState({
      focusedItemKey: this.itemKeys[(idx + 1) % this.itemKeys.length]
    });
  }

  render() {
    const { data, getItemText, getItemChildren, itemKey = '', isRoot } = this.props;
    const state = this.props.treeViewState || this.state;
    const setState = this.props.treeViewSetState || this.setState.bind(this);
    const { focusedItemKey } = state;

    this.itemKeys = [];
    console.log('render', focusedItemKey)

    const nodes = <ul {...{
        role: 'tree',
        ref: el => this.treeElement = el
      }}>
        {data.map((item, i) => {
          const key = itemKey + '_' + i;
          this.itemKeys.push(key);
          const itemChildren = getItemChildren(item);
          const isFocused = key === focusedItemKey;

          return (
            <TreeViewItem {...{
              'data-item-id': key,
              role: 'treeitem',
              key,
              tabIndex: isFocused ? 0 : -1,
              onArrowUp: this.onArrowUp,
              onArrowDown: () => {
                if (itemChildren) {
                  setState({focusedItemKey: key + '_0'}, () => {
                    this.treeElement.querySelector('[tabindex="0"]').focus();
                  });
                } else {
                  console.log('here', keyToNextSibling(key))
                  setState({focusedItemKey: keyToNextSibling(key)}, () => {
                    this.treeElement.querySelector('[tabindex="0"]').focus();
                  });
                }
              }
            }}>
              {getItemText(item)}
              {itemChildren && <TreeView {...{
                data: itemChildren,
                getItemText,
                getItemChildren,
                isRoot: false,
                itemKey: key,
                treeViewState: this.state,
                treeViewSetState: this.setState.bind(this)
              }}/>}
            </TreeViewItem>
          );
        })}
      </ul>;

    return nodes;
  }
}