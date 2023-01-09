import React, { Component } from 'react'

export default class Form extends Component {

    onFormSubmit = (e) =>{
        e.preventDefault();
        this.props.onTodoSave ({
          title: e.target.elements.title.value,
        });
        e.target.reset();
        
    };

  render() {
   
    return (
        <form onSubmit = {this.onFormSubmit}>
        <input name="title" 
        placeholder='title'
         />
        <button>Save</button>
      </form>
    );
  }
  
}
