import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chart: {
    fontSize: "14px",
    width: "100%",
  },
  gridstroke: {
    stroke: "rgb(228, 225, 225)",
  },
}));

const data = [
  {
    name: "January",
    expected: 4000,
    actual: 2400,
    amt: 2400,
  },
  {
    name: "February",
    expected: 3000,
    actual: 1398,
    amt: 2210,
  },
  {
    name: "March",
    expected: 2000,
    actual: 9800,
    amt: 2290,
  },
  {
    name: "April",
    expected: 2780,
    actual: 3908,
    amt: 2000,
  },
  {
    name: "May",
    expected: 1890,
    actual: 4800,
    amt: 2181,
  },
  {
    name: "June",
    expected: 2390,
    actual: 3800,
    amt: 2500,
  },
];

function Chart() {
  const classes = useStyles();
  return (
    <div className={classes.chart}>
      <ResponsiveContainer className={classes.res} width="100%" height={322}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className={classes.gridstroke} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="expected"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="actual"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
