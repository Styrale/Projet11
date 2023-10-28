import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function ProfileDetails() {
  const [isEditing, setIsEditing] = useState(false);
  const {userName, token} = useSelector(store => store.user)

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <>
      {isEditing ? (
        <div className="header">
          <h3> Please, input your desired new username.</h3>
          <input className="name-change-field"
            type="text"
            value={userName}
            onChange={handleNameChange}
          />
          <button className="name-change-button" onClick={handleSaveClick}>Save</button>
          <button className="name-change-button" onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div className="header">
          <h1>Welcome back, {userName}!</h1>
          <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
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
  )
}
