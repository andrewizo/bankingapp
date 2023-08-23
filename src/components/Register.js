// Register.jsx

import React, { useState } from "react";
import { SideLink } from "./Sidebar";
import { RegistrationForm } from "./RegistrationForm"; // Import the RegistrationForm component
import { Sidebar } from "./Sidebar";

export const Register = (props) => {
    const { user, logoutHandler, changePage, page } = props;
    const [showCreateAccount, setShowCreateAccount] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false); // State for registration success

    const handleCreateAccountClick = () => {
        setShowCreateAccount(true);
    };

    const handleRegistrationSuccess = () => {
        setRegistrationSuccess(true);
        setShowCreateAccount(false); // Hide the form after registration success
    };

    return (
        <>
            <SideLink id="register" style={{ listStyle: 'none', textDecoration: 'none' }} onClickHandler={handleCreateAccountClick} active={page} page="create-account" icon="bx bx-user-pin" text="Don't have an account? Register here" />
            {showCreateAccount && !registrationSuccess && <RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />}
            {registrationSuccess && (
                <div>
                    <h1>Registration Successful</h1>
                    <p>You have successfully registered an account.</p>
                </div>
            )}
        </>
    );
};
