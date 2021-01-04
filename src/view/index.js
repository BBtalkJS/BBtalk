import Vue from 'vue'
import App from './App.vue'



const render = (options = {}) => {
  
  
  
  return new Vue({
    beforeCreate: function () {
      console.log(this.$bbtalk)
    },

    render: h => h(App)
  }).$mount(options.el || '#bbtalk')


}

export {
  render
}
