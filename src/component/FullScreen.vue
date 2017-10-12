<template>
    <div class="fullscreen">
        <button class="fullscreen-btn" @click='turnFull'>
            <img src="src/assets/full.png">
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        turnFull: function() {
            let element = this.$store.state.videoBlock;
            let requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
            if (requestMethod) {
                requestMethod.call(element);
            } else if (typeof window.ActiveXObject !== "undefined") {
                let wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }
        }
    },
    computed: {
        playStatue: function() { //获取播放状态决定显示按钮
            return this.$store.state.play
        }
    }
}
</script>
<style>
.fullscreen {
    margin-left: 10px;
    float: right;
}

.fullscreen .fullscreen-btn {
    height: 3rem;
    width: 3rem;
    background-color: #000;
    outline: none;
    border: 0;
    padding: 0;
}

.fullscreen .fullscreen-btn:hover {
    background-color: #333;
}

.fullscreen .fullscreen-btn img {
    vertical-align: bottom;
    width: 2rem;
}
</style>