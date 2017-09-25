import Vue from 'vue'
import Vuex from 'vuex'
import app from './App.vue'


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    play: false,
    videoLength: '',
    videoDom: ''
  },
  mutations: {
    playAndpause (state) {
      state.play = !state.play;
    },
    getVideoLen (state,len) {
      state.videoLength = len;
    },
    getVideoDom (state,dom) {
      state.videoDom = dom;
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(app)
})


