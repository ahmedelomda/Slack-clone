import React from 'react';
import { useHistory } from 'react-router-dom';
import db from '../Server/firebase';
import "../Styles/SidebarOption.css";


function SidebarOption({ Icon, title, id, addChannelOption }) {
   
    const history = useHistory();
    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`);
        } else {
            history.push(title);
        }
    };

    const addChannel = () => {
        const channelName = prompt("Please Enter Channel Name");
        if (channelName) {
            db.collection("rooms").add({
                name: channelName,
            })
        }
    };

    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="sidebarOption-icon" />}
            {Icon ? (
                <h3>{title}</h3>
            ):(
                <h3 className="sidebarOption-channel">
                    <span className="sidebarOption-hash">#</span>
                    {title}
                </h3>
            )}
        </div>
    )
}

export default SidebarOption;
