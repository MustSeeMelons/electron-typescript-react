import React from "react";
import "./message.scss";

interface MessageProps {
    message: string;
}

export const Message: React.FC<MessageProps> = (props) => {
    return (
        <div className="message">{props.message}</div>
    );
}