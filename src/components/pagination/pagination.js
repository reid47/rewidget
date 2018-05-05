import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { localized } from '../../localization';
import { classify } from '../../util';
import Icon from '../icon/icon';

const ellipsis = String.fromCharCode(8230);

export default class Pagination extends PureComponent {
  static propTypes = {
    // Current page number (the first page is number `1`)
    currentPage: PropTypes.number.isRequired,

    // If `totalPages` is greater than or equal to this number, not all page number buttons
    // will be shown. Some will be replaced with ellipsis characters.
    ellipsisThreshold: PropTypes.number,

    // If `true`, hides the previous and next buttons
    hidePrevNext: PropTypes.bool,

    // If `true`, hides the first and last buttons
    hideFirstLast: PropTypes.bool,

    // Callback called when the page number is changed. It is passed the new page number.
    onPageChange: PropTypes.func,

    // The total number of pages to show
    totalPages: PropTypes.number.isRequired
  };

  static defaultProps = {
    ellipsisThreshold: 9
  };

  onFirstClick = () => {
    if (!this.props.onPageChange) return;
    this.props.onPageChange(1);
  };

  onPrevClick = () => {
    if (!this.props.onPageChange) return;
    this.props.onPageChange(this.props.currentPage - 1);
  };

  onNextClick = () => {
    if (!this.props.onPageChange) return;
    this.props.onPageChange(this.props.currentPage + 1);
  };

  onLastClick = () => {
    if (!this.props.onPageChange) return;
    this.props.onPageChange(this.props.totalPages);
  };

  render() {
    const {
      totalPages,
      currentPage,
      ellipsisThreshold,
      hideFirstLast,
      hidePrevNext,
      onPageChange
    } = this.props;

    if (!totalPages) return null;

    const elements = [];

    if (!hideFirstLast) {
      elements.push(
        <li className="rw-Pagination-list-item" key="first">
          <button
            type="button"
            aria-label={localized('pagination.first')}
            className={'rw-Pagination-button'}
            disabled={currentPage === 1}
            onClick={this.onFirstClick}>
            <Icon
              name="to_start"
              width="1em"
              height="1em"
              className="rw-Pagination-button-icon"
            />
          </button>
        </li>
      );
    }

    if (!hidePrevNext) {
      elements.push(
        <li className="rw-Pagination-list-item" key="prev">
          <button
            type="button"
            aria-label={localized('pagination.previous')}
            className={'rw-Pagination-button'}
            disabled={currentPage === 1}
            onClick={this.onPrevClick}>
            <Icon
              name="chevron_left"
              width="1em"
              height="1em"
              className="rw-Pagination-button-icon"
            />
          </button>
        </li>
      );
    }

    if (totalPages < ellipsisThreshold) {
      for (let i = 0; i < totalPages; i++) {
        elements.push(
          <li className="rw-Pagination-list-item" key={i + 1}>
            <button
              type="button"
              aria-label={localized(
                currentPage === i + 1
                  ? 'pagination.currentPage'
                  : 'pagination.page',
                {
                  params: { number: i + 1 }
                }
              )}
              className={classify(
                'rw-Pagination-button',
                currentPage === i + 1 && 'rw-Pagination-button-active'
              )}
              onClick={onPageChange && (() => onPageChange(i + 1))}>
              {i + 1}
            </button>
          </li>
        );
      }
    } else {
      elements.push(
        <li className="rw-Pagination-list-item" key={1}>
          <button
            type="button"
            className={classify(
              'rw-Pagination-button',
              currentPage === 1 && 'rw-Pagination-button-active'
            )}
            onClick={this.onFirstClick}>
            {1}
          </button>
        </li>
      );

      if (currentPage > 4) {
        elements.push(
          <li
            className="rw-Pagination-list-item"
            role="separator"
            key="ellipsis-left">
            <span className="rw-Pagination-ellipsis">{ellipsis}</span>
          </li>
        );
      }

      for (
        let i = Math.min(currentPage - 2, totalPages - 5);
        i <= Math.max(currentPage + 2, 6);
        i++
      ) {
        if (i <= 1 || i >= totalPages) continue;

        elements.push(
          <li className="rw-Pagination-list-item" key={i}>
            <button
              type="button"
              aria-label={localized(
                currentPage === i + 1
                  ? 'pagination.currentPage'
                  : 'pagination.page',
                {
                  params: { number: i + 1 }
                }
              )}
              className={classify(
                'rw-Pagination-button',
                currentPage === i && 'rw-Pagination-button-active'
              )}
              key={i}
              onClick={onPageChange && (() => onPageChange(i))}>
              {i}
            </button>
          </li>
        );
      }

      if (currentPage <= totalPages - 4) {
        elements.push(
          <li
            className="rw-Pagination-list-item"
            role="separator"
            key="ellipsis-right">
            <span className="rw-Pagination-ellipsis">{ellipsis}</span>
          </li>
        );
      }

      if (totalPages > 1) {
        elements.push(
          <li className="rw-Pagination-list-item" key={totalPages}>
            <button
              type="button"
              aria-label={localized(
                currentPage === totalPages
                  ? 'pagination.currentPage'
                  : 'pagination.page',
                {
                  params: { number: totalPages }
                }
              )}
              className={classify(
                'rw-Pagination-button',
                currentPage === totalPages && 'rw-Pagination-button-active'
              )}
              onClick={this.onLastClick}>
              {totalPages}
            </button>
          </li>
        );
      }
    }

    if (!hidePrevNext) {
      elements.push(
        <li className="rw-Pagination-list-item" key="next">
          <button
            type="button"
            aria-label={localized('pagination.next')}
            className={'rw-Pagination-button'}
            disabled={currentPage === totalPages}
            onClick={this.onNextClick}>
            <Icon
              name="chevron_right"
              width="1em"
              height="1em"
              className="rw-Pagination-button-icon"
            />
          </button>
        </li>
      );
    }

    if (!hideFirstLast) {
      elements.push(
        <li className="rw-Pagination-list-item" key="last">
          <button
            type="button"
            aria-label={localized('pagination.last')}
            className={'rw-Pagination-button'}
            disabled={currentPage === totalPages}
            onClick={this.onLastClick}>
            <Icon
              name="to_end"
              width="1em"
              height="1em"
              className="rw-Pagination-button-icon"
            />
          </button>
        </li>
      );
    }

    return (
      <nav className="rw-Pagination">
        <ul className="rw-Pagination-list">{elements}</ul>
      </nav>
    );
  }
}
