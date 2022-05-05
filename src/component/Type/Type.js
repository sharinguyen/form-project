import React, { Component } from 'react';
//import { render } from 'react-dom';

/*trying to figure out how to have value link with its form */
const types = [
  { value: '', label: 'Choose Option ...' },
  { value: 'box', label: 'box' },
  { value: 'textBox', label: 'texox' },
  { value: 'Create', label: 'Create' },
  { value: '', label: 'None' },
];

class Type extends Component {
  
  state = {
    selectedType: '',
  
  }

  handleChange = ({ target }) => {
    this.setState({
      selectedType: target.value
    })
  }

  render() {
    return (
      <div>
        <select
          value={this.state.selectedType}
          onChange={this.handleChange}
          >
        {types.map(({ value, label }, index) => <option value={value} >{label}</option>)}

        </select>
        
        
      </div>
    );
  }
}

export default Type;