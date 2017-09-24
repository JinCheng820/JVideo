<template>
    <div class="JVideo">
        <div class="video-block">
            <video :src="videoSource" id="Jvdo" ref='Jvdo'>
            </video>
        </div>
        <VideoControl :VideoDom="VideoDom"></VideoControl>
    </div>
</template>
<script>
import VideoControl from './component/VideoControl.vue'
export default {
    data() {
        return {
            videoSource: 'src/assets/test.mp4',
            VideoDom: false
        }
    },
    mounted: function() {
        let _this = this
        this.clockGetTime = setInterval(function(){  //定时任务检查播放器dom渲染是否完成
            _this.GetVideoLength();
        }, 500)
    },
    methods: {
        GetVideoLength: function() {   
            if (this.$refs.Jvdo) {
                this.VideoDom = this.$refs.Jvdo;   //获取播放器dom对象
                clearInterval(this.clockGetTime);  //清除检查定时任务
            }
        }
    },
    components: {
        VideoControl
    }
}
</script>
<style>
html,
body {
    font-size: 10px;
}

.JVideo {
    width: 80rem;
    margin: 0 auto;
    border: 1px solid #000;
}

.JVideo .video-block {
    display: grid;
}

video {
    width: 100%;
    object-fit: fill;
    height: 500px;
}
</style>