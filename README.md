# 小程序wepy项目模板
## 开发

> ### 微信开发工具

- 关闭ES6转ES5
- 关闭上传代码时样式自动补全
- 关闭代码压缩上传

## 性能优化

- 分包：使用主包、功能分包和分包预加载，来加快首次启动时间

## 组件封装

- 图片懒加载
- 索引列表

## 目录结构

> src

    │  app.wpy      // app主入口文件
    │  index.template.html
    │
    ├─api           // 封装的接口api
    │      index.js
    │
    ├─assets        // 静态资源文件
    │  └─images
    │
    ├─components    // 组件
    │  │  list.wpy
    │  │
    │  └─base       // 基础组件
    │          lazyload.wpy
    │
    ├─mixins        // mixin混合
    │      test.js
    │
    ├─pages
    │  ├─classify   // 分包文件夹
    │  │      index.wpy
    │  │
    │  ├─home       // 分包文件夹
    │  │      index.wpy
    │  │
    │  ├─main       // 主包文件夹
    │  │      tabbar_classify.wpy
    │  │      tabbar_home.wpy
    │  │      tabbar_shopcart.wpy
    │  │      tabbar_user.wpy
    │  │
    │  ├─shopcart   // 分包文件夹
    │  │      index.wpy
    │  │      pay.wpy
    │  │
    │  └─user       // 分包文件夹
    │          index.wpy
    │
    ├─styles        // 样式文件
    │      base.less
    │
    └─utils         // 公用方法封装
            tip.js
            util.js
            wx_request.js   // 请求接口封装
