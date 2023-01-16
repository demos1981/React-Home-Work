import React from 'react';
import '../components/TodosLinkItem.css';
import { useDispatch } from 'react-redux';
import { createTodo } from '../store/actions/todosActions';

function FormTodo() {
  const dispatch = useDispatch();
  function onFormSubmit(e){
    e.preventDefault();
   dispatch(createTodo({
    title:e.target.elements.title.value,
   }));
    e.target.reset();

  }
  return (
  <div className="row">
    <form onSubmit={onFormSubmit}>
        <div className="ten columns">
            <input
                type="text"
                className="u-full-width"
                name="title"
            />
        </div>
        <div className="two columns">
            <button className="buttonSave">Save</button>
        </div>
    </form>
  </div>
  )
}

export default FormTodo