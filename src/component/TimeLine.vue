<template>
    <div class="TimeLine">
        <div class='main-line' ref='mainLine' @click='playFromClick()'>
            <div class='current-line' :style="'width:' + currentPosition"></div>
            <div class="position-point" :style="'left:' + currentPosition" draggable="true"></div>
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
    methods: {
        playFromClick: function() {
            let e = window.event;
            let newpos = (e.clientX - this.$refs.mainLine.getBoundingClientRect().left);
            let rate = (newpos/this.$refs.mainLine.clientWidth)*100;
            console.log(rate)
            this.currentPosition = rate +'%'
            let newcur= this.$store.state.videoLength * newpos/this.$refs.mainLine.offsetWidth
            this.$store.state.videoDom.currentTime = newcur
        }
    },
    watch: {
        currentTime: function() {
            this.curTime = Math.round(this.currentTime)
        },
        curTime: function() {
            let rate = this.curTime / this.$store.state.videoLength;
            if (rate>=1) {
                this.currentPosition = '100%'
            }else {
                this.currentPosition = rate*100 + '%'
            }
        }
    }
}
</script>
<style>
.TimeLine {
    display: inline-block;
    position: relative;
    width: 76%;
    height: 0.1rem;
    margin-left: 20px;
    background-color: #FFF;
}

.TimeLine::-webkit-full-screen {
    width: 100% !important; 
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