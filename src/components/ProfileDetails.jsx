import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserName } from "../pages/Redux/user.actions";

export default function ProfileDetails() {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const { userName, firstName, lastName, token } = useSelector(
    (store) => store.user
  );
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userName: newName }),
    })
      .then((response) => {
        if (response.ok) {
          dispatch(updateUserName(newName));
          setIsEditing(false);
        } else {
          console.error("Erreur lors de la mise à jour du nom");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour du nom", error);
      });
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <form className="header">
          <h3> Please, input your desired new username.</h3>
          <div className="form-group">
            <p>Username:</p>
            <input
              className="name-change-field"
              type="text"
              placeholder={userName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <p>First Name:</p>
            <input
              className="name-field"
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              disabled
            />
          </div>
          <div className="form-group">
            <p>Last Name:</p>
            <input
              className="name-field"
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              disabled
            />
          </div>
          <div className="buttons">
            <button className="name-change-button" onClick={handleSaveClick}>
              Save
            </button>
            <button className="name-change-button" onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="header">
          <h1>Welcome back, {userName}!</h1>
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        </div>
      )}
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </>
  );
}
