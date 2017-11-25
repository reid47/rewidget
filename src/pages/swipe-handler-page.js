import React from 'react';
import { withSwipeHandlers } from '../components/swipe-handler';
import { withModifiers } from '../components/modifiers';

const Div = withModifiers('div');
const SwipeDiv = withSwipeHandlers(Div);

export default class SwipeHandlerPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftSwipes: 0,
      rightSwipes: 0,
      upSwipes: 0,
      downSwipes: 0
    };
  }

  render() {
    return (
      <div>
        <Div ma="3">
          <SwipeDiv bg="primary" c="white" pv={4} {...{
            // alwaysPreventDefault: true,
            onSwipeLeft: () => this.setState({leftSwipes: this.state.leftSwipes + 1}),
            onSwipeRight: () => this.setState({rightSwipes: this.state.rightSwipes + 1}),
            onSwipeUp: () => this.setState({upSwipes: this.state.upSwipes + 1}),
            onSwipeDown: () => this.setState({downSwipes: this.state.downSwipes + 1})
          }}>
            swipe!
          </SwipeDiv>
        </Div>
        <Div ma="3">
          <Div>left swipes: {this.state.leftSwipes}</Div>
          <Div>right swipes: {this.state.rightSwipes}</Div>
          <Div>up swipes: {this.state.upSwipes}</Div>
          <Div>down swipes: {this.state.downSwipes}</Div>
        </Div>
      </div>
    );
  }
};