import React, { useState } from "react";
import "./Home.css";
// import Login from "./Login";

const Home = () => {
  const [fields, setFields] = useState([{ value: null }]);
  const [inputs, setInputs] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
    // setInputs(values)
    console.log("hi");
  }

  function handleCreate() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
    // console.log("hello")
  }

  function handleDelete(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  function handleAdd() {
    const values = [...inputs];
    values.push({ value: null });
    setInputs(values);
    /**setfields yerine başka */
  }

  function handleRemove(){
      const values = [...inputs];
      values.splice(1);
      setInputs(values)
  }

  return (
    <div className="home-container">
      <div className="left-container">
        <div className="profile-section">
          <p className="avatar">GG</p>
          <p className="username">
            {localStorage.getItem("user", JSON.stringify())}
          </p>
        </div>

        <div className="categories">
          <label>
            <input
              className="category-name"
              type="checkbox"
              value="education"
            />
            EDUCATION
          </label>
          <label>
            <input className="category-name" type="checkbox" value="business" />
            BUSINESS
          </label>
          <label>
            <input className="category-name" type="checkbox" value="personal" />
            PERSONAL
          </label>
          <label>
            <input className="category-name" type="checkbox" value="others" />
            OTHERS
          </label>
        </div>
      </div>

      <div className="right-container">
        <div className="create-card-container">
          <h3 className="create-title">CLICK TO CREATE A NEW CARD</h3>
          <button
            className="create-btn"
            type="button"
            onClick={() => handleCreate()}
          >
            CREATE
          </button>
        </div>
        <div>
          {fields.map((field, idx) => {
            return (
              <div key={`${field}-${idx}`} className="text-container">
                <div>
                  <button
                    className="delete-btn"
                    type="button"
                    onClick={() => handleDelete(idx)}
                  >
                    Delete
                  </button>
                </div>
                <input
                  className="text-input"
                  type="text"
                  placeholder="Write a Title..."
                />
                {inputs.map((input, id) => {
                  return (
                    <div key={`${field}-${idx}-${id}`}>
                      <input
                        className="text-input"
                        type="text"
                        value={field.value || ""}
                        onChange={(e) => handleChange(idx, e)}
                      />
                      <div className="check-box">
                        <input type="checkbox" />
                        <button onClick={() => handleRemove(id)}>X</button>
                        <button onClick={() => handleAdd(id)}>Add</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
