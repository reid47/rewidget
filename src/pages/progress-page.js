import React from 'react';
import ProgressCircle from '../components/progress/progress-bar';
import ProgressBar from '../components/progress/progress-circle';

class ProgressPage extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      progress: 47
    };
  }

  onChange(evt) {
    this.setState({
      progress: Number(evt.target.value)
    });
  }

  render() {
    return (
      <div
        style={{
          textAlign: 'center'
        }}>
        <input
          type="range"
          value={this.state.progress}
          onChange={this.onChange}
        />
        <ProgressBar value={this.state.progress} size="tiny" />
        <ProgressBar value={this.state.progress} size="small" />
        <ProgressBar value={this.state.progress} displayLabel />
        <ProgressBar
          value={this.state.progress}
          size="large"
          displayLabel
          rounded
        />
        <ProgressBar value={this.state.progress} size="huge" displayLabel />
        <hr />
        <ProgressCircle size="tiny" />
        <ProgressCircle size="small" />
        <ProgressCircle />
        <ProgressCircle size="large" rounded />
        <ProgressCircle size="huge" />
        <hr />
        <ProgressCircle value={this.state.progress} size="tiny" />
        <ProgressCircle value={this.state.progress} size="small" />
        <ProgressCircle value={this.state.progress} displayLabel />
        <ProgressCircle
          value={this.state.progress}
          size="large"
          displayLabel
          rounded
        />
        <ProgressCircle value={this.state.progress} size="huge" displayLabel />
      </div>
    );
  }
}

export default ProgressPage;
