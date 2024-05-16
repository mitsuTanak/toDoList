import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  const [ todos, setTodos] = useState([
    {
      id:1,
      text:"Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text:"Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text:"Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const [search, setSerch] = useState ("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Cres");


  const addTodo = (text, category) => {
    const newTodo = [
      ...todos,
      {
        id: Math.floor(Math.random() *10000),
        text,
        category,
        isCompleted: false,
      }
    ];
    //Atualiza o estado com a nova lista de tarefas
    setTodos(newTodo);
  }

  const removeTodo = (id) =>{
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null)
    setTodos(filteredTodos);
  }

  const completeTodo = (id) =>{
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos);
  }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>

      <Search search={search} setSearch={setSerch}/>

      <Filter filter={filter} setfilter={setFilter} setSort={setSort}/>
      <div className="todo-list">
        {todos 
        .filter((todo) =>
          filter === "All"
          ? true: filter === "Completed"
          ? todo.isCompleted
          : !todo.isCompleted
        )
        .filter((todo) =>
          todo.text.toLowerCase().includes(search.toLowerCase())
        )
        
        .sort((a, b)=>
          sort === "Cres"
          ?a.text.localeCompare(b.text)
          : b.text.localeCompare(a.text)
        )

        .map((todo)=>(
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>

      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
