import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { localized } from '../../localization';

export class Pagination extends PureComponent {
  static propTypes = {
    // The total number of pages to show
    totalPages: PropTypes.number.isRequired,
    // Current page number (the first page is number `1`)
    currentPage: PropTypes.number.isRequired,
    // If `true`, hides the previous and next buttons
    hidePrevNext: PropTypes.bool,
    // If `true`, hides the first and last buttons
    hideFirstLast: PropTypes.bool,
    // Callback called when the page number is changed. It is passed the new page number.
    onPageChange: PropTypes.func
  };

  render() {
    const {
      totalPages,
      currentPage,
      hideFirstLast,
      hidePrevNext,
      onPageChange
    } = this.props;

    if (!totalPages) return null;

    const buttons = [];

    if (!hideFirstLast) {
      buttons.push(
        <button
          type="button"
          key={'first'}
          disabled={currentPage === 1}
          onClick={onPageChange && (() => onPageChange(1))}>
          {localized({ id: 'pagination.first' })}
        </button>
      );
    }

    if (!hidePrevNext) {
      buttons.push(
        <button
          type="button"
          key={'prev'}
          disabled={currentPage === 1}
          onClick={onPageChange && (() => onPageChange(currentPage - 1))}>
          {localized({ id: 'pagination.previous' })}
        </button>
      );
    }

    if (totalPages <= 8) {
      for (let i = 0; i < totalPages; i++) {
        buttons.push(
          <button
            type="button"
            key={i + 1}
            onClick={onPageChange && (() => onPageChange(i + 1))}>
            {i + 1}
          </button>
        );
      }
    } else {
      buttons.push(
        <button
          type="button"
          key={1}
          onClick={onPageChange && (() => onPageChange(1))}>
          {1}
        </button>
      );
    }

    if (!hidePrevNext) {
      buttons.push(
        <button
          type="button"
          key={'next'}
          disabled={currentPage === totalPages}
          onClick={onPageChange && (() => onPageChange(currentPage + 1))}>
          {localized({ id: 'pagination.next' })}
        </button>
      );
    }

    if (!hideFirstLast) {
      buttons.push(
        <button
          type="button"
          key={'last'}
          disabled={currentPage === totalPages}
          onClick={onPageChange && (() => onPageChange(totalPages))}>
          {localized({ id: 'pagination.last' })}
        </button>
      );
    }

    return <div>{buttons}</div>;
  }
}
