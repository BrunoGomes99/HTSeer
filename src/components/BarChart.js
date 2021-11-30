import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class BarChart extends Component {
    render() {
        return (
            <ReactEcharts
                option={{
                    title: {
                        text: 'RMSE Loss vs Model'
                      },
                    xAxis: [{
                        type: 'category',
                        data: ['Prophet', 'Auto-Arima',  'A. Exponencial' ],
                        name: 'Modelo',
                        nameLocation: 'middle',
                        nameGap: 50
                      }],
                      yAxis: [{
                        type: 'value',
                        name: 'RMSE',
                        nameLocation: 'middle',
                        nameGap: 50
                      }],
                    
                      series: [
                        {
                          data: [120, 80, 150],
                          type: 'bar',
                          showBackground: true,
                          backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                          }
                        }
                      ]
                }}
            />
        );
    }
}
export default BarChart;