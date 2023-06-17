import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

export const ChartComponent = props => {
  const {
    data,
    colors: {
      backgroundColor = 'white',
      lineColor = '#2962FF',
      textColor = 'black',
      areaTopColor = '#2962FF',
      areaBottomColor = 'rgba(41, 98, 255, 0.28)',
    } = {},
  } = props;

  const chartContainerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
    });
    chart.timeScale().fitContent();

    const series = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
    series.setData(data);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]);

  return <div ref={chartContainerRef} />;
};

export function Graphic(props) {
  const initialData = [
    { time: '2021-01-01', value: 40000 },
    { time: '2021-02-01', value: 45000 },
    { time: '2021-03-01', value: 60000 },
    { time: '2021-04-01', value: 55000 },
    { time: '2021-05-01', value: 40000 },
    { time: '2021-06-01', value: 30000 },
    { time: '2021-07-01', value: 35000 },
    { time: '2021-08-01', value: 37000 },
    { time: '2021-09-01', value: 25000 },
    { time: '2021-10-01', value: 30000 },
    { time: '2021-11-01', value: 22000 },
    { time: '2021-12-01', value: 20000 },
    { time: '2022-01-01', value: 18000 },
    { time: '2022-02-01', value: 12500 },
    { time: '2022-03-01', value: 15000 },
    { time: '2022-04-01', value: 13500 },
    { time: '2022-05-01', value: 14000 },
    { time: '2022-06-01', value: 18000 },
    { time: '2022-07-01', value: 20000 },
    { time: '2022-08-01', value: 17500 },
    { time: '2022-09-01', value: 19000 },
    { time: '2022-10-01', value: 17000 },
    { time: '2022-11-01', value: 20000 },
    { time: '2022-12-01', value: 22000 },
    { time: '2023-01-01', value: 18000 },
    { time: '2023-02-01', value: 18500 },
    { time: '2023-03-01', value: 19000 },
    { time: '2023-04-01', value: 16500 },
    { time: '2023-05-01', value: 20000 },
    { time: '2023-06-01', value: 20500 },
    { time: '2023-07-01', value: 26200 },
  ];


  return <ChartComponent {...props} data={initialData} />;
}
