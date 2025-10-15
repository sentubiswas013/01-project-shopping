import api from './axios';

export const userService = {
  async getAllUsers() {
    const response = await api.get('/users');
    console.log('Top Menu Data:', response.data);
    return response.data;
  },

  async createAllUsers() {
    const response = await api.get('/users');
    console.log('Top Menu Data:', response.data);
    return response.data;
  },


};
