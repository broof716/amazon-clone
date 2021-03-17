import axios from 'axios';

const instance = axios.create({ 
    // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-596ae.cloudfunctions.net/api'
  // 'http://localhost:5001/clone-596ae/us-central1/api'
});

export default instance;