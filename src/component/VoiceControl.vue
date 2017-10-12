<template>
    <div class="voice-control" @mouseover='openVoiceChange' @mouseleave='closeVoiceChange'>
        <button class="voice-btn voice-control-btn" v-if='voice' @click='changeVoiceStatue'>
            <img src="src/assets/voice.png">
        </button>
        <button class="voice-btn novoice-control-btn" v-if='!voice' @click='changeVoiceStatue'>
            <img src="src/assets/no-voice.png">
        </button>
        <div class="voice-control-line" v-if="voiceChange" @click='changeVoice' ref='vline'>
            <div class='current-voice-line' :style="'height:' + currentVoice">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            voice: true,
            voiceChange: false,
            currentVoice: '8rem',
            voiceRate: 1
        }
    },
    methods: {
        changeVoiceStatue: function() {
            if (this.voice) {
                this.$store.state.videoDom.volume = 0;
            } else {
                this.$store.state.videoDom.volume = this.voiceRate;
            }
            this.voice = !this.voice
        },
        openVoiceChange: function() {
            if (!this.voiceChange) {
                this.voiceChange = !this.voiceChange
            }
        },
        closeVoiceChange: function() {
            if (this.voiceChange) {
                this.voiceChange = this.voiceChange
            }
        },
        changeVoice: function() {
            let e = event || window.event;
            let newpos = this.$refs.vline.clientHeight - (e.clientY - this.$refs.vline.getBoundingClientRect().top)
            this.currentVoice = newpos + 'px'
            this.$store.state.videoDom.volume = (newpos / this.$refs.vline.clientHeight).toFixed(2)
            this.voiceRate = (newpos / this.$refs.vline.clientHeight).toFixed(2)
        }
    },
    computed: {

    }
}
</script>
<style>
.voice-control {
    position: relative;
    float: right;
    margin-right: 10px;
}

.voice-control .voice-control-btn,
.voice-control .novoice-control-btn {
    height: 3rem;
    width: 3rem;
    background-color: #000;
    outline: none;
    border: 0;
    padding: 0;
}


.voice-control .voice-control-btn:hover,
.voice-control .novoice-control-btn:hover {
    background-color: #333;
}

.voice-control .voice-btn img {
    vertical-align: bottom;
}

.voice-control .voice-control-line {
    position: absolute;
    top: -8rem;
    left: 1rem;
    width: 1rem;
    height: 8rem;
    display: inline-block;
    background-color: #000;
    border: 1px;
    border-style: solid;
    border-color: #000;
}

.voice-control .voice-control-line .current-voice-line {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: inline-block;
    background-color: #FFF;
}
</style>