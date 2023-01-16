import { ACTION_DELETE, ACTION_TOGGLE,ACTION_CREATE } from "../actions/todosActions";
const INITIAL_STATE = {
    todos:[
        {id:1,title: 'first item', isDone:true},
        {id:2,title: 'second item', isDone:false},
        {id:3,title: 'thirst item', isDone:true},
        {id:4,title: 'four item', isDone:false},

    ],
};



export default function todosReducer(state = INITIAL_STATE, {type,payload}){
    console.log('reducer lived',state,type,payload);
    
    switch(type){
        case ACTION_TOGGLE:return {...state,todos:state.todos.map(item =>
            item.id!==payload?item:{
                ...item,
                isDone:!item.isDone,
            }),};
        case ACTION_DELETE:return {...state,todos:state.todos.filter((item)=>
                item.id !==payload),};

        case ACTION_CREATE: return {
            ...state,
            todos:[...state.todos,
                {...payload,id: Date.now(),isDone:false},],

                }
            

        default: return state;
    }
}