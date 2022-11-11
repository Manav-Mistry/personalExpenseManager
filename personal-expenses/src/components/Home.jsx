import React from "react";
import Introduction from "./Index/Introduction";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Form from "./Form";


function Home() {
  return (
    <>
      <Introduction />
    </>
  );
}

export default Home;
