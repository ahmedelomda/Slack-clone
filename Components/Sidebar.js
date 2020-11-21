import React, { useState, useEffect } from 'react';
import '../Styles/Sidebar.css';
import SidebarOption from "./SidebarOption";
import {FiberManualRecord, Create, InsertComment, BookmarkBorder, ExpandLess, FileCopy, PeopleAlt, Inbox, Drafts, Apps, ExpandMore, Add } from '@material-ui/icons';
import db from "../Server/firebase";
import { useStateValue } from "./StateProvider";


function Sidebar() {

    const [channels, setChannels] = useState([]);
    const [{ user }] = useStateValue();

    useEffect(() => {
        //Run this code once when sidebare component load
        db.collection("rooms").onSnapshot(snapshot => (
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name,
                }))
            )
        ));  
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-info">
                    <h2>Programming Life</h2>
                    <h3>
                        <FiberManualRecord />
                        {user?.displayName}
                    </h3>
                </div>
                <Create />                 
            </div>
            <SidebarOption Icon={InsertComment} title="threads"/>
            <SidebarOption Icon={Inbox} title="Mentions & Reactions"/>
            <SidebarOption Icon={Drafts} title="Saved items"/>
            <SidebarOption Icon={BookmarkBorder} title="Channel browser"/>
            <SidebarOption Icon={PeopleAlt} title="People & user groups"/>
            <SidebarOption Icon={Apps} title="Apps"/>
            <SidebarOption Icon={FileCopy} title="File browser"/>
            <SidebarOption Icon={ExpandLess} title="Show Less"/>
            <hr />
            <SidebarOption Icon={ExpandMore} title="Channels"/>
            <hr />
            <SidebarOption Icon={Add} addChannelOption title="Add Channel"/>
        
            {/* Connect to dB (firebase) */}
            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id} />
            ))}
        </div>
    )
}

export default Sidebar;
