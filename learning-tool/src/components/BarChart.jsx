import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function BarChart({ data, sortIndex, barColour }) {
    const chartRef = useRef(null);
    useEffect(() => {
        let chartInstance = null;

        if (chartRef.current && data) {
            if (chartInstance) {
                chartInstance.update({
                    duration: 2000,
                    easing: 'easeInOutQuart',
                });
            }

            const ctx = chartRef.current.getContext('2d');
            chartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map((value, _) => `${value}`),
                    datasets: [
                        {
                            data: data,
                            backgroundColor: function(context) {
                                const index = context.dataIndex
                                for (let i=0; i< sortIndex.length;i++){
                                    if (index === sortIndex[i]) {
                                        return barColour
                                    }
                                }
                                return 'rgba(0, 246, 246, 0.66)';
                            },
                            borderColor: 'rgb(0,0,0)',
                            borderWidth: 3,
                        },
                    ],
                },
                options: {
                    plugins: {
                        legend: {
                            display: false
                        },
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    animation: {
                        duration: 0, // Disable initial animation
                    },
                }
            });
        }

        return () => {
            if (chartInstance) {
                chartInstance.destroy(); // Cleanup when component unmounts
            }
        };
    }, [data, sortIndex]);

    return <canvas ref={chartRef} />;
}

export default BarChart;
