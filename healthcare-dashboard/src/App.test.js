import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      const loginUrl = 'https://fedskillstest.coalitiontechnologies.workers.dev';
      const username = 'coalition';
      const password = 'skills-test';
      const auth = btoa(`${username}:${password}`);

      try {
        const response = await fetch(loginUrl, {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }

        const loginData = await response.json();
        console.log('Data returned', loginData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024'],
        datasets: [
          {
            label: 'Systolic Pressure',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            data: [60, 100, 80, 120, 80, 140],
            borderWidth: 1,
          },
          {
            label: 'Diastolic Pressure',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            data: [80, 50, 70, 100, 120, 160],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return <canvas id="myChart"></canvas>;
};

export default ChartComponent;