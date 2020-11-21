import React from 'react';
import "../Styles/Header.css"; 
import { Avatar } from "@material-ui/core";
import { AccessTime, Search, HelpOutline } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";

function Header() {

    const [{ user }] = useStateValue();

    return (
        <div className="header">
            <div className="header-left">
                <Avatar 
                    className="header-avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />

                <AccessTime />

            </div>                
            <div className="header-search">
                <Search />

                <input placeholder="Search" />

            </div>    
            <div className="header-right">
                <HelpOutline />

            </div>
        </div>
    )
}

export default Header;
