import wepy from 'wepy'
import tip from '@/utils/tip'

// 服务器接口域名
const BASEURL = 'https://m.teshehui.com'

const wxRequest = async (url, {method, params, header = {}, loading}) => {

  // 请求拦截
  if (loading) tip.loading()
  
  // -覆盖默认header信息
  header = Object.assign({
    'Content-Type': 'application/json'
  }, header)

  let res = await wepy.request({
    url: BASEURL + url,
    data: params,
    method: method || 'GET',
    header: header
  })

  // 响应拦截
  if (res.data.ststus !== 200) {
    // 处理...
  }

  if (loading) tip.loaded()

  return res

}

export default wxRequest
