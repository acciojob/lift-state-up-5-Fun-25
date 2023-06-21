
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(true);

  const Child = ({ logStatus }) => {
    const [count, setCount] = useState(0);

    function handleChange() {
      if (count > 2) setIsLoggedIn(true);
    }
    return (
      <div className="child">
        <form>
          <div>
            <label>Username:</label>
            <input
              type="text"
              onKeyDown={() => setCount((prevcount) => prevcount + 1)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              onKeyDown={() => setCount((prevcount) => prevcount + 1)}
            />
          </div>
          <div>
            <button onClick={() => handleChange()}>Login</button>
          </div>
        </form>
      </div>
    );
  };
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        isLoggedOut && <Child logStatus={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App
