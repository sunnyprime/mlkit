import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        this.props.setimg(this.state.value)

        
        
      }

  render(){
    //   console.log(this.props.setimg);
      
      
  return (
<div className="App">
<form onSubmit={this.handleSubmit}>
        <label>
          URL:
          <input type="url" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

</div>
  );
}}

export default Input;
