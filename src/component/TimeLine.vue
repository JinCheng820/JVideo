<template>
    <div class="TimeLine">
        <div class='main-line'>
            
        </div>    
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    props:['currentTime'],
    components: {
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