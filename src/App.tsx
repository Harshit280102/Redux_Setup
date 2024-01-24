import Comp from './Components/Comp';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './Redux/Hooks';
import {increment, decrement} from './Redux/slices/counter';
import { fetchTodos } from './Redux/slices/todo';
import {todo, Todos} from './Redux/slices/todo';

const App:React.FC=() =>{
  const count =useAppSelector(state=>state.counter);
  const dispatch =useAppDispatch();

  const todo:Todos =useAppSelector(state=>state.todo);
  console.log('state',todo);

  if(todo.isLoading){
     return<h1>Loading....</h1>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>count is {count}</h1>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
        <button onClick={()=> dispatch(fetchTodos())}>Fetch Todo</button>
      </header>
      <Comp/>
      <header >
       {todo.data?.map((e:todo)=>
        <li>{e.title}</li>
       )}
      </header>
    </div>
  );
}

export default App;
