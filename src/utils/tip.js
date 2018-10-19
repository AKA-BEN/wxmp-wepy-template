import wepy from 'wepy'

// 全局弹窗提示
export default class Tip {
  constructor() {
    this.isLoading = false
  }

  static loading (title = "加载中") {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    wepy.showLoading({
      title: title,
      mask: true
    })
  }

  static loaded () {
    if (this.isLoading) {
      this.isLoading = false
      wepy.hideLoading()
    }
  }
}