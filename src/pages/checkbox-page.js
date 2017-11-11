import React from 'react';
import Checkbox from '../components/checkbox/checkbox';

class CheckboxPage extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      v1: true,
      v2: false,
      v3: false,
      v4: null
    };
  }

  onChange(field) {
    return newValue => {
      console.log({newValue})
      this.setState({
        [field]: newValue
      });
    }
  }

  render() {
    return (
      <div style={{margin: '20px'}}>
        <div><Checkbox value={this.state.v1} onChange={this.onChange('v1')}/></div>
        <hr/>
        <div><Checkbox disabled/></div>
        <hr/>
        <div><Checkbox disabled value={true}/></div>
        <hr/>
        <div><Checkbox value={this.state.v2} onChange={this.onChange('v2')}/></div>
        <hr/>
        <div><Checkbox size="tiny" value={this.state.v3} onChange={this.onChange('v3')}/></div>
        <hr/>
        <div><Checkbox size="small" value={this.state.v3} onChange={this.onChange('v3')}/></div>
        <hr/>
        <div><Checkbox size="normal" value={this.state.v3} onChange={this.onChange('v3')}/></div>
        <hr/>
        <div><Checkbox size="large" value={this.state.v3} onChange={this.onChange('v3')}/></div>
        <hr/>
        <div><Checkbox size="huge" value={this.state.v3} onChange={this.onChange('v3')}/></div>
        <hr/>
        <br/>
        <br/>
        <br/>
        <div><Checkbox size="huge" value={this.state.v4} onChange={this.onChange('v4')}/></div>
        <hr/>
        <div><Checkbox threeState size="huge" value={this.state.v4} onChange={this.onChange('v4')}/></div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <a href="#">lol</a>
      </div>
    );
  }
}

export default CheckboxPage;
