
import React from 'react';
import useTodos from '../hooks/useTodos';
import Loading from '../../common/components/Loading';
import FormTodo from './FormTodo';
import TodosLink from './TodosLink';

function Todos() {
 const {todos,isLoading,toggleTodo,deleteTodo,createTodo}=useTodos();
  return (
    <div className='container'>
    <Loading isLoading={isLoading}/>
    <TodosLink todos={todos} onToggle={toggleTodo} onDelete={deleteTodo}/>
    <FormTodo onCreate={createTodo}/> 

    </div>
  );
}

export default Todos;
