import React from "react";
import "./root.scss";
import { Message } from "./message/message";

export const Root: React.FC = () => {
    return (
        <div className="root">
            <Message message="Typescript Electron" />
        </div>
    );
}