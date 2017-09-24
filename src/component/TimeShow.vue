<template>
    <div class="time-show">
        <span>{{curTime}}</span><span>/{{VideoLength}}</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            VideoLength: '',
            curTime: '00:00'
        }
    },
    props: ['VideoDom','currentTime'],
    methods: {
        GetVideoLength: function() {
            this.VideoLength = this.timeFormat(this.VideoDom.duration);
        },
        timeFormat: function(time) {  //时间格式化
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
    },
    watch: {
        VideoDom: function() {
            this.GetVideoLength();
        },
        currentTime: function(val,old) {
            this.curTime = this.timeFormat(val);
        }
    }
}
</script>
<style>
.time-show {
    display: inline-block;
    color: #FFF;
    height: 3rem;
    vertical-align: middle;
}

.time-show span {
    height: 3rem;
    text-align: center;
}
</style>