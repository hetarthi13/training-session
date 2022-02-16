import React, { useCallback, useState } from 'react';
import './App.css';
import Todos from "./Todos";

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "add!! Todo"]);
  }, [todos]);

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}



// import UserName from './UserName';  
// import UserGender from './UserGender';  
// import UserAge from './UserAge';  

// const initialUser = {  
//   Name: '',  
//   Age: '',  
//   Gender: ''  
// }  

// const reducer = (state, action) => {  
//   switch (action.type) {  
//     case 'UserName':  
//       return {  
//         Name: action.Name,  
//         Gender: '',  
//         Age: ''  
//       }  
//     case 'UserAge':  
//       return {  
//         ...state,  
//         Age: action.Age  
//       }  
//     case 'UserGender':  
//       return {  
//         ...state, Gender: action.Gender  
//       }  
//     default:  
//       return state  
//   }  
// }  

// export const UserContext = React.createContext()  

// function App() {  
//   const [user, dispatch] = useReducer(reducer, initialUser)  

//   return (  
//     <div className="App">  
//       <UserContext.Provider value={{ user, dispatch }}>  

//         <UserName />  
//         {user.Name && <UserGender />}  
//         {user.Gender && <UserAge />}  
//       </UserContext.Provider>  
//       {  
//         user.Age && (  
//           <p>User name is <b>{user.Name}</b> having gender <b>{user.Gender}</b> of Age <b>{user.Age}</b></p>  
//         )  
//       }  
//     </div>  
//   );  
// }  

// export default App;  