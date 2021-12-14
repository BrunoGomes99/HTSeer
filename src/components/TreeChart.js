import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
//import data from './data/states_hierarchy.json'
//import data from './data/states.json'
// import data from './data/walmart.json'
// import data from './data/hierarquia_nova.json'
import data from './data/hierarquia.json'

class TreeChart extends Component {
    render() {
        return (
            <ReactEcharts
                option={{
                    tooltip: {
                        trigger: [data].name,
                        formatter: function (params) {
                            if (params.data.nomes.length == 1) {
                              return `<b>${params.data.nomes[0]}</b>: ${params.data.value[0]}`;
                            } else if (params.data.nomes.length == 2) {
                              return `<b>${params.data.nomes[0]}</b>: ${params.data.value[0]}</br>
                                   <b>${params.data.nomes[1]}</b>: ${params.data.value[1]}`;
                            } else if (params.data.nomes.length == 3) {
                              return `<b>${params.data.nomes[0]}</b>: ${params.data.value[0]}</br>
                                   <b>${params.data.nomes[1]}</b>: ${params.data.value[1]}</br>
                                   <b>${params.data.nomes[2]}</b>: ${params.data.value[2]}</br>`;
                            } else if (params.data.nomes.length == 4) {
                              return `<b>${params.data.nomes[0]}</b>: ${params.data.value[0]}</br>
                                   <b>${params.data.nomes[1]}</b>: ${params.data.value[1]}</br>
                                   <b>${params.data.nomes[2]}</b>: ${params.data.value[2]}</br>
                                   <b>${params.data.nomes[3]}</b>: ${params.data.value[3]}</br>`;
                            }
                              else {
                              return `<b>${params.data.nomes[0]}</b>: ${params.data.value[0]}</br>
                                   <b>${params.data.nomes[1]}</b>: ${params.data.value[1]}</br>
                                   <b>${params.data.nomes[2]}</b>: ${params.data.value[2]}</br>
                                   <b>${params.data.nomes[3]}</b>: ${params.data.value[3]}</br>
                                   <b>${params.data.nomes[4]}</b>: ${params.data.value[4]}</br>`;
                            }
                          }
                        // triggerOn: 'mousemove'
                    },
                    series: [
                        {
                            type: 'tree',
                            data: [data],
                            top: '1%',
                            left: '7%',
                            bottom: '1%',
                            right: '20%',
                            symbolSize: 7,
                            label: {
                                position: 'left',
                                verticalAlign: 'middle',
                                align: 'right',
                                fontSize: 9
                            },
                            leaves: {
                                label: {
                                    position: 'right',
                                    verticalAlign: 'middle',
                                    align: 'left'
                                }
                            },
                            emphasis: {
                                focus: 'descendant'
                            },
                            expandAndCollapse: true,
                            animationDuration: 550,
                            animationDurationUpdate: 750
                        }
                    ]
                }}
            />
        );
    }
}
export default TreeChart;