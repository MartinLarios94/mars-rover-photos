import axios from 'axios';

const nasaDB = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers',
  params: {
    api_key: '6KDZ2Fwgda90XOWJiSSfiaKGn3NreKOTAWSJVTnY',
  },
});

export default nasaDB;