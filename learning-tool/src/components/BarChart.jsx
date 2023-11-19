import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function BarChart({ data, sortIndex, barColour }) {
    const chartRef = useRef(null);

    useEffect(() => {
        let chartInstance = null;

        if (chartRef.current && data) {
            if (chartInstance) {
                // Update the chart less frequently
                chartInstance.update({
                    duration: 500, // Adjust the duration as needed
                    easing: 'easeInOutQuart',
                });
            } else {
                const ctx = chartRef.current.getContext('2d');
                chartInstance = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: data.map((value, _) => `${value}`),
                        datasets: [
                            {
                                data: data,
                                backgroundColor: data.map((_, index) =>
                                    sortIndex.includes(index) ? barColour : 'rgba(0, 246, 246, 0.66)'
                                ),
                                borderColor: 'rgb(0,0,0)',
                                borderWidth: 3,
                            },
                        ],
                    },
                    options: {
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        legend: {
                            display: false,
                        },
                        animation: {
                            duration: 0, // Disable initial animation
                        },
                    },
                });
            }
        }

        return () => {
            if (chartInstance) {
                chartInstance.destroy(); // Cleanup when component unmounts
            }
        };
    }, [data, sortIndex]);

    return <canvas ref={chartRef} />;
    return (<canvas id="canvasExample" ref={chartRef}></canvas>);
}

export default BarChart;
