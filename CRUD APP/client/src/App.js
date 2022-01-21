import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [crudName, setCRUDName] = useState('');
  const [crudAge, setCRUDAge] = useState(0);
  const [crudEmail, setCRUDEmail] = useState('');
  const [crudBlog, setCRUDBlog] = useState('');

  const addData = () => {
    axios.post("http://localhost:4000/insert", {
      crudName: crudName,
      crudAge: crudAge,
      crudEmail: crudEmail,
      crudBlog: crudBlog
    });
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">CRUD Operation</h1>
        <label className="name">Name</label>
        <input type="text" placeholder="Enter your name" className="nameI" onChange={(event) => {
          setCRUDName(event.target.value);
        }} />
        <label className="age">Age</label>
        <input type="number" max="50" min="0" placeholder="Age" className="ageI" onChange={(event) => {
          setCRUDAge(event.target.value)
        }} />
        <label className="email">Email</label>
        <input type="email" placeholder="Enter your email" className="emailI" onChange={(event) => {
          setCRUDEmail(event.target.value)
        }} />
        <label className="blog">Blog</label>
        <textarea placeholder="Enter your blog" className="blogI" onChange={(event) => {
          setCRUDBlog(event.target.value)
        }} />
        <button class="btn" onClick={addData}>Click Me</button>
      </div>
    </div>
  );
}

export default App;