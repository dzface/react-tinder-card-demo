import React, { useState } from "react";
import "./App.css";
import Switch from "react-ios-switch";
//카드
import Advanced from "./examples/Advanced";
import Simple from "./examples/Simple";

export default function DatingApp() {
  const [showAdvanced, setShowAdvanced] = useState(true);
  return (
    <>
      <div className="app">
        {showAdvanced ? <Advanced /> : <Simple />}
        <div className="row">
          <p style={{ color: "#fff" }}>Show advanced example</p>{" "}
          <Switch checked={showAdvanced} onChange={setShowAdvanced} />
        </div>
      </div>
    </>
  );
}
