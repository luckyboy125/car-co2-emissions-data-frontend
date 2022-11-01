import React from "react";
import "./App.css";

function App() {
  return (
    <div className="root">
      <div className="make-root">
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
          <div className="right-part">
            <div className="right-part-item">
              <div className="item-front">
                <div className="item-name">
                  Valid <div className="item-square green-bg"></div>
                </div>
                <div className="item-count">7385</div>
              </div>
              <div className="item-last grey">100%</div>
            </div>
            <div className="right-part-item">
              <div className="item-front">
                <div className="item-name">
                  Mismatched <div className="item-square orange-bg"></div>
                </div>
                <div className="item-count">0</div>
              </div>
              <div className="item-last grey">0%</div>
            </div>
            <div className="right-part-item">
              <div className="item-front">
                <div className="item-name">
                  Missing <div className="item-square red-bg"></div>
                </div>
                <div className="item-count">0</div>
              </div>
              <div className="item-last grey">0%</div>
            </div>
            <div className="right-part-item">
              <div className="item-front">
                <div className="item-name">Unique</div>
                <div className="item-count">42</div>
              </div>
              <div className="item-last grey"></div>
            </div>
            <div className="right-part-item">
              <div className="item-front">
                <div className="item-name">Most Common</div>
                <div className="item-count">FORD</div>
              </div>
              <div className="item-last grey">9%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
