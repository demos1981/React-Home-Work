import React from 'react';
import './TodosLinkItem.css';
import classNames from '../common/utils/classname'
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../store/actions/todosActions';

function TodosLinkItem({todo:{id,title,isDone}}) {
  const dispatch = useDispatch();
  function onToggle(){
    dispatch(toggleTodo(id));
  }

  function onDeleteClick(e){
    e.stopPropagation();
    dispatch(deleteTodo(id));
  }
  return (
    <div className={classNames('todo-item'+ (isDone ? ' done':''))}
          
        onClick={()=>onToggle(id)}
        >
        {title}
          
        <span className="delete-btn" onClick={onDeleteClick}>
            X
        </span>
    </div>
  );
}

export default TodosLinkItem