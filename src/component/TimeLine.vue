<template>
    <div class="TimeLine">
        <div class='main-line' ref='mainLine'>
            <div class='current-line' :style= "'width:' + currentPosition"></div>
            <div class="position-point" :style="'left:' + currentPosition"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentPosition: "0px",
            curTime: 0
        }
    },
    props: ['currentTime'],
    methods: {},
    watch: {
        currentTime: function() {
            this.curTime = Math.round(this.currentTime)
        },
        curTime: function() {
            let rate = this.curTime / this.$store.state.videoLength;
            this.currentPosition = Math.round(this.$refs.mainLine.offsetWidth * rate) + 'px'
        }
    }
}
</script>
<style>
.TimeLine {
    display: inline-block;
    position: relative;
    width: 65%;
    height: 0.1rem;
    margin-left: 20px;
    margin-bottom: 0.9rem;
    background-color: #FFF;
}

.TimeLine .position-point {
    position: absolute;
    top: -0.2rem;
    width: 0.5rem;
    height: 0.5rem;
    background-color: #DDD;
    border-radius: 50%;
}

.TimeLine .position-point:hover {
    background-color: #8eccff;
}

.TimeLine .current-line {
    display: inline-block;
    height: 0.1rem;
    margin-bottom: 1rem;
    background-color: #8eccff;
}
</style>