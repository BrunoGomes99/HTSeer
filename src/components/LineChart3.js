import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import data_x from './data/data_x.json'
import data_lc from './data/data_lineChart.json'


class LineChart3 extends Component {

    render() {
        const colors = ['#5470C6', '#EE6666','#07ffe2'];
        const models = data_lc.nivel[0].values        
        const modelList = models.map(function(item){
            return {
                        
                name: item[0],//'AutoArima',//data_lc.nivel[0].values[0].previsao[0].keys,//
                type: 'line',
                lineStyle: {
                        type: (item[0]=="Historico") ? 'continuous':'dashed'
                    },
                smooth: true,
                emphasis: {
                        focus: 'series'
                    },
                data: item[1] //data_lc.nivel[0].values[0].previsao[0].autoArima
                
            }
            
        }
        );
        console.log(modelList)
        return (
            <ReactEcharts
                
                option={{
                    color: colors,

                    title: {
                        left: 'left',
                        text: data_lc.nivel[0].name//'Predições loja CA_1' //titulo
                    },
                    legend: {
                        orient: 'vertical',
                        right: 10,
                        top: 50//'top'
                    },
                    tooltip: {
                        trigger: 'axis'
                      },
                    
                    toolbox: {
                        left: 'center',
                        itemSize: 15,
                        top: 20,
                        feature: {
                          dataZoom: {
                            yAxisIndex: 'none'
                          },
                          restore: {}
                        }
                    },
                    grid: {
                        top: 50,
                        bottom: 50
                    },
                    xAxis: //[
                        {
                            type: 'category',
                            //axisTick: {
                            //    alignWithLabel: true
                            //},
                            //axisLine: {
                            //   onZero: false//,
                                //lineStyle: {
                                 //   color: colors[0]
                                //}
                            //},
                            // axisPointer: {
                            //     label: {
                            //         formatter: function (params) {
                            //             return (
                            //                 //'Precipitation  ' +
                            //                 params.value +
                            //                 (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                            //             );
                            //         }
                            //     }
                            // },
                            data: data_lc.recorte//data_x.datax1 //['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
                        },
                        // {
                        //     type: 'category',
                        //     axisTick: {
                        //         alignWithLabel: true
                        //     },
                        //     axisLine: {
                        //         onZero: false,
                        //         lineStyle: {
                        //             color: colors[0]
                        //         }
                        //     },
                        //     axisPointer: {
                        //         label: {
                        //             formatter: function (params) {
                        //                 return (
                        //                     'Precipitation  ' +
                        //                     params.value +
                        //                     (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                        //                 );
                        //             }
                        //         }
                        //     },
                        //     data: data_x.datax2//['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
                        // }
                    //],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: modelList

                }}
            />
        );
    }
}
export default LineChart3;