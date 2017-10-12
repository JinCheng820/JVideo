<template>
    <div class="VideoControl" :style="'opacity:' + controlerOpacity" @mouseover='showControl' @mouseleave='hideControl'>
        <PlayControl @GetCurrentTime='GetCurrentTime'></PlayControl>
        <TimeShow :currentTime='currentTime'></TimeShow>
        <TimeLine :currentTime='currentSec'></TimeLine>
        <VoiceControl></VoiceControl>
        <FullScreen @hideControl='hideControl'></FullScreen>
    </div>
</template>
<script>
import factory from '../util/factory.js'
import PlayControl from './PlayControl.vue'
import TimeShow from './TimeShow.vue'
import TimeLine from './TimeLine.vue'
import VoiceControl from './VoiceControl.vue'
import FullScreen from './FullScreen.vue'
export default {
    data() {
        return {
            currentTime: "00:00",
            currentSec: 0,
            controlerOpacity: 1,
        }
    },
    components: {
        PlayControl,
        TimeShow,
        TimeLine,
        VoiceControl,
        FullScreen
    },
    methods: {
        GetCurrentTime: function() { //获取实时视频播放时间位置
            this.currentTime = factory.timeFormat(this.$store.state.videoDom.currentTime);
            this.currentSec = this.$store.state.videoDom.currentTime;
        },
        showControl: function() {
            this.controlerOpacity = 1
        },
        hideControl: function() {
            this.controlerOpacity = 0
        }
    }
}
</script>
<style>
.VideoControl {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #000;
    width: 100%;
    height: 3rem;
    margin: 0 auto;
    transition: all 1s;
}
</style>