import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class BarChartLabelRMSE extends Component {
    render() {

      const labelOption = {
        show: true,
        position: 'insideBottom',
        distance: 15,
        align: 'left',
        verticalAlign: 'middle',
        rotate: 90,
        formatter: '{c}  {name|{a}}',
        fontSize: 13,
        rich: {
          name: {}
        }
      };

        return (
            <ReactEcharts
                option={{
                  toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                      saveAsImage: { show: true }
                    }
                  },
                  title: {
                    left: 'left',
                    text: "RMSE"
                  },
                  xAxis: [
                    {
                      type: 'category',
                      axisTick: { show: false },
                      data: ["OLS", "WLSS"],
                    }
                  ],
                  yAxis: [
                    {
                      type: 'value'
                    }
                  ],
                  series: [
                    {
                       name: 'Auto-Arima',
                      type: 'bar',
                      label: labelOption,
                      emphasis: {
                        focus: 'series'
                      },
                      data: [3.4241, 3.4364]
                    },
                    {
                       name: 'Prophet',
                      type: 'bar',
                      barGap: 0,
                      barWidth: "20%",
                      label: labelOption,
                      emphasis: {
                        focus: 'series'
                      },
                      data: [4.0869, 4.1816]
                    },
                    {
                       name: 'Holt Winters',
                      type: 'bar',
                      label: labelOption,
                      emphasis: {
                        focus: 'series'
                      },
                      data: [3.9778, 3.9838]
                    },
                  ]
                }}
            />
        );
    }
}
export default BarChartLabelRMSE;