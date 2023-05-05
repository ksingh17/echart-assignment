import React from 'react';
import wineData from '../../src/Wine-Data.json'
import ReactECharts from 'echarts-for-react';

const BarGraph = (alcohol, magnesium) => {
    const xData=alcohol.alcohol
const yData=alcohol.magnesium

    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
          type: 'category',
          data: [xData],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [yData],
            type: 'bar',
            smooth: true,
          },
        ],
        tooltip: {
          trigger: 'axis',
        },
      };
    
      return(
        <div>
            <h1>Bar Graph</h1>
            <ReactECharts  option={options} />
        </div>
      );

  

   
}


export default BarGraph;