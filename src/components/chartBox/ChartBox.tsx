import "./chartBox.scss"
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
}

const ChartBox = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="icon" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <span style={{color: props.color}}>view all</span>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip contentStyle={{background: "transparent", border: "none"}} labelStyle={{display: "none"}} position={{x:10, y:60}} />
              <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage" style={{color: props.percentage < 0 ? "tomato" : "lightgreen"}}>{props.percentage}</span>
          <span className="duration">This Year</span>
        </div>
      </div>
    </div>
  )
}

export default ChartBox