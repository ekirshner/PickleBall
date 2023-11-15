import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <div style={{height: '250px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('https://cdn2.atlantamagazine.com/wp-content/uploads/sites/4/2022/05/0522_pickleball_oneuseonly.jpg')`}}>
        <h1 style={{paddingTop: 75, paddingRight: 75,textAlign: 'right'}}>Fun With Pickles</h1>
      </div>

      <h3>{message}</h3>
    </div>
  );
}

export default App
