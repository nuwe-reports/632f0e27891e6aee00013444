import React from "react";
import { useState } from "react";
import { useAuth, useRequireAuth } from "../hooks/useAuth";

function Login() {
  const [user, setUser] = useState('');
  const [error, setError] = useState('');
  const auth = useRequireAuth("/", true);

  if (!auth) {
    return <h1>Loading...</h1>;
  }

  const handleSubmit = () => {
    if(!user) setError("Please introduce a username placeholder ⚠")
    auth.login(user)
  }

  return (
    <div>
      <h1 >Login Form</h1>
      <label>Username</label>
      <input onChange={(e) => setUser(e.target.value)} type={"text"} />
      {error && <p className="text-red-600 p-4 bg-red-300 rounded">{error}</p>}
      <button onBlur={()=>setError('')} onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
