import Vue from 'vue'
import Vuex from 'vuex'
import JVideo from './JVideo.vue'


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    play: false,
    videoLength: ''
  },
  mutations: {
    playAndpause (state) {
      state.play = !state.play;
    }
  }
})

new Vue({
  el: '#JVideo',
  store,
  render: h => h(JVideo)
})


