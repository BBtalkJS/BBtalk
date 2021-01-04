
  function urlToLink(str) {
    //增加发图片功能
    var re = /\bhttps?:\/\/(?!\S+(?:jpe?g|png|bmp|gif|webp|gif))\S+/g;
    var re_forpic = /\bhttps?:\/\/.*?(\.gif|\.jpeg|\.png|\.jpg|\.bmp|\.webp)/g;
    str = str.replace(re, function (website) {
      return "<a href='" + website + "' target='_blank'> <i class='iconfont icon-lianjie-copy'></i>链接 </a>";
    });
    str = str.replace(re_forpic, function (imgurl) {
      return "<img src='" + imgurl + "'  /> ";
    });
    return str;
  }

export default urlToLink