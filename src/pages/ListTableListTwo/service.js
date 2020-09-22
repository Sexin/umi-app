import request from 'umi-request';

export async function queryRule(params) {
  return request('/api/rule', {
    params,
  });
}
export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'delete' },
  });
}
export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function updateRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'update' },
  });
}


// 获取西哥的接口数据
export async function getList(params) {
    return request('/api/xige/getlist', {
        method: 'POST',
        headers: {
            'token': localStorage.getItem('token')
        },
        data: { ...params }
    })
}

