import React from 'react';
import './TodosLinkItem.css';

function TodosLinkItem({todo:{id,title,isDone},onToggle,onDelete}) {

  function onDeleteClick(e){
    e.stopPropagation();
    onDelete(id);
  }
  return (
    <div className={'todo-item'+ (isDone ? ' done':'')}
          
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