import React from 'react';
import ReactDOM from 'react-dom';
import { classify, prefix } from '../util';
import { XIcon } from '../icons';
import { t } from '../translations';

export class Listbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      value,
      className,
      items = [],
      itemClassName,
      renderItem,
      getItemValue,
      emptyState,
      ...props
    } = this.props;

    const listboxClasses = classify(prefix('Listbox'), className);

    return (
      <ul className={listboxClasses} role="listbox" tabIndex="0">
        {items.length === 0 && emptyState
          ? emptyState
          : items.map((item, i) => {
              const renderedItem = renderItem ? renderItem(item) : item;
              const itemValue = getItemValue ? getItemValue(item) : item;
              const isSelected =
                typeof value !== 'undefined' && itemValue === value;

              const itemClasses = classify(
                prefix('Listbox-item'),
                isSelected && 'is-selected',
                itemClassName
              );

              return (
                <li
                  className={itemClasses}
                  role="option"
                  aria-selected={isSelected ? 'true' : 'false'}
                  key={i}>
                  {renderedItem}
                </li>
              );
            })}
      </ul>
    );
  }
}
