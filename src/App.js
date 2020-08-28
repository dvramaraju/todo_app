import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads, we need to listen to the databse and fetch new todos as the get added or remove
  useEffect(() => {
    // this code here... fires when app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id,todo: doc.data().todo})));
    });
  }, []);

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodos([...todos, input]);
    setInput('');
  };
  return (
    <div className="App">
      <h1>Hello Buddy add your TODO's <span role="img" aria-label="">🚀</span>!</h1>
      <form>

        <FormControl>
          <InputLabel><span role="img" aria-label="">✅</span> Write a todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>

    </div>
  );
}

export default App;
