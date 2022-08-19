import {useState } from "react";
import "./App.css";


function App() {
  const [inp, setInp] = useState(true);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(false);

  const getInp = () => {
    setInp(false);
    fetchData();
  }

  const fetchData = () => {
    setLoading(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setUsers(data.data);
          setLoading(false);
        }, 500);
      });
  };

  return (
    <>
      {inp ? (
        <header className="head">
          <h1>Let's Grow More Web Development Internship Task - 4</h1>
          <button className="button" onClick={getInp}>Get Users</button>
        </header>
      ) : (
        <>
          {loading ? (
            <div className="loader"></div>
          ) : (
            <div className="container">
              {users.map((item, key) => {
                return <div className="card_item" key={key}>
                  <div className="card_inner">
                    <img src={item.avatar} alt="Avatar" />
                      <div className="username">Name : {item.first_name} {item.last_name}</div>
                      <div className="email">Email : {item.email}</div>
                    </div>
                  </div>
                })}
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;
