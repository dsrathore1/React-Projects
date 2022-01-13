import React from 'react'

const App = () => {
  return (
    <>
      <div>
        <h1>Hello World</h1>
      </div>
      <Test food="Burger" drink="Coco-Cola" name="Yash" isTrueOrFlase={true}>
        <File name="Raju" />
        <File email="rajubhai@gmail.com" />
      </Test>
      <File name="Umesh" />
    </>
  );
}

const Test = (props) => {
  const name = "Rajender";
  const borderStyle = { border: "2px solid red" }
  console.log(props);
  return (
    <>
      <h1 style={borderStyle}>Hello I am Test function for testing</h1>
      <h1>My name is {name}</h1>
      <h1>My name is {props.name}</h1>
      <h1>I love {props.food}</h1>
      <h1>I love {props.drink} to drink</h1>
      <p style={borderStyle}>{props.children}</p>
    </>
  );
}

const File = (props) => {
  return (
    <>
      <div>
        <h1>
          {props.name}
          {props.email}
        </h1>
      </div>
    </>
  );
}

export default App 