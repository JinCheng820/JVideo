<template>
    <div class="VideoControl">
        <PlayControl @GetCurrentTime='GetCurrentTime'></PlayControl>
        <TimeShow :currentTime='currentTime'></TimeShow>
        <TimeLine :currentTime='currentTime'></TimeLine>
    </div>
</template>
<script>
import PlayControl from './PlayControl.vue'
import TimeShow from './TimeShow.vue'
import TimeLine from './TimeLine.vue'
export default {
    data() {
        return {
            currentTime: 0
        }
    },
    components: {
        PlayControl,
        TimeShow,
        TimeLine
    },
    methods: {
        GetCurrentTime: function() {   //获取实时视频播放时间位置
            this.currentTime = this.$store.state.videoDom.currentTime;
        }
    }
}
</script>
<style>
.VideoControl {
    background-color: #000;
    width: 80rem;
    height: 3rem;
    margin: 0 auto;
}
</style>