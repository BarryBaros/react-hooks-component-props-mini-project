import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import logo from "../assets/logo";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image= {blogData.image || logo} about={blogData.about} />
    </div>
  );
}

export default App;
