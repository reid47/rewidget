import React from 'react';
import PropTypes from 'prop-types';

const inSwipeArea = (area, x, y) => {
  if (!area) return true;
  return area.lowerX && area.lowerY && area.upperX && area.upperY
    && area.lowerX <= x && area.upperX >= area.x
    && area.lowerY <= y && area.upperY >= area.y;
}

export function withSwipeHandlers(Component) {
  return class WrappedComponent extends React.Component {
    static displayName = `withSwipeHandlers(${Component.name})`;

    static propTypes = {
      onSwipeLeft: PropTypes.func,
      onSwipeRight: PropTypes.func,
      onSwipeUp: PropTypes.func,
      onSwipeDown: PropTypes.func,
      swipeLeftArea: PropTypes.arrayOf(PropTypes.number),
      swipeRightArea: PropTypes.arrayOf(PropTypes.number),
      swipeUpArea: PropTypes.arrayOf(PropTypes.number),
      swipeDownArea: PropTypes.arrayOf(PropTypes.number),
      swipeLeftThreshold: PropTypes.number,
      swipeRightThreshold: PropTypes.number,
      swipeUpThreshold: PropTypes.number,
      swipeDownThreshold: PropTypes.number,
      alwaysPreventDefault: PropTypes.bool
    };

    static defaultProps = {
      onSwipeLeft: null,
      swipeLeftArea: null,
      swipeLeftThreshold: 50,
      onSwipeRight: null,
      swipeRightArea: null,
      swipeRightThreshold: 50,
      onSwipeUp: null,
      swipeUpArea: null,
      swipeUpThreshold: 50,
      onSwipeDown: null,
      swipeDownArea: null,
      swipeDownThreshold: 50,
      alwaysPreventDefault: false
    };

    constructor(props) {
      super(props);

      this.onTouchStart = this.onTouchStart.bind(this);
      this.onTouchMove = this.onTouchMove.bind(this);
      this.onTouchEnd = this.onTouchEnd.bind(this);
      this.maybePreventDefault = this.maybePreventDefault.bind(this);
    }

    maybePreventDefault(evt) {
      if (this.props.alwaysPreventDefault) {
        evt.stopPropagation();
        evt.preventDefault();
      }
    }

    onTouchStart(evt) {
      const { 
        onSwipeLeft, onSwipeRight,
        swipeLeftArea, swipeRightArea 
      } = this.props;

      const initialX = evt.touches[0].clientX;
      const initialY = evt.touches[0].clientY;

      if (onSwipeLeft && inSwipeArea(swipeLeftArea, initialX, initialY)) {
        this.leftInitialX = initialX;
        this.leftInitialY = initialY;
      }

      if (onSwipeRight && inSwipeArea(swipeRightArea, initialX, initialY)) {
        this.rightInitialX = initialX;
        this.rightInitialY = initialY;
      }
    }

    onTouchMove(evt) {
      const { 
        onSwipeLeft, onSwipeRight,
        swipeLeftThreshold, swipeRightThreshold 
      } = this.props;

      const currentX = evt.touches[0].clientX;
      const currentY = evt.touches[0].clientY;

      if (!this.swipedLeft && onSwipeLeft && this.leftInitialX && currentX < this.leftInitialX 
        && this.leftInitialX - currentX > swipeLeftThreshold) {
        this.maybePreventDefault(evt);
        this.swipedLeft = true;
        onSwipeLeft(evt);
      }

      if (!this.swipedRight && onSwipeRight && this.rightInitialX && currentX > this.rightInitialX 
        && currentX - this.rightInitialX > swipeRightThreshold) {
        this.maybePreventDefault(evt);
        this.swipedRight = true;
        onSwipeRight(evt);
      }
    }

    onTouchEnd(evt) {
      this.swipedLeft = undefined;
      this.swipedRight = undefined;
      this.leftInitialX = undefined;
      this.leftInitialY = undefined;
      this.rightInitialX = undefined;
      this.rightInitialY = undefined;
      this.upInitialX = undefined;
      this.upInitialY = undefined;
      this.downInitialX = undefined;
      this.downInitialY = undefined;
    }

    render() {
      const {
        onSwipeLeft,
        swipeLeftArea,
        swipeLeftThreshold,
        onSwipeRight,
        swipeRightArea,
        swipeRightThreshold,
        onSwipeUp,
        swipeUpArea,
        swipeUpThreshold,
        onSwipeDown,
        swipeDownArea,
        swipeDownThreshold,
        alwaysPreventDefault,
        ...props
      } = this.props;

      const touchAction = alwaysPreventDefault ? 'none' : undefined;

      return React.createElement(Component, {
        ...props,
        style: {
          ...props.style,
          touchAction
        },
        onTouchStart: this.onTouchStart,
        onTouchMove: this.onTouchMove,
        onTouchEnd: this.onTouchEnd
      });
    }
  };
}
