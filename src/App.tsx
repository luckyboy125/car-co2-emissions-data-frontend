import React from "react";
import "./asset/public.css";
import "./asset/root.css";
import "./asset/analysis.css";
import Analysis from "./component/Analysis";

function App() {
  return (
    <div className="root">
      <div className="paragraph-root">
        <div className="title">
          <span className="title-important">A</span>Make
        </div>
        <div className="description">Company of the Vehicle</div>
        <div className="detail-root">
          <div className="left-part">
            <div className="left-part-item">
              <div className="item-name">FORD</div>
              <div className="item-percent blue">9%</div>
            </div>
            <div className="left-part-item">
              <div className="item-name">CHEVROLET</div>
              <div className="item-percent blue">9%</div>
            </div>
            <div className="left-part-item">
              <div className="item-name grey">Other (6169)</div>
              <div className="item-percent grey">84%</div>
            </div>
          </div>
          <Analysis
            valid={7385}
            valid_percent={100}
            mismatched={0}
            mismatched_percent={0}
            missing={0}
            missing_percent={0}
            unique={42}
            most_common="FORD"
            most_common_percent={9}
          />
        </div>
      </div>
      <div className="paragraph-root">
        <div className="title">
          <span className="title-important">A</span>Model
        </div>
        <div className="description">Car Model</div>
        <div className="detail-root">
          <div className="left-part">
            <div>
              <div className="item-unique-count blue">2053</div>
              <div className="item-unique">Unique Values</div>
            </div>
          </div>
          <Analysis
            valid={7385}
            valid_percent={100}
            mismatched={0}
            mismatched_percent={0}
            missing={0}
            missing_percent={0}
            unique={42}
            most_common="FORD"
            most_common_percent={9}
          />
        </div>
      </div>
      <div className="paragraph-root">
        <div className="title">
          <span className="title-important">A</span>Vehicle Class
        </div>
        <div className="description">
          Class of vehicle depending on their utility, capacity and weight
        </div>
        <div className="detail-root">
          <div className="left-part">
            <div className="left-part-item">
              <div className="item-name">SUV-SMALL</div>
              <div className="item-percent blue">9%</div>
            </div>
            <div className="left-part-item">
              <div className="item-name">MID-SIZE</div>
              <div className="item-percent blue">9%</div>
            </div>
            <div className="left-part-item">
              <div className="item-name grey">Other (5035)</div>
              <div className="item-percent grey">84%</div>
            </div>
          </div>
          <Analysis
            valid={7385}
            valid_percent={100}
            mismatched={0}
            mismatched_percent={0}
            missing={0}
            missing_percent={0}
            unique={42}
            most_common="FORD"
            most_common_percent={9}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
