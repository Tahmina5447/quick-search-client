"use client"

import { Column } from '@ant-design/plots';
import React from 'react';

const UserColumnChart = ({data}) => {
     const config = {
        data: data,
        xField: 'day',
        yField: 'value',
        color: "#ffffff",
        interactions: [{ type: 'element-active' }],
        state: {
            active: {
                animate: { duration: 100, easing: 'easeLinear' },
                style: {
                    lineWidth: 3,
                    fill: '#664DFF', // Set the fill color to white when active (hovered)
                    stroke: '#664DFF',
                },
            },
        },
        minColumnWidth: 10,
        maxColumnWidth: 30,
        columnStyle: {
            fill: '#664DFF',
            radius: [15, 15, 15, 15], // Set the radius for rounded corners
        },
        columnBackground: {
            style: {
              fill: '#c2cadd',
              radius: [15, 15, 15, 15],
            },
          },
        yAxis: {
            label: {
                style: {
                    fill: '#ffffff',
                },
            },
            grid: {
                line: {
                    style: {
                        stroke: '#ffffff',
                        lineWidth: 0,
                        cursor: 'pointer',
                    },
                },
            },
        },
        xAxis: {
            label: {
                style: {
                    fill: '#68769F',
                },
            },
            tickLine: {
                style: {
                    stroke: '#ffffff', // Set the tick line color to white
                },
            },
            line: {
                style: {
                    stroke: '#ffffff', // Set the axis line color to white
                },
            },
        },
        tooltip: {
            customContent: (title, items) => {

                return (
                    <div>
                        {items?.map((item, index) => {
                            const { title, value } = item

                            return (
                                <span className='relative bg-primary'>
                                    <span className=' h-5 w-5 rotate-45 absolute top-4 -left-1 z-[-1]'></span>
                                    <span
                                        key={index}
                                        className="flex flex-col pl-2.5 pr-7 py-2 bg-dark-gray rounded-[10px] z-10 mx-0"
                                        data-index={index}
                                    >
                                        <span className=' w-full text-[16px] font-bold'>{title}</span>
                                        <span className=" mt-2 font-medium text-[11px]">{value}</span>
                                    </span>
                                </span>
                            );
                        })}

                    </div>
                );
            },
        },

    };
    return (
        <div className=' h-[305px] mt-8'><Column {...config} /></div>
    );
};

export default UserColumnChart;