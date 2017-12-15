import React from 'react';
import PropTypes from 'prop-types';
import { clsNs } from '../../util';

export class TreeViewNode extends React.Component {
  static propTypes = {
    itemKey: PropTypes.string.isRequired,
    getItemText: PropTypes.func,
    getItemChildren: PropTypes.func,
    getItemIcon: PropTypes.func,
    moveFocusTo: PropTypes.func.isRequired,
    treeViewState: PropTypes.object.isRequired
  };

  static defaultProps = {
    itemData: {}
  };

  render() {
    const { 
      itemKey, itemData, getItemText, getItemChildren, getItemIcon,
      moveFocusTo, toggleCollapsedState, treeViewState
    } = this.props;
    const { focusedItemKey, itemStates } = treeViewState;

    const isFocused = focusedItemKey === itemKey;
    const isCollapsed = itemStates[itemKey].isCollapsed;
    const itemChildren = getItemChildren({itemData});
    const hasChildren = itemChildren && itemChildren.length > 0;
    const icon = getItemIcon({itemData, isCollapsed, hasChildren});

    return (
      <li {...{
        className: clsNs('treeview-node', isFocused && 'is-focused')
      }}>
        <div {...{
          className: clsNs('treeview-item'),
          tabIndex: isFocused ? 0 : -1,
          'data-item-key': itemKey,
          onFocus: evt => {
            evt.stopPropagation();
            evt.preventDefault();
            moveFocusTo(itemKey);
          },
          onClick: evt => {
            evt.stopPropagation();
            evt.preventDefault();
            if (isFocused) {
              toggleCollapsedState(itemKey);
            }
          }
        }}>
          {icon && <span 
            role="presentation"
            className={clsNs('treeview-item-icon')}>{icon}</span>}
          <span className={clsNs('treeview-item-text')}>{getItemText({itemData})}</span>
        </div>
        {hasChildren && !isCollapsed &&
          <ul className={clsNs('treeview-list')}>
            {itemChildren.map((childData, key) => <TreeViewNode {...{
              key,
              itemKey: itemKey + '_' + key,
              itemData: childData,
              getItemText,
              getItemChildren,
              getItemIcon,
              moveFocusTo,
              toggleCollapsedState,
              treeViewState
            }}/>)}
          </ul>}
      </li>
    );
  }
}