 //友好地显示时间
 function timeAgo(dateTimeStamp) { 
     
    var result = '' 
    var minute = 1000 * 60; //把分，时，天，周，半个月，一个月用毫秒表示 
    var hour = minute * 60; 
    var day = hour * 24; 
    var week = day * 7; 
    var month = day * 30; 
    var now = new Date().getTime(); //获取当前时间毫秒 
    var diffValue = now - dateTimeStamp; //时间差 
    if (diffValue < 0) { 
        return; 
    } 
    var minC = diffValue / minute; //计算时间差的分，时，天，周，月 
    var hourC = diffValue / hour; 
    var dayC = diffValue / day; 
    var weekC = diffValue / week; 
    var monthC = diffValue / month; 
    if (monthC >= 1 && monthC <= 3) { 
        result = " " + parseInt(monthC) + " 月前" 
    } else if (weekC >= 1 && weekC <= 3) { 
        result = " " + parseInt(weekC) + " 周前" 
    } else if (dayC >= 1 && dayC <= 6) { 
        result = " " + parseInt(dayC) + " 天前" 
    } else if (hourC >= 1 && hourC <= 23) { 
        result = " " + parseInt(hourC) + " 小时前" 
    } else if (minC >= 1 && minC <= 59) { 
        result = " " + parseInt(minC) + " 分钟前" 
    } else if (diffValue >= 0 && diffValue <= minute) { 
        result = "刚刚" 
    } else { 
        var datetime = new Date(); 
        datetime.setTime(dateTimeStamp); 
        var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1; 
        var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate(); 
        result = Nmonth + "-" + Ndate 
    } 
    return result; 
} 


export default timeAgo