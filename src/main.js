// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import "./assets/index.css"
import dayjs from "dayjs"

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  //混入
  Vue.mixin({
    data () {
      return {
        GRIDSOME_API: "http://106.75.47.105:1336"
      }
    }
  })
  //时间过滤
  Vue.filter('date', (val, format = 'YYY-MM-DD') => {
    return dayjs(val).format(format)
  })
  Vue.component('Layout', DefaultLayout)
}
