import React from "react";
import { useEffect, useState } from "react";
import { SideLink } from "./Sidebar"
import { CreateAccountPage } from "./CreateAccountPage";
import { Sidebar } from "./Sidebar";

export const Register = (props) => {
    const { user, logoutHandler, changePage, page } = props;

    return (
        <SideLink onClickHandler={changePage} active={page} page="create-account" icon="bx bx-user-pin" text="Create Account" />
    )    
}