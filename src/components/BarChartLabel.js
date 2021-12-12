import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class BarChartLabel extends Component {
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
                      mark: { show: true },
                      dataView: { show: true, readOnly: false },
                      magicType: { show: true, type: ['line', 'bar', 'stack'] },
                      restore: { show: true },
                      saveAsImage: { show: true }
                    }
                  },
                  xAxis: [
                    {
                      type: 'category',
                      axisTick: { show: false },
                      data: ['RMSE', 'MAPE'],
                    }
                  ],
                  yAxis: [
                    {
                      type: 'value'
                    }
                  ],
                  series: [
                    {
                      name: 'Prophet',
                      type: 'bar',
                      barGap: 0,
                      barWidth: "20%",
                      label: labelOption,
                      emphasis: {
                        focus: 'series'
                      },
                      data: [120, 80]
                    },
                    {
                      name: 'Auto-Arima',
                      type: 'bar',
                      label: labelOption,
                      emphasis: {
                        focus: 'series'
                      },
                      data: [110, 65]
                    },
                    {
                      name: 'A. Exponencial',
                      type: 'bar',
                      label: labelOption,
                      emphasis: {
                        focus: 'series'
                      },
                      data: [100, 85]
                    },
                  ]
                }}
            />
        );
    }
}
export default BarChartLabel;