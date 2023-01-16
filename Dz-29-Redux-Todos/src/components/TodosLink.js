import React from 'react';
import TodosLinkItem from './TodosLinkItem';
import { useSelector } from 'react-redux';
import { selectTodos } from '../store/selectors/todos';


function TodosLink() {
  const listTodos = useSelector(selectTodos);

  return (
    <div className='row'>
        <div className="twelve columns">
            {listTodos.map((item)=>( 
              <TodosLinkItem
               key={item.id}
               todo={item} />
              ))}

        </div>
    </div>
  )
}

export default TodosLink;