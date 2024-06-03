const ctx = document.getElementById('myChart').getContext('2d');
 
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024'],
    datasets: [{
      label: 'Systolic Pressure',  // Change label for clarity
      backgroundColor: 'rgba(255, 99, 132, 0.2)',  // Use transparent red for background
      borderColor: 'rgb(255, 99, 132)',  // Solid red for border
      data: [60, 100, 80, 120, 80, 140],
      borderWidth: 1  // Adjust border width as desired
    }, {
      label: 'Diastolic Pressure',  // Add new dataset for second line
      backgroundColor: 'rgba(54, 162, 235, 0.2)',  // Use transparent blue for background
      borderColor: 'rgb(54, 162, 235)',  // Solid blue for border
      data: [80, 50, 70, 100, 120, 160],  // Different data values for second line
      borderWidth: 1  // Adjust border width as desired
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: !true  // Ensure y-axis starts from minimum value
      }
    }
  }
});
 
 
const login = async () => {
  const loginUrl = 'https://fedskillstest.coalitiontechnologies.workers.dev';
  let username = 'coalition';
  let password = 'skills-test';
  let auth = btoa(`${username}:${password}`);
 
  const response = await fetch(loginUrl, {
    headers: {
      'Authorization': `Basic ${auth}`,
    },
  });
 
  if (!response.ok) {
    throw new Error('Login failed');
  }
  const loginData = await response.json();
  console.log("Data returned", loginData)

 
}
 
login() 