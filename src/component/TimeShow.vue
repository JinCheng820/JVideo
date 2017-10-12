<template>
    <div class="time-show">
        <span>{{currentTime}}</span>
        <span>/{{VideoLength}}</span>
    </div>
</template>
<script>
import factory from '../util/factory.js';
export default {
    data() {
        return {
            curTime: '00:00'
        }
    },
    props: ['currentTime'],
    computed: {
        VideoLength: function() {
            return factory.timeFormat(this.$store.state.videoLength)
        }
    }
}
</script>
<style>
.time-show {
    display: inline-block;
    color: #FFF;
    height: 3rem;
    width: 6rem;
    vertical-align: middle;
}
</style>