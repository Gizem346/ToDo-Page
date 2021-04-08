import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [newFields, setNewFields] = useState([{title:"", fieldinputs:[{todo:""}]}])
  const user = JSON.parse(localStorage.getItem("user"))
  function handleChange(i,j, event) {
    const values = newFields[i]
    values.fieldinputs[j].todo = event.target.value;
    newFields.splice(i,1,values)
    setNewFields([...newFields])
  }

  function handleCreate() {
    const values = [...newFields, {title:"", fieldinputs:[{todo:""}]}];
    setNewFields(values);
  }

  function handleDelete(i) {
    const values = [...newFields];
    values.splice(i, 1);
    setNewFields(values);
  }

  function handleAdd(i) {
    const values = newFields[i]
    values.fieldinputs.push({ todo: "" });
    newFields.splice(i,1,values)
    setNewFields([...newFields])
  }

  function handleRemove(i,j){
      if (j>0){
        const values = newFields[i]
        values.fieldinputs.splice(j, 1);
        newFields.splice(i,1,values)
        setNewFields([...newFields])
      }
  }

  return (
    <div className="home-container">
      <div className="left-container">
        <div className="profile-section">
          <p className="avatar">{user.name[0]}{user.surname[0]}</p>
          <p className="username">
            {user.name} {user.surname}
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
            onClick={handleCreate}
          >
            CREATE
          </button>
        </div>
        <div>
          {newFields.map((field, idx) => {
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
                <button className="add-btn" onClick={() => handleAdd(idx)}>+</button>
                {field.fieldinputs.map((input, index) => {
                  return (
                    <div key={`${field}-${idx}-${index}`}>
                      <input
                        className="text-input"
                        type="text"
                        value={input.todo || ""}
                        onChange={(e) => handleChange(idx,index, e)}
                      />
                      <div className="check-box">
                        <input type="checkbox" />
                        <button className="remove-btn" onClick={() => handleRemove(idx,index)}>X</button>
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
