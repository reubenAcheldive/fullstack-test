import React, { useEffect } from "react";

import "./App.css";
import Dashboard from "./Component/Dashboard/Dashboard";
import { texts, titles } from "./generic-reviews";
import { generatedRandomReviews } from "./utils/generatedReviews";

function App() {
  useEffect(()=>{
    
    const a = generatedRandomReviews(titles, texts )
    console.log(a)
  },[])
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
