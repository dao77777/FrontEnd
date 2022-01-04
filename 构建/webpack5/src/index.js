import * as echarts from "echarts";
import print from "./print.js";
import { haha } from "./wow.js";
import "./style.css";
import png from "./url.png";
import woff from "./url.woff";
import csv from "./data.csv";
import xml from "./data.xml";
import toml from "./data.toml";
import yaml from "./data.yaml";
import json5 from "./data.json5";


print();
haha();
console.log(png);
console.log(woff);
console.log(csv);
console.log(xml);
console.log(toml);
console.log(yaml);
console.log(json5);

const main = document.querySelector("#main");
main.addEventListener("click", async () => {
  const promise = await import(/* webpackChunkName: "common", webpackPrefetch: true */ "./common.js");
  console.log(promise);
})

// 基于准备好的dom，初始化echarts实例
const myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据
const option = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);