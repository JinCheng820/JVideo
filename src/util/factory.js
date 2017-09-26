let factory = {};

factory.timeFormat = function(time) {
    let h = Math.floor(time / 3600 % 24);
    let m = Math.floor(time / 60 % 60);
    let s = Math.ceil((time % 60));
    if (m < 10) {
        m = '0' + m
    }
    if (s < 10) {
        s = '0' + s
    }
    if (h < 1) {
        return time = m + ":" + s;
    } else {
        return time = h + ":" + m + ":" + s;
    }
}

export default factory;