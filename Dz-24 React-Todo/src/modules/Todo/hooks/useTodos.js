import todoService from '../services/todoService'
import { useEffect,useState } from 'react';
export default function useTodos(){
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(()=>{
        setIsLoading(true);
      todoService.getList().then(setTodos).finally(()=>setIsLoading(false));

    },[]);
    console.log(todos);
  
    function toggleTodo(id){
      const todo = todos.find(item=>item.id===id);
      setIsLoading(true);
      todoService.update({...todo,isDone:!todo.isDone}).then((data)=>{
        setTodos(todos.map(item=>item.id === data.id ? data:item));
        
      })
      .finally(()=>setIsLoading(false));
    }
    function deleteTodo(id){
        setIsLoading(true);
        todoService.delete(id).then(()=>{
            setTodos(todos.filter((item)=>item.id !== id));
            
        })
        .finally(()=>setIsLoading(false));

    }
    function createTodo(newTodo){
        setIsLoading(true);
        todoService.create({...newTodo,isDone:false}).then(data=>{
            setTodos([...todos,data]);
            
        })
        .finally(()=>setIsLoading(false));
    }
    return{
        todos,
        isLoading,
        toggleTodo,
        deleteTodo,
        createTodo,
    }

}