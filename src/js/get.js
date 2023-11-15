/*
 * Method (GET).
 */

const BASE_URL = 'http://localhost:3000';

const fetchUsers = () => {
  const fetchOptions = {
    method: 'GET',
  };

  return fetch(`${BASE_URL}/users`, fetchOptions).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

fetchUsers()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
