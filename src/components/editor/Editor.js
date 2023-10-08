import React , { useState } from "react";
import './Editor.css';

import { Switch } from "./Switch/Switch";
import { EditArea } from "./EditArea/EditArea";

const Editor = () => {
    const [mode, setMode] = useState("HTML");
    return (
        <main className="width-100 bg-secondary">
            <Switch mode={mode} changeMode={btn => setMode(btn)} />
            <EditArea />
        </main>
    )
}

export { Editor }; 