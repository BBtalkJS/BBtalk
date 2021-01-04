import Vue from 'vue'
import { render } from './view'
const AV = require('leancloud-storage');
const { Query } = AV;


async function initAPP (options = {}) {
    AV.init({
        appId: options.appId,
        appKey: options.appKey,
        serverURLs: options.serverURLs
      });
    Vue.prototype.$bbtalk = options

     render(options)
  
    
}
  

export { initAPP }