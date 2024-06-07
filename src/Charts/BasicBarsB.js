import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BasicBarsA() {
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: ["group A", "group B", "group C"] }]}
      series={[
        { data: [4, 3, 5], label: "Series A" },
        { data: [1, 6, 3], label: "Series B" },
      ]}
      width={500}
      height={300}
    />
  );
}
