import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import db from "../Server/firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";
import "../Styles/Chat.css";


function Chat() {
    
    const { roomId } = useParams();          //returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
    const [roomDetails, setRoomDetails] = useState({});
    const [roomMessages, setRoomMessages] = useState([]);

    useEffect(() => {
        if(roomId) {
            db.collection("rooms")
            .doc(roomId)
            .onSnapshot(snapshot =>
                setRoomDetails(snapshot.data())
            );

            db.collection("rooms")
            .doc(roomId)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot(snapshot => { 
                   console.log("snapshot", snapshot);
                   setRoomMessages(snapshot.docs.map(doc => doc.data()))
                }
            );
        }
    }, [roomId]);

    console.log("roomDetails", roomDetails);
    console.log("roomMessage", roomMessages);
    return (
        <div className="chat">
            <div className="chat-header">
                <div className="chat-headerLeft">
                    <h4 className="chat-channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlined />
                    </h4>
                </div>
                <div className="chat-headerRight">
                    <p>
                        <InfoOutlined /> Details
                    </p>
                </div>
            </div>    
            <div className="chat-messages">
                {roomMessages.map(({ message, timestamp, user, userImage }) => (
                    <Message 
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    /> 
                ))}
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat;
