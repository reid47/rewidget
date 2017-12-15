import React from 'react';

const predicates = {
  onArrowDown: ({ key, shiftKey }) => key === 'ArrowDown' && !shiftKey,
  onArrowUp: ({ key, shiftKey }) => key === 'ArrowUp' && !shiftKey,
  onArrowRight: ({ key, shiftKey }) => key === 'ArrowRight' && !shiftKey,
  onArrowLeft: ({ key, shiftKey }) => key === 'ArrowLeft' && !shiftKey,
  onEnter: ({ key, shiftKey }) => key === 'Enter' && !shiftKey,
  onEscape: ({ key, shiftKey }) => key === 'Escape' && !shiftKey,
  onSpace: ({ key, shiftKey }) => key === ' ' && !shiftKey,
  onTab: ({ key, shiftKey }) => key === 'Tab' && !shiftKey
};

export default function withKeyHandlers(Component) {
  return class WrappedComponent extends React.Component {
    static displayName = `withKeyHandlers(${Component.name || Component})`;

    buildKeyDownHandler(handlers) {
      const handlerNames = Object.keys(handlers).filter(h => h);
      const handlersToAdd = [];
      handlerNames.forEach(name => {
        if (predicates[name]) {
          handlersToAdd.push({
            predicate: predicates[name],
            handler: handlers[name]
          });
        }
      });

      if (!handlersToAdd.length) return;

      return evt => {
        for (const { predicate, handler } of handlersToAdd) {
          if (predicate(evt)) {
            return handler(evt);
          }
        }
      };
    }

    render() {
      const {
        onArrowDown,
        onArrowUp,
        onArrowRight,
        onArrowLeft,
        onEnter,
        onEscape,
        onSpace,
        onTab,
        ...props
      } = this.props;

      return React.createElement(Component, {
        ...props,
        onKeyDown: this.buildKeyDownHandler(
          Object.keys(predicates).reduce((acc, curr) => {
            this.props[curr] && (acc[curr] = this.props[curr]);
            return acc;
          }, {})
        )
      });
    }
  };
}
