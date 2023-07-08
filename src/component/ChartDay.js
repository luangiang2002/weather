import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);
export default function ChartDay(props) {
const [time, SetTine] = useState([])
const [hudimity, SetHumi] = useState([])
const [uv, SetUv] = useState([])
const [temp, SetTemp] = useState([])
useEffect(() => {
    const newTemplate = [];
    const newUv = []
    const newHudimity = []
    const Newtime = []
    props.weatherDay.hour.filter((hour) => {
        if (hour.temp_c) {
            newTemplate.push(hour.temp_c)
        }
        if (hour.uv) {
            newUv.push(hour.uv)
        }
        if (hour.humidity) {
            newHudimity.push(hour.humidity)
        }
        if (hour.time) {
            const timesplit = hour.time.split(" ")[1]
            Newtime.push(timesplit)
        }
    });
    SetHumi(...hudimity, newHudimity)
    SetTemp(...temp, newTemplate)
    SetUv(...uv, newUv)
    SetTine(...time, Newtime)
}, [])
const options = {
    responsive: true,
    scales: {
      y: {
        stacked: true
      }
    },
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
        },
        tooltip:{
          enabled:true
        }
    },
};
const data = {
  labels:time,
    datasets: [
        {
            fill: true,
            label: 'Template',
            data: temp,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor:'rgb(195, 200, 143)',
        },
        {
            fill: true,
            label: 'uv',
            data:uv,
            borderColor: 'rgb(144, 131, 207)',
            backgroundColor: 'rgb(191, 131, 207)',
            hidden: true,
        },
        {
            fill: true,
            label: 'Hudimity',
            data:hudimity,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            hidden: true
        },
    ],
};
    return <Line options={options} data={data} />;
}
