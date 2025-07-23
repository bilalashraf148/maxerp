import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export const getJobs = async () => {
  return axios.get(`${API_URL}/api/jobs`);
};

export const createJob = async (payload) => {
  return axios.post(`${API_URL}/api/jobs`, payload);
};
