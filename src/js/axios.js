import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const axiosOptions = {
  params: {
    page: 1,
    per_page: 20,
    lang: 'uk',
  },
};

axios
  .get('/comments', axiosOptions)
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });

axios
  .get('/posts')
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });

axios
  .get('/users')
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });
