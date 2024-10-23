// config.js
import Constants from 'expo-constants';

const { manifest } = Constants;

// Define your environment variables here
const config = {
  API_URL: manifest?.debuggerHost
    ? 'http://192.168.1.129:3001' // For development
    : 'https://api.example.com', // For production
};

export default config;