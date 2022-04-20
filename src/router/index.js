import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routesMap = [{
    path: "/",
    name: 'Layout',
    component: () =>
      import ('../views/Layout.vue'),
    redirect: "/index",
    children: [{
        path: "/index",
        name: "index",
        meta: {
          roles: ["admin", "user"]
        },
        component: () =>
          import ("../views/index/index.vue")
      },
      {
        path: "/account/all",
        name: "account_all",
        meta: { bread: ["账户管理", "所有人员"] },
        component: () =>
          import ("../views/account/all.vue")
      },
      {
        path: "/account/business",
        name: "account_bisiness",
        meta: { bread: ["账户管理", "所有人员"] },
        component: () =>
          import ("../views/account/business.vue")
      },
      {
        path: "/product/all",
        name: "product_all",
        meta: { bread: ["产品管理", "全部产品"] },
        component: () =>
          import ("../views/product/all.vue")
      },
      {
        path: "/product/detail",
        name: "product_all",
        meta: { bread: ["产品管理", "全部产品", "产品详情"] },
        component: () =>
          import ("../views/product/detail.vue")
      },
      //所有订单
      {
        path: "/orders/all",
        name: "orders_all",
        meta: { bread: ["订单管理", "所有订单"] },
        component: () =>
          import ("../views/orders/index.vue")
      },
      {
        path: "/customer/info",
        name: "customer_info",
        meta: { bread: ["客户管理", "基本信息"] },
        component: () =>
          import ("../views/customer/index.vue")
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import ("@/views/Login")
  },
  {
    path: "*",
    name: "404",
    component: () =>
      import ('../views/404.vue')
  }
]

const router = new VueRouter({
  routes: routesMap
})

export default router