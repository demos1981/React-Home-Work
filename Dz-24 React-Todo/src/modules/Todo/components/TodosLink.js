import React from 'react';
import TodosLinkItem from './TodosLinkItem';


function TodosLink({todos,onToggle,onDelete}) {
  return (
    <div className='row'>
        <div className="twelve columns">
            {todos.map((item)=>( 
              <TodosLinkItem key={item.id} todo={item} onToggle={onToggle} onDelete={onDelete}/>
              ))}

        </div>
    </div>
  )
}

export default TodosLink;