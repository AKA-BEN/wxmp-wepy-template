import wxRequest from '@/utils/wx_request'

const getSomme = (params) => {
  return wxRequest('/category/getbrand', {
    method: 'POST',
    params: params,
    loading: true
  })
}

export default { getSomme }
