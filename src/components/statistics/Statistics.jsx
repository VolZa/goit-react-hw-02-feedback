import { StatisticS, Statistic } from "./Statistics.styled";

export const StatisticsFeedback = ({ statistic, total }) => {
    const {good, neutral, bad} = statistic;
    const positivePercentage = Math.round((good / total) * 100);
    return (
        <StatisticS>
            <Statistic>Good: {good}</Statistic>
            <Statistic>Neutral: {neutral}</Statistic>
            <Statistic>Bad: {bad}</Statistic>
            <Statistic>Total: {total}</Statistic>
            <Statistic>Positive feedback: {positivePercentage}%</Statistic>
        </StatisticS>
    );
}

