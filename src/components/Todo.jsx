import React, { useState, useEffect } from "react";
import './ToDo.css'

function ToDo() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <div>
          <button className="btn" onClick={event =>  window.location.href='/'}>
              Logout
            </button>
          <div className="todo">
            {items.map(item => (
            <div className="card">
            <h1 className="id">{item.id}
            </h1>
            <h3 className="tit">{item.title}</h3>
            </div>
          ))}
          </div>
          </div>
      );
    }
  }

  export default ToDo;