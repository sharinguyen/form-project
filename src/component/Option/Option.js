import React, { Component } from 'react';
//import { render } from 'react-dom';


const options = [
  { value: '', label: 'Choose Option ...' },
  { value: 'Contact Us', label: 'Contact Us' },
  { value: 'Employee ID', label: 'Employee ID' },
  { value: 'Create', label: 'Create' },
  { value: '', label: 'None' },
];

class Option extends Component {
  
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
        <p>{this.state.selectedOption}</p>
        
      </div>
    );
  }
}

export default Option;