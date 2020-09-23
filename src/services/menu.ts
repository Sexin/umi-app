import request from '@/utils/request';

export async function fetchUserMenuu(): Promise<any> {
    return request('/api/currentMenu');
  }