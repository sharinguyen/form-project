import React, { Component } from 'react';
//import { render } from 'react-dom';

/*trying to figure out how to have value link with its form */
const options = [
  { value: '', label: 'Choose Option ...' },
  { value: 'text box', label: 'textbox' },
  { value: 'check box', label: 'checkbox' },
  { value: 'Create', label: 'Create' },
  { value: '', label: 'None' },
];

class Type extends Component {
  
  state = {
    selectedOption: '',
  
  }

  handleChange = ({ target }) => {
    this.setState({
      selectedOption: target.value
    })
  }

  render() {
    return (
      <div>
        <select
          value={this.state.selectedOption}
          onChange={this.handleChange}
          >
        {options.map(({ value, label }, index) => <option value={value} >{label}</option>)}

        </select>
        {/*shows option choosen below option */}
        <text>{this.state.selectedOption}</text>
        
        
      </div>
    );
  }
}

export default Type;