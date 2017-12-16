import React from 'react';
import { Textbox } from '../../components/textbox';

export class TextboxPage extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      text1: '',
      text2: '',
      text3: '',
      text4: ''
    };
  }

  onChange(field) {
    return newValue =>
      this.setState({
        [field]: newValue
      });
  }

  render() {
    return (
      <div
        style={{
          margin: '1rem auto',
          padding: '1rem',
          textAlign: 'center'
        }}>
        <Textbox onChange={this.onChange('text1')} value={this.state.text1} />
        <br />
        <br />
        <br />
        <Textbox
          onChange={this.onChange('text2')}
          value={this.state.text2}
        />
        <br />
        <br />
        <br />
        <Textbox
          onChange={this.onChange('text4')}
          value={this.state.text4}/>
        <br/><br/><br/>
        <Textbox placeholder="uncontrolled input"/>
        <br/><br/><br/>
        <Textbox password placeholder="Enter password..."/>
        <br />
        <br />
        <br />
        <Textbox
          multiline
          onChange={this.onChange('text3')}
          value={this.state.text3}
          placeholder="Enter multiple lines..."/>
        <br />
        <br />
        <br />
        <Textbox
          multiline
          autoresize
          onChange={this.onChange('text3')}
          value={this.state.text3}
          placeholder="Enter multiple lines..."/>
        <br />
        <br />
        <br />
        <Textbox
          multiline
          autoresize
          rows={1}
          onChange={this.onChange('text3')}
          value={this.state.text3}
          placeholder="Enter multiple lines..."/>
      </div>
    );
  }
}
