
import timeago from './timeago'





function getData(page = 0) {
    query.descending('createdAt').skip(page * 10).limit(10).find().then(function (results) {
      if (results.length == 0) {
        alert('之前没发表过说说了')
      } else {
        let resC = results;
        reqData = false;
        resC.forEach((i) => {
          let dateTmp = new Date(i.createdAt);
          i.attributes.time = timeago(dateTmp);
          i.attributes.content = urlToLink(i.attributes.content);
          app.contents.push(i);
        })
      }
 
    }, function (error) { 
      console.log(error)
    });
  }

export default getData