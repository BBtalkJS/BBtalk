
import timeago from './timeAgo'
const AV = require('leancloud-storage');
const { Query } = AV
const results = {}

async function getData(options = {}, page = 0 ) {

    AV.init({
        appId: options.appId,
        appKey: options.appKey,
        serverURLs: options.serverURLs
      });

    var query = new AV.Query('content');

    query.descending('createdAt').skip(page * 10).limit(10).find().then(function (results) {
      if (results.length == 0) {
        alert('之前好久没哔哔过了')
      } else {
        
        return results = results

        }
      }, 
      function (error) { 
      console.log(error)
    });
  }

export default getData