import Vue from 'vue'
import Router from 'vue-router'
import i18n from './../language'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: (resolve) => {
        require(['@/pages/home/home'], resolve)
      },
      redirect: `home/zh`
    },
    {
      path: '/home/zh',
      name: 'homes',
      component: (resolve) => {
        require(['@/pages/home/home'], resolve)
      }
    },
    {
      path: '/:lang',
      name: 'indexs',
      component: (resolve) => {
        require(['@/pages/index/index'], resolve)
      },
      children: [
        {
          path: '/goodslist/:lang',
          name: 'goodslist',
          component: (resolve) => {
            require(['@/pages/goodslist/goodslist'], resolve)
          },
          meta: {
            // 首页
            title: i18n.locale === 'zh' ? i18n.messages.zh.meta.index : i18n.messages.en.meta.index
          }
        },
        {
          path: '/usercenter/:lang',
          name: 'usercenter',
          component: (resolve) => {
            require(['@/pages/usercenter/usercenter'], resolve)
          },
          meta: {
            // 用户中心
            title: i18n.locale === 'zh' ? i18n.messages.zh.meta.userCenter : i18n.messages.en.meta.userCenter
          }
        },
        {
          path: '/recordlist/:lang',
          name: 'recordlist',
          component: (resolve) => {
            require(['@/pages/recordlist/recordlist'], resolve)
          },
          meta: {
            // 夺宝记录
            title: i18n.locale === 'zh' ? i18n.messages.zh.meta.recordList : i18n.messages.en.meta.recordList
          }
        },
        {
          path: '/help/:lang',
          name: 'help',
          component: (resolve) => {
            require(['@/pages/help/help'], resolve)
          },
          meta: {
            // 帮助
            title: i18n.locale === 'zh' ? i18n.messages.zh.meta.help : i18n.messages.en.meta.help
          }
        }
      ]
    },
    {
      path: '/signin/:lang',
      name: 'signin',
      component: (resolve) => {
        require(['@/pages/signin/signin'], resolve)
      },
      meta: {
        // 注册
        title: i18n.locale === 'zh' ? i18n.messages.zh.meta.signIn : i18n.messages.en.meta.signIn
      }
    },
    {
      path: '/forget/:lang',
      name: 'forget',
      component: (resolve) => {
        require(['@/pages/forgotpassword/forgotpassword'], resolve)
      },
      meta: {
        // 密码重置
        title: i18n.locale === 'zh' ? i18n.messages.zh.meta.forGet : i18n.messages.en.meta.forGet
      }
    },
    {
      path: '/login/:lang',
      name: 'login',
      component: (resolve) => {
        require(['@/pages/login/login'], resolve)
      },
      meta: {
        // 登录
        title: i18n.locale === 'zh' ? i18n.messages.zh.meta.loGin : i18n.messages.en.meta.loGin
      }
    },
    {
      path: '/productdetail/:lang',
      name: 'productdetail',
      component: (resolve) => {
        require(['@/pages/productdetail/productdetail'], resolve)
      },
      meta: {
        // 商品详情
        title: i18n.locale === 'zh' ? i18n.messages.zh.meta.proDetail : i18n.messages.en.meta.proDetail
      }
    },
    {
      path: '/previous/:lang',
      name: 'previous',
      component: (resolve) => {
        require(['@/pages/productdetail/previous'], resolve)
      },
      meta: {
        // 往期投注
        title: i18n.locale === 'zh' ? i18n.messages.zh.meta.previous : i18n.messages.en.meta.previous
      }
    },
    {
      path: '/prodectImg/:lang',
      name: 'prodectImg',
      component: (resolve) => {
        require(['@/pages/productdetail/prodectImg'], resolve)
      },
      meta: {
        // 图文详情
        title: i18n.locale === 'zh' ? i18n.messages.zh.meta.prodectImg : i18n.messages.en.meta.prodectImg
      }
    },
    {
      path: '/formula/:lang',
      name: 'formula',
      component: (resolve) => {
        require(['@/pages/productdetail/formula'], resolve)
      },
      meta: {
        // 计算详情
        title: i18n.locale === 'zh' ? i18n.messages.zh.meta.formula : i18n.messages.en.meta.formula
      }
    },
    {
      path: '/userrecord/:lang',
      name: 'userrecord',
      component: (resolve) => {
        require(['@/pages/usercenter/userrecord'], resolve)
      },
      meta: {
        // 中奖记录
        title: i18n.locale === 'zh' ? i18n.messages.zh.meta.userrecord : i18n.messages.en.meta.userrecord
      }
    },
    {
      path: '/payrecord/:lang',
      name: 'payrecord',
      component: (resolve) => {
        require(['@/pages/usercenter/payrecord'], resolve)
      },
      meta: {
        // 充值记录
        title: i18n.locale === 'zh' ? i18n.messages.zh.meta.payrecord : i18n.messages.en.meta.payrecord
      }
    },
    {
      path: '/useraddress/:lang',
      name: 'useraddress',
      component: (resolve) => {
        require(['@/pages/usercenter/useraddress'], resolve)
      },
      meta: {
        // 收货地址
        title: i18n.locale === 'zh' ? i18n.messages.zh.meta.useraddress : i18n.messages.en.meta.useraddress
      }
    },
    {
      path: '/snatchno/:lang',
      name: 'snatchno',
      component: (resolve) => {
        require(['@/pages/usercenter/snatchno'], resolve)
      },
      meta: {
        // 我的夺宝号
        title: i18n.locale === 'zh' ? i18n.messages.zh.meta.mySnatchno : i18n.messages.en.meta.mySnatchno
      }
    },
    {
      path: '/success/:lang',
      name: 'success',
      component: (resolve) => {
        require(['@/pages/success/success'], resolve)
      },
      meta: {
        // 购买成功
        title: i18n.locale === 'zh' ? i18n.messages.zh.meta.success : i18n.messages.en.meta.success
      }
    },
    {
      path: '/addresslist/:lang',
      name: 'addresslist',
      component: (resolve) => {
        require(['@/pages/address/addresslist'], resolve)
      },
      meta: {
        // 地址列表
        title: i18n.locale === 'zh' ? i18n.messages.zh.meta.addresslist : i18n.messages.en.meta.addresslist
      }
    },
    {
      path: '/submitaddress/:lang',
      name: 'submitaddress',
      component: (resolve) => {
        require(['@/pages/address/submitaddress'], resolve)
      },
      meta: {
        // 确认收货地址
        title: i18n.locale === 'zh' ? i18n.messages.zh.meta.submitaddress : i18n.messages.en.meta.submitaddress
      }
    }
  ]
})
