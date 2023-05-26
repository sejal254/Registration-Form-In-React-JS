import React, { useState } from "react";

const MultipleInputs = () => {
  const [userRegistration, setuserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  });
  const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserRegistration({ ...userRegistration, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      ...userRegistration,
      id: new Date().getTime().toString()
    };
    setRecords([...records, newRecord]);
    setuserRegistration({ username: "", email: "", phone: "", password: "" });
  };
  return (
    <>
      <from action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Fullname</label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.username}
            onChange={handleInput}
            name="username"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.email}
            onChange={handleInput}
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="phone">phone</label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.phone}
            onChange={handleInput}
            name="phone"
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.password}
            onChange={handleInput}
            name="password"
            id="password"
          />
        </div>
        <button type="summit">Registration</button>
      </from>
      <div>
        {records.map((curElem) => {
          return (
            <div className="showDataStyle">
              <p>{curElem.username}</p>
              <p>{curElem.email}</p>
              <p>{curElem.phone}</p>
              <p>{curElem.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MultipleInputs;
