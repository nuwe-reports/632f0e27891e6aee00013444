import React from "react";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

function Login() {
  const [user, setUser] = useState('');
  const [error, setError] = useState('');
  const auth = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!user) setError("Please introduce a username placeholder ⚠")
    auth.login(user)
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2 m-auto">
      <h1 >Login Form</h1>
      <label>Username</label>
      <input onChange={(e) => setUser(e.target.value)} type={"text"} />
      {error && <p className="text-red-600 p-4 bg-red-300 rounded">{error}</p>}
      <button onBlur={()=>setError('')}>Login</button>
    </form>
  );
}

export default Login;
