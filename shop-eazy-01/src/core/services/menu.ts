import api from './axios';

export const menuService = {
  async getTopMenu() {
    const response = await api.get('/topmenu');
    return response.data;
  },
};
