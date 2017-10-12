<template>
    <div class="app">
        <JVideo :videoSource='videosrc' :autoplay='autoplay' :control='control'></JVideo>
    </div>
</template>
<script>
import JVideo from './JVideo.vue'
export default {
    data() {
        return {
            videosrc: 'src/assets/test.mp4',
            autoplay: false,
            control: true
        }
    },
    components: {
        JVideo
    }
}
</scriptÏ>
<style>
html,
body {
    font-size: 12px;
}
</style>