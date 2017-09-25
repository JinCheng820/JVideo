<template>
    <div class="time-show">
        <span>{{curTime}}</span><span>/{{VideoLength}}</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            curTime: '00:00'
        }
    },
    props: ['currentTime'],
    methods: {
        timeFormat: function(time) { //时间格式化
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
        currentTime: function(val, old) {
            this.curTime = this.timeFormat(val);
        }
    },
    computed: {
        VideoLength: function(){
            return this.timeFormat(this.$store.state.videoLength)
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