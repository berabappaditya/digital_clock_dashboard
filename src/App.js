import React, { useState } from "react";
import "./App.css";

import { Logo } from "./componants/Logo";
import { Header } from "./componants/Header";
import { SideBar } from "./componants/SideBar";
import { Content } from "./componants/Content";
import { Footer } from "./componants/Footer";

function App() {
  const [time, updaterTime] = useState(" ");
  const [timeArray, updateTimeArray] = useState([]);
  const [count, UpdateCount] = useState(0);
  return (
    <div className="App">
      <div className="row" id="header">
        <div className="col-sm-1 logocon unboot">
          <Logo />
        </div>
        <div className="col-sm-8  d-flex justify-content-center unboot">
          <Header time={time} updaterTime={updaterTime} />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-1 SideBar unboot">
          <SideBar
            time={time}
            timeArray={timeArray}
            updateTimeArray={updateTimeArray}
            UpdateCount={UpdateCount}
            count={count}
          />
        </div>
        <div className="col-sm-8 unboot">
          <div className="content-non">
            <Content timeArray={timeArray} />
          </div>

          <Footer count={count} />
        </div>
      </div>
    </div>
  );
}

export default App;
