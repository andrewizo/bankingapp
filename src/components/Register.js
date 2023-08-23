// Register.jsx

import React, { useState } from "react";
import { SideLink } from "./Sidebar";
import { RegistrationForm } from "./RegistrationForm"; // Import the RegistrationForm component
import { Sidebar } from "./Sidebar";

export const Register = (props) => {
    const { user, logoutHandler, changePage, page } = props;
    const [showCreateAccount, setShowCreateAccount] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false); // State for registration success
    const [showCloseLink, setShowCloseLink] = useState(false); // State to control the visibility of the Close link

    const handleCreateAccountClick = () => {
        setShowCreateAccount(true);
        setShowCloseLink(true); // Show the Close link when the Register button is clicked
    };

    const handleRegistrationSuccess = () => {
        setRegistrationSuccess(true);
        setShowCreateAccount(false); // Hide the form after registration success
        setShowCloseLink(false); // Hide the Close link after registration success
    };

    const handleCloseLinkClick = () => {
        setShowCreateAccount(false);
        setShowCloseLink(false); // Hide the Close link when it's clicked
    };

    return (
        <>
            <SideLink onClickHandler={handleCreateAccountClick} active={page} page="create-account" icon="bx bx-user-pin" text="Register" />
            {showCreateAccount && !registrationSuccess && (
                <>
                    <RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />
                    {showCloseLink && <p><a href="#" onClick={handleCloseLinkClick}>Close</a></p>}
                </>
            )}
            {registrationSuccess && (
                <div>
                    <h1>Registration Successful</h1>
                    <p>You have successfully registered an account.</p>
                </div>
            )}
        </>
    );
};
