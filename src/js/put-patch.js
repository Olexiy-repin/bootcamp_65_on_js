/*
 * Method(PUT/PATCH). Headers ("Content-Type": "application/json"). Body.
 */

const BASE_URL = 'http://localhost:3000';

const updateUserInfo = (userId, dataForUpdate) => {
  const fetchOptions = {
    method: 'PUT',
    body: JSON.stringify(dataForUpdate),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(`${BASE_URL}/users/${userId}`, fetchOptions).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

updateUserInfo(11, {
  email: 'iwi@asfor.li',
  phone: '(677) 963-5502',
})
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
