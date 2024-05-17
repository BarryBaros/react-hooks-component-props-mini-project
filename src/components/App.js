import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import logo from "../assets/logo";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image || logo} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
