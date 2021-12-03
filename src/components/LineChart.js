import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import data_x from './data/data_x.json'

class LineChart extends Component {
    render() {
        const colors = ['#5470C6', '#EE6666'];
        return (
            <ReactEcharts
                option={{
                    color: colors,
                    tooltip: {
                        trigger: 'none',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    legend: {top: 'bottom'},
                    tooltip: {
                        trigger: 'axis'
                      },
                    
                    toolbox: {
                        left: 'right',
                        itemSize: 15,
                        top: 10,
                        feature: {
                          dataZoom: {
                            yAxisIndex: 'none'
                          },
                          restore: {}
                        }
                    },
                    grid: {
                        top: 70,
                        bottom: 50
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    color: colors[1]
                                }
                            },
                            axisPointer: {
                                label: {
                                    formatter: function (params) {
                                        return (
                                            'Precipitation  ' +
                                            params.value +
                                            (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                                        );
                                    }
                                }
                            },
                            data: data_x.datax1 //['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
                        },
                        {
                            type: 'category',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    color: colors[0]
                                }
                            },
                            axisPointer: {
                                label: {
                                    formatter: function (params) {
                                        return (
                                            'Precipitation  ' +
                                            params.value +
                                            (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                                        );
                                    }
                                }
                            },
                            data: data_x.datax2//['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: 'Histórico',
                            type: 'line',
                            xAxisIndex: 1,
                            smooth: true,
                            emphasis: {
                                focus: 'series'
                            },
                            data: data_x.datay1//[ 2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3 ]
                        },
                        {
                            name: 'Modelo X',
                            type: 'line',
                            smooth: true,
                            emphasis: {
                                focus: 'series'
                            },
                            data: data_x.datay2//[3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
                        }
                    ]
                }}
            />
        );
    }
}
export default LineChart;