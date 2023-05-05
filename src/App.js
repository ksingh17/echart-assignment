import React from 'react';
import ReactECharts from 'echarts-for-react';
import wineData from '../src/Wine-Data.json'
import LineGraph from './Graphs/LineGraph';
import BarGraph from './Graphs/BarGraph';
const flavanoids=[];
const ash=[]
const alcohol=[]
const magnesium=[]
const App = () => {

  return(
    <div>
  
            {wineData.map((item, index) => {
                flavanoids.push(item.Flavanoids)
                ash.push(item.Ash)
                alcohol.push(item.Alcohol)
                magnesium.push(item.Magnesium)

            

            })}
             <LineGraph ash={ash} flavanoid={flavanoids}/>
                        <BarGraph alcohol={alcohol} magnesium={magnesium}/>
        </div>
  )
};

export default App;