<template>
    <div class="VideoControl">
        <PlayControl :VideoDom="VideoDom" @GetCurrentTime='GetCurrentTime'></PlayControl>
        <TimeShow :VideoDom="VideoDom" :currentTime='currentTime'></TimeShow>
    </div>
</template>
<script>
import PlayControl from './PlayControl.vue'
import TimeShow from './TimeShow.vue'
export default {
    data() {
        return {
            currentTime: 0
        }
    },
    props:['VideoDom'],
    components: {
        PlayControl,
        TimeShow
    },
    methods: {
        GetCurrentTime: function() {   //获取实时视频播放时间位置
            this.currentTime = this.VideoDom.currentTime;
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