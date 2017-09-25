<template>
    <div class="playcontrol">
        <button class="play-btn play-control-btn" v-if="!playStatue" @click='changePlayStatus'>
            <img src="src/assets/playcontrol.png">
        </button>
        <button class="pause-btn play-control-btn" v-if="playStatue" @click='changePlayStatus'>
            <img src="src/assets/pausecontrol.png">
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
      changePlayStatus: function() {
        let _this = this;
        this.$store.commit("playAndpause");
        if(this.$store.state.play){   //实时获取播放时间定时任务
            this.$store.state.videoDom.play();
            this.clockGetCurrentTime = setInterval(function(){
            _this.$emit('GetCurrentTime');
        }, 500)
        }else{
            clearInterval(this.clockGetCurrentTime); //清除获取播放时间定时任务
            this.$store.state.videoDom.pause();
        }
      }
    },
    computed: {
        playStatue: function() {  //获取播放状态决定显示按钮
            return this.$store.state.play
        }
    }
}
</script>
<style>
.playcontrol {
    display: inline-block;
}
.playcontrol .play-control-btn {
    height: 3rem;
    width: 3rem;
    background-color: #000;
    outline: none;
    border: 0;
    padding: 0;
    transition: all 1s;  
}

.playcontrol .play-control-btn:hover {
    background-color: #333;
}

.playcontrol .play-control-btn img {
    vertical-align: bottom;
}
</style>