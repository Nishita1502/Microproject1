// script.js
document.addEventListener('DOMContentLoaded', () => {
    const fetchDataBtn = document.getElementById('fetch-data-btn');
    const dataContainer = document.getElementById('data-container');
  
    fetchDataBtn.addEventListener('click', async () => {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
  
        // Displaying JSON data
        dataContainer.innerText = JSON.stringify(data, null, 2);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    });
  });
  