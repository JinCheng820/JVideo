<template>
    <div class="voice-control">
        <button class="voice-btn voice-control-btn">
            <img src="src/assets/voice.png">
        </button>
        <button class="voice-btn novoice-control-btn">
            <img src="src/assets/no-voice.png">
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            voice: 100
        }
    },
    methods: {
    },
    computed: {
        playStatue: function() {  //获取播放状态决定显示按钮
            return this.$store.state.play
        }
    }
}
</script>
<style>
.voice-control {
    display: inline-block;
}
.voice-control .voice-control-btn,
.voice-control .novoice-control-btn{
    height: 3rem;
    width: 3rem;
    background-color: #000;
    margin-left: 10px;
    outline: none;
    border: 0;
    padding: 0;
    transition: all 1s;  
}

.voice-control .novoice-control-btn{
    display: none;
}

.voice-control .voice-control-btn:hover,
.voice-control .novoice-control-btn:hover {
    background-color: #333;
}

.voice-control .voice-btn img {
    vertical-align: bottom;
}
</style>