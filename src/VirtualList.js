import React, { PureComponent } from 'react';
import types from 'prop-types';

export default class VirtualList extends PureComponent {
  static propTypes = {
    itemHeight: types.number,
    items: types.array,
    listItemClassName: types.string,
    listItemTag: types.oneOfType([types.string, types.func]),
    listClassName: types.string,
    listTag: types.oneOfType([types.string, types.func]),
    maxHeight: types.number,
    overscan: types.number,
    renderItem: types.func,
    wrapperClassName: types.string
  };

  static defaultProps = {
    itemHeight: 24,
    items: [],
    listItemTag: 'li',
    listTag: 'ul',
    maxHeight: 300,
    overscan: 10,
    renderItem: item => JSON.stringify(item)
  };

  state = {
    firstVisibleIndex: 0,
    lastVisibleIndex: Math.min(
      this.props.items.length,
      Math.floor(this.props.maxHeight / this.props.itemHeight) + this.props.overscan
    )
  };

  renderItem = (item, index) => {
    const { itemHeight, listItemTag: ListItem, listItemClassName, renderItem } = this.props;
    const { firstVisibleIndex } = this.state;
    const totalIndex = firstVisibleIndex + index;
    const style = {
      height: itemHeight,
      position: 'absolute',
      top: totalIndex * itemHeight
    };

    return (
      <ListItem
        key={totalIndex}
        className={listItemClassName}
        style={style}
        children={renderItem(item, index)}
      />
    );
  };

  onScroll = evt => {
    const { clientHeight, scrollTop } = evt.target;
    const { items, itemHeight, overscan } = this.props;
    const firstVisibleIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const lastVisibleIndex = Math.min(
      items.length,
      Math.ceil(scrollTop / itemHeight) + Math.ceil(clientHeight / itemHeight) + overscan
    );

    if (
      firstVisibleIndex !== this.state.firstVisibleIndex ||
      lastVisibleIndex !== this.state.lastVisibleIndex
    ) {
      this.setState({ firstVisibleIndex, lastVisibleIndex });
    }
  };

  render() {
    const {
      wrapperClassName,
      listClassName,
      listTag: List,
      items,
      itemHeight,
      maxHeight
    } = this.props;
    const { firstVisibleIndex, lastVisibleIndex } = this.state;
    const innerHeight = items.length * itemHeight;

    return (
      <div
        onScroll={this.onScroll}
        className={wrapperClassName}
        style={{ maxHeight, overflow: 'auto' }}>
        <List
          className={listClassName}
          style={{ height: innerHeight, position: 'relative', margin: 0 }}>
          {items.slice(firstVisibleIndex, lastVisibleIndex).map(this.renderItem)}
        </List>
      </div>
    );
  }
}
