import React from 'react';
import PropTypes from 'prop-types';
import { clsNs } from '../../util';

export class TreeViewNode extends React.Component {
  static propTypes = {
    itemKey: PropTypes.string.isRequired,
    getItemText: PropTypes.func,
    getItemChildren: PropTypes.func,
    isCollapsed: PropTypes.bool,
    moveFocusUp: PropTypes.func.isRequired,
    moveFocusDown: PropTypes.func.isRequired,
    treeViewState: PropTypes.object.isRequired,
    treeViewSetState: PropTypes.func.isRequired
  };

  static defaultProps = {
    itemData: {},
    isCollapsed: false
  };

  render() {
    const { 
      itemKey, itemData, getItemText, getItemChildren,
      indexInGroup, groupCount,
      moveFocusUp, moveFocusDown, treeViewState, treeViewSetState
    } = this.props;
    const { focusedItemKey } = treeViewState;

    const isFocused = focusedItemKey === itemKey;
    const itemChildren = getItemChildren(itemData);
    const hasChildren = itemChildren && itemChildren.length > 0;

    return (
      <li {...{
        className: clsNs('treeview-node', isFocused && 'is-focused'),
        tabIndex: isFocused ? 0 : -1,
        'data-item-key': itemKey,
        'data-index-in-group': indexInGroup,
        'data-group-count': groupCount,
        'data-has-children': hasChildren || undefined
      }}>
        {getItemText(itemData)}
        {hasChildren &&
          <ul>
            {itemChildren.map((childData, key) => <TreeViewNode {...{
              key,
              itemKey: itemKey + '_' + key,
              itemData: childData,
              getItemText,
              getItemChildren,
              indexInGroup: key,
              groupCount: itemChildren.length,
              moveFocusUp,
              moveFocusDown,
              treeViewState,
              treeViewSetState
            }}/>)}
          </ul>}
      </li>
    );
  }
}