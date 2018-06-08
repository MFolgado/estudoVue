// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { sync } from 'vuex-router-sync'

import Vue from 'vue'
import Vuex from 'vuex'
import VueResouce from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'
import VuexStore from './vuex/store.js'

Vue.use(Vuex)
Vue.use(VueResouce)
Vue.use(VueRouter)

Vue.http.options.root = process.env.SERVER
Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc1YTA1NTA3Njg1ZGU3ZmFlNjZlNWQ4Mjc5YWRiZTZhMjFmMDdkZGFlOWJkODQyODBkMDdjNmU1NzNkYzBhYTRlOWQ4MGZkYjI2N2Q4MzVmIn0.eyJhdWQiOiIzIiwianRpIjoiNzVhMDU1MDc2ODVkZTdmYWU2NmU1ZDgyNzlhZGJlNmEyMWYwN2RkYWU5YmQ4NDI4MGQwN2M2ZTU3M2RjMGFhNGU5ZDgwZmRiMjY3ZDgzNWYiLCJpYXQiOjE1Mjg0ODUzMjcsIm5iZiI6MTUyODQ4NTMyNywiZXhwIjoxNTI4NDg4OTI3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.X11y93EDqCDVLiT1KBB3QNJLQyP2OEaC42_efP7V4pGtvD9Yh6Z4m22yiIG5i1ez6JHTd0X1p2ptatnMVuRiwI5fz4yWsPMCvg6X1DFJlq2xUeQPoTn7rd_n-05uifBS2dyIu8g7yf_7iNqWIr-AOMcdJeGo0Z6UPA5EnbGExXpf4VVChMQNmoSGrTlLbQcRC0y2TbswikCC5MjU06iFGtONmJSvhTg1OdmPPxMZa5Ppuyjd08hyOr-lQBSgWmhN69-713_5inp7o3ssd9p3BvOhA65M3heXTAL-xTPOwZrBYv86B9EYvqpL30yWwg5HbM_XiXPCIQBAoOXYUR5LP9H4AKNnYq75SxsiTST_wXf3n3knpujvrr3Il9bKSD50P3PLBLNf9kTYEWHYY7h8tcV8HD-0N8qa1cUvyhLbyGrLsItG8vKZRo1DYxyf8b6JnQK-ca-lygasF4QTvamttxu9-9XFyZDJ_r9pyXeIGrdi1FwGIdXRKyU-gzQlhtur3W3DYH5xQEHbSWtgkrVNp3xlR1C8lcJEzZbYzL8E5QxYC7zW-ChxPZlCtJl-9Q45bv-sTTk8gT5OhPRZzvRBKq-F7-m6shwDrZelcMpbr2VwGq5hXeWKopJkp6XXISNdSszmi5T_CDmIaCEEuxq_dUd1DX0Z1jI8g0svzoJfeoM')
  next()
})

const store = new Vuex.Store(VuexStore)
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
