import React from "react";
import { useState } from "react";

const RegistrationForm =() => {
    const [username, setUsername] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");

const handleSubmit = (e) => {
    e.preventDefault();
       if (!username || !email || !password) {
  alert("All fields are required!");
  return;
}

    console.log({ username, email, password });    


        setUsername("")
        setEmail("")
        setPassword("")
};

return (
    <form onSubmit={handleSubmit}>
        <input
    type="text"
    placeholder="username"
    value={username}
    onChange={(e) => 
        setUsername(e.target.value)}
        />

        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
            setEmail(e.target.value)}
            /> 

        <input 
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=> 
            setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
    </form>
);
        };

        export default RegistrationForm;







9

