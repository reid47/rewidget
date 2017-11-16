import React from 'react';
import { clsNs } from '../../util';
import { withLayoutHelper } from '../layout-helper';

const normalizeTemplateValues = (templateValues) => {
  if (!templateValues) return;
  if (Array.isArray(templateValues)) {
    return templateValues
      .filter(i => i)
      .map(String)
      .join(' ');
  }

  return String(templateValues);
}

const toCellValue = value => {
  if (Array.isArray(value)) {
    return value.map(toCellValue).join(' ');
  }

  return value;
}

export const GridTemplate = ({
  rows = [],
  cols = []
}) => {
  return {

  }
}

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.updateMediaQuery = this.updateMediaQuery.bind(this);

    this.queries = [];
    this.queryListeners = [];
    this.state = {};
  }

  updateMediaQuery(query) {
    return ({matches}) => {
      console.log({query, matches})
      this.setState({
        [query]: matches
      });
    }
  }

  componentWillMount() {
    const { template } = this.props;
    if (typeof window !== 'object') return;
    if (!template || !template.breakpoints) return;

    Object.keys(template.breakpoints).forEach(query => {
      const newQuery = window.matchMedia(query);
      const newListener = this.updateMediaQuery(query);
      newQuery.addListener(newListener);
      this.queries.push(newQuery);
      this.queryListeners.push(newListener);

      newListener(newQuery);
    });
  }

  componentWillUnmount() {
    const { template } = this.props;
    if (!template || !template.breakpoints) return;

    this.queries.forEach((q, i) => q.removeListener(this.queryListeners[i]));
  }

  render() {
    const {
      template = null,
      gap = 'default',
      rowGap,
      colGap,
      className,
      style = {},
      ...props
    } = this.props;

    let templateToRender = template;
    if (template) {
      if (template.breakpoints) {
        for (const query of Object.keys(template.breakpoints)) {
          if (this.state[query]) {
            templateToRender = template.breakpoints[query];
          }
        }
      }

      if (templateToRender.areas) {
        style.gridTemplateAreas = Array.isArray(templateToRender.areas)
          ? templateToRender.areas.map(area => `"${area}"`).join(' ')
          : templateToRender.areas;
      }

      if (templateToRender.rows) {
        style.gridTemplateRows = normalizeTemplateValues(templateToRender.rows);
      }

      if (templateToRender.cols) {
        style.gridTemplateColumns = normalizeTemplateValues(templateToRender.cols);
      }
    }

    return <div {...{
      ...props,
      style,
      className: clsNs(
        'grid',
        rowGap && `has-row-gap-${rowGap}`,
        colGap && `has-col-gap-${colGap}`,
        !rowGap && !colGap && `has-gap-${gap}`,
        className)
    }}/>;
  }
}

const Cell = ({
  row,
  col,
  area,
  className,
  style = {},
  is = 'div',
  ...props
}) => {
  if (row) style.gridRow = toCellValue(row);
  if (col) style.gridColumn = toCellValue(col);
  if (area) style.gridArea = area;

  return React.createElement(is, {
    ...props,
    style,
    className: clsNs(
      'grid-cell',
      className)
  });
};

const wrappedGrid = withLayoutHelper(Grid);
const wrappedCell = withLayoutHelper(Cell);

export {
  wrappedGrid as Grid, 
  wrappedCell as Cell
};