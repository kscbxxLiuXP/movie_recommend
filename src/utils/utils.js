export function num(i) {
    return parseFloat(i).toFixed(1)
}

export function backToTop() {
    let timer
    //设置定时器
    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
    var ispeed = -osTop / 20;
    timer = setInterval(function () {
        //获取滚动条距离顶部高度
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;


        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
        //到达顶部，清除定时器
        if (osTop === 0) {
            clearInterval(timer);
        };
    }, 10);
}