import Vue from 'vue'
import App from './App.vue'

const render = (options = {}) => {
  Vue.prototype.$bbtalk = options
  return new Vue({
    render: h => h(App)
  }).$mount(options.el || '#bbtalk')

}

export {
  render
}
