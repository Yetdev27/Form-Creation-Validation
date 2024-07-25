// Initialize an asynchronous function to fetch user data
async function fetchUserData() {
    try {
      // Define the API URL
      const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
      // Select the data container element
      const dataContainer = document.getElementById('api-data');
  
      // Clear existing content (e.g., "Loading user data...")
      dataContainer.innerHTML = '';
  
      // Fetch data from the API
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const users = await response.json();
  
      // Create and append a user list
      const userList = document.createElement('ul');
      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });
  
      // Append the user list to the data container
      dataContainer.appendChild(userList);
    } catch (error) {
      // Handle errors
      const dataContainer = document.getElementById('api-data');
      dataContainer.textContent = 'Failed to load user data.';
      console.error('Error:', error);
    }
  }
  
  // Invoke fetchUserData when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', fetchUserData);
  
