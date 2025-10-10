
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Charts = () => {
    return (
        <div className='w-full h-60'>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart layout='vertical' data=''>
                    <XAxis type='number'></XAxis>
                    <YAxis type='category' dataKey="name"></YAxis>
                    <Tooltip></Tooltip>
                    <Bar dataKey="count" fill="#FF8811" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Charts;