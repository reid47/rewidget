import React from 'react';
import TextInput from '../components/text-input/TextInput';

class TextInputPage extends React.Component {
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
    return newValue => this.setState({
      [field]: newValue
    });
  }

  render() {
    return (
      <div style={{
        margin: '100px auto',
        width: '600px',
        textAlign: 'center'
      }}>
        <TextInput
          onChange={this.onChange('text1')}
          value={this.state.text1}/>
        <br/>
        <br/>
        <br/>
        <TextInput
          onChange={this.onChange('text2')}
          value={this.state.text2}
          suggestions={[
            'Angela', 'Reid', 'Wrigley', 'Luke', 'Alex'
          ]}/>
        <br/>
        <br/>
        <br/>
        <TextInput
          onChange={this.onChange('text4')}
          value={this.state.text4}
          suggestions={[
            'Angela', 'Reid', 'Wrigley', 'Luke', 'Alex',
            'Bob', 'a dog', 'a cat', 'a grandma', ' a sandwich'
          ]}/>
        <br/>
        <br/>
        <br/>
        <TextInput
          multiline
          onChange={this.onChange('text3')}
          value={this.state.text3}/>
      </div>
    );
  }
}

export default TextInputPage;
