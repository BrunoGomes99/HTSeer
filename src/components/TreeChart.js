import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class TreeChart extends Component {
    render() {
        return (
            <ReactEcharts
                option={{
                    tooltip: {
                        trigger: 'item',
                        triggerOn: 'mousemove'
                    },
                    series: [
                        {
                            type: 'tree',
                            data: [
                                {
                                    name: "states",
                                    children: [
                                        {
                                            name: "CA",
                                            children: [
                                                {
                                                    name: "CA_1",
                                                    children: [
                                                        { name: "CA_1_HOBBIES" },
                                                        { name: "CA_1_HOUSEHOLD" },
                                                        { name: "CA_1_FOODS" }
                                                    ]
                                                },
                                                { name: "CA_2" },
                                                { name: "CA_3" },
                                                { name: "CA_4" }
                                            ]
                                        },
                                        {
                                            name: "TX",
                                            children: [
                                                { name: "TX_1" }, { name: "TX_2" }, { name: "TX_3" }
                                            ]
                                        }
                                    ]
                                }
                            ],
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