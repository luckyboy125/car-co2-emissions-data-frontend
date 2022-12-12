import React, { useEffect, useState } from "react";
import Papa, { ParseResult } from "papaparse";
import "./asset/public.css";
import "./asset/root.css";
import "./asset/analysis.css";
import Analysis from "./component/Analysis";

type Data = {
  Make: string;
  Model: string;
  "Vehicle Class": string;
  "Engine Size(L)": string;
  Cylinders: string;
  Transmission: string;
  "Fuel Type": string;
  "Fuel Consumption City (L/100 km)": string;
  "Fuel Consumption Hwy (L/100 km)": string;
  "Fuel Consumption Comb (L/100 km)": string;
  "Fuel Consumption Comb (mpg)": string;
  "CO2 Emissions(g/km)": string;
};

type Values = {
  data: Data[];
};

function App() {
  const [values, setValues] = useState<Values | undefined>();
  const getCSV = () => {
    Papa.parse("data.csv", {
      header: true,
      download: true,
      skipEmptyLines: true,
      delimiter: ",",
      complete: (results: ParseResult<Data>) => {
        setValues(results);
      },
    });
  };
  useEffect(() => {
    getCSV();
  }, []);

  useEffect(() => {
    init();
  }, [values?.data.length]);

  const init = () => {
    // Reduce the data in the csv file by 10% according test job requirement.
    const initData = values?.data.slice(
      0,
      Math.floor(
        values?.data.length === undefined ? 0 : values?.data.length / 10
      )
    );
    console.log("all data : ", values?.data);
    //get 'make' part data
    const makeData = initData?.reduce((new_object: any, index: Data) => {
      new_object[index.Make] = new_object[index.Make] + 1 || 1;
      return new_object;
    }, {});

    const makeResult =
      makeData !== undefined &&
      Object.entries(makeData).sort((pre, cur) =>
        Number(pre[1]) > Number(cur[1]) ? -1 : 1
      );
    //get 'model' part data
    const modelData = initData?.reduce((new_object: any, it: Data) => {
      new_object[it.Model] = new_object[it.Model] + 1 || 1;
      return new_object;
    }, {});

    const modelResult =
      modelData !== undefined &&
      Object.entries(modelData).sort((pre, cur) =>
        Number(pre[1]) > Number(cur[1]) ? -1 : 1
      );
    //get 'vehicle' part data
    const vehicleData = initData?.reduce((new_object: any, it: Data) => {
      new_object[it["Vehicle Class"]] =
        new_object[it["Vehicle Class"]] + 1 || 1;
      return new_object;
    }, {});

    const vehicleResult =
      vehicleData !== undefined &&
      Object.entries(vehicleData).sort((pre, cur) =>
        Number(pre[1]) > Number(cur[1]) ? -1 : 1
      );

    console.log("result1", makeResult);
    console.log("result2", modelResult);
    console.log("result3", vehicleResult);
  };

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
