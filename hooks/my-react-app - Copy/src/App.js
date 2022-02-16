import React, { useReducer, useEffect, useRef, useState } from "react";

import "./App.css";

const initialState = {
  name: "",
  mail: "",
  users: []
};

const reducer = function (state = initialState, data) {
  switch (data.action) {
    case "get":
      return { ...state, users: data.response };
      break;
    default:
      break;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [refreshUser, setRefresh] = useState(false);
  const nameRef = useRef(null);
  const mailRef = useRef(null);

  useEffect(() => {
    getUsers();

    return () => {
      //
    };
  }, []);

  const getUsers = () => {
    fetch("http://localhost:8000/posts")
      .then(response => response.json())
      .then(
        response => {
          // console.log(response);
          dispatch({ action: "get", response: response });
        },
        () => { }
      );
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const nameInput = nameRef.current.value;
    const mailInput = mailRef.current.value;

    const userData = {
      name: nameInput,
      mail: mailInput
    };

    console.log(userData);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    };
    fetch("http://localhost:8000/posts", requestOptions)
      .then(response => response.json())
      .then(
        response => {
          console.log(response);
          getUsers();
          // setRefresh(true);
          // dispatch({ action: "get", response: response });
        },
        () => { }
      );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="mt-3 col-6">
          <form onSubmit={onFormSubmit} noValidate>
            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>Name</strong>
              </label>
              <input
                required
                type="text"
                name="name"
                ref={nameRef}
                className="form-control"
              />
            </div>

            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>Email</strong>
              </label>
              <input
                type="text"
                ref={mailRef}
                name="mail"
                className="form-control"
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </div>
          </form>

          <br />
        </div>
        <div className="mt-3 col-6">
          <form>
            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>Name</strong>
              </label>
              <input
                required
                type="text"
                name="name"
                className="form-control"
              />
            </div>

            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>Email</strong>
              </label>
              <input
                type="text"
                ref={mailRef}
                name="email"
                className="form-control"
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </div>
          </form>

          <br />
        </div>
      </div>
      <div>
        <table className="table table-bordered table-striped table-hover table-condensed">
          <thead>
            <tr>
              <th>name </th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {state.users.map((obj, i) => (
              <tr key={i}>
                <td>{obj.name}</td>
                <td>{obj.mail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
