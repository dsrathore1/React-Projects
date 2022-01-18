import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="heading">CRUD Operation</h1>
      <label className="name">Name</label>
      <input type="text" placeholder="Enter your name" className="nameI" />
      <label className="age">Age</label>
      <input type="number" max="50" min="0" placeholder="Age" className="ageI" />
      <label className="email">Email</label>
      <input type="email" placeholder="Enter your email" className="emailI" />
      <label className="blog">Blog</label>
      <textarea placeholder="Enter your blog" className="blogI" />
      <button class="btn">Click Me</button>
    </div>
  );
}

export default App;