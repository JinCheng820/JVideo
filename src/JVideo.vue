<template>
    <div class="JVideo">
        <div class="video-block" ref='JvBlock' @mouseleave='hideControl'>
            <video :src="videoSource" id="Jvdo" ref='Jvdo' :autoplay='autoplay'>
            </video>
            <VideoControl ref='videoControl' v-if='control'></VideoControl>
        </div>

    </div>
</template>
<script>
import VideoControl from './component/VideoControl.vue'
export default {
    data() {
        return {
        }
    },
    props: {
        videoSource: {  // 视频资源位置
            required: true
        },
        control: {   //是否显示控制器
            default: true
        },
        autoplay: {  //是否自动播放
            default: false
        }
    },
    mounted: function() {
        let _this = this
        this.clockGetTime = setInterval(function() {  //定时任务检查播放器dom渲染是否完成
            _this.GetVideoLength();
        }, 500)
    },
    methods: {
        GetVideoLength: function() {
            if (this.$refs.Jvdo) {
                this.$store.commit("getVideoDom", this.$refs.Jvdo);
                this.$store.commit("getVideoBlock", this.$refs.JvBlock);
                this.$store.commit("getVideoLen", this.$refs.Jvdo.duration);
                clearInterval(this.clockGetTime);  //清除检查定时任务
            }
        },
        hideControl: function() {
            this.$refs.videoControl.hideControl();
        }
    },
    components: {
        VideoControl
    }
}
</script>
<style>
.JVideo {
    position: relative;
    width: 80rem;
    margin: 0 auto;
    border: 1px solid #000;
}

.JVideo .video-block {
    display: flex;
}

video {
    width: 100%;
    height: 100%;
    background-color: #000;
}

























/* 屏蔽全屏时video默认组件 */

video::-webkit-media-controls,
video::-moz-media-controls,
video::-webkit-media-controls-enclosure {
    display: none !important;
}

video::-webkit-media-controls-panel,
video::-webkit-media-controls-panel-container,
video::-webkit-media-controls-start-playback-button {
    display: none !important;
    -webkit-appearance: none;
}
</style>