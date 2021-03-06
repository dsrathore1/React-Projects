import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [crudName, setCRUDName] = useState('');
  const [crudAge, setCRUDAge] = useState(0);
  const [crudEmail, setCRUDEmail] = useState('');
  const [crudBlog, setCRUDBlog] = useState('');
  const [crudNewData, setCRUDNewData] = useState('');
  const [crudList, setCURDList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/read").then((res) => {
      setCURDList(res.data, ...res.data);
      console.log(res);
    });
  }, []);

  const addData = () => {
    axios.post("http://localhost:4000/insert", {
      crudName: crudName,
      crudAge: crudAge,
      crudEmail: crudEmail,
      crudBlog: crudBlog
    }).then(() => {
      setCURDList([
        ...crudList,
        {
          crudName: crudName,
          crudAge: crudAge,
          crudEmail: crudEmail,
          crudBlog: crudBlog
        },
      ]);
    });
  };

  const updateData = (id) => {
    axios.put("http://localhost:4000/update",
      {
        id: id,
        newData: crudNewData
      })
  }
  const deleteData = (id) => {
    axios.delete(`http://localhost:4000/delete/${id}`, {
      
    })
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="heading" key={Date()}>CRUD Operation</h1>
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
        <button className="btn" onClick={addData}>Click Me</button>

        <h1 className='heading2'>CRUD LIST</h1>
        <div className="crudList">
          {
            crudList.map((curElem, key) => {
              return (
                <div key={key} className="list">
                  <h1>  {curElem.crudName} </h1>
                  <h2> {curElem.crudAge} </h2>
                  <h2> {curElem.crudEmail} </h2>
                  <h2> {curElem.crudBlog} </h2>
                  <input type="text" placeholder='New Food name' onclick={(event) => {
                    setCRUDNewData(event.target.value);
                  }} />
                  <button className="updateBtn" onClick={() => {
                    updateData(curElem._id)
                  }} >Update</button>
                  <button className="deleteBtn" onClick={() => {
                    deleteData(curElem._id)
                  }} >Delete</button>
                  <br />
                  <br />
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;