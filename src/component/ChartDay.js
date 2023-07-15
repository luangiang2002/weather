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
export default function ChartDay({ weatherDay }) {
    const [time, SetTine] = useState([])
    const [hudimity, SetHumi] = useState([])
    const [uv, SetUv] = useState([])
    const [temp, SetTemp] = useState([])
    useEffect(() => {
        const newTemplate = [];
        const newUv = []
        const newHudimity = []
        const Newtime = []
        weatherDay[0].hour.forEach((hour) => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
            }
        },
    };
    const data = {
        labels: time,
        datasets: [

            {
                label: 'uv',
                data: uv,
                fill: true,
                borderColor: '#FF9900',
                backgroundColor: '#FFCC66',
                hidden: true,
            },
            {
                label: 'Template',
                data: temp,
                fill: true,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: '#66CCFF',
            },
            {
                label: 'Hudimity',
                data: hudimity,
                fill: true,
                borderColor: '#FF9900',
                backgroundColor: '#FFCC66',
                hidden: true
            },
        ],
    };
    return (
        <>
            {
                <>
                    <Line options={options} data={data} />

                </>
            }
        </>
    )
}
