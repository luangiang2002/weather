
import { useSelector } from "react-redux";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";
export default function Chart() {
    const weather = useSelector(state => state.weather.weather.forecast.forecastday)
    // console.log(weather);
    // console.log(weather[0].hour[0]);
    const data = [
        {
            name: "08:00",
            Temperature: weather[0].hour[7].temp_c,
            pv: 2400,
            amt: 2400
        },
        {
            name: "10:00",
            Temperature: weather[0].hour[9].temp_c,
            pv: 1398,
            amt: 2210
        },
        {
            name: "12:00",
            Temperature: weather[0].hour[11].temp_c,
            pv: 9800,
            amt: 2290
        },
        {
            name: "14:00",
            Temperature: weather[0].hour[13].temp_c,
            pv: 3908,
            amt: 2000
        },
        {
            name: "16:00",
            Temperature: weather[0].hour[15].temp_c,
            pv: 4800,
            amt: 2181
        },
        {
            name: "18:00",
            Temperature: weather[0].hour[17].temp_c,
            pv: 3800,
            amt: 2500
        },
        {
            name: "20:00",
            Temperature: weather[0].hour[19].temp_c,
            pv: 4300,
            amt: 2100
        },
        {
            name: "22:00",
            Temperature: weather[0].hour[21].temp_c,
            pv: 4300,
            amt: 2100
        }
    ];

    return (

        <AreaChart
            width={500}
            height={200}
            data={data}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Temperature" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    );
}
