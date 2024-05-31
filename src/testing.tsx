import { useState } from "react";
import Plot from "react-plotly.js";
export default function Testing() {
  const [scale, setScale] = useState(1);
  const [dataX, setDataX] = useState([1, 2, 3]);
  const [dataY, setDataY] = useState([1, 2, 3]);
  function scaleY(dataY, limit) {
    if (!limit) {
      return dataY;
    }
    const scaleValue = limit / Math.max(...dataY);
    console.log(scaleValue);
    console.log(dataY.map((y) => y * scaleValue));
    return dataY.map((y: number) => y * scale);
  }
  return (
    <div>
      <input
        type="number"
        placeholder="Enter Y"
        onChange={(e) => {
          setScale(parseInt(e.target.value));
        }}
      />
      <Plot
        data={[
          {
            z: [
              [1, 20, 30],
              [20, 1, 60],
              [30, 60, 1],
            ],
            x: dataX,
            y: scaleY(dataY, scale),
            type: "heatmap",
          },
        ]}
        layout = {
          {
            width: 320,
            height: 240,
            title: "A Fancy Plot",
          }
        }
      />
    </div>
  );
}
