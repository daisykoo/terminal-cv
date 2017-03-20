import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

import {data} from "../data"
export default new Vuex.Store({
  state: {
    debug: true,
    data: data
  },
  getters: {
   	formatResume(state) {
      function getProgressBar(obj, blank) {
        let output = {};
        const self = this;
        switch (typeof obj) {
          case 'object': 
          const max = getLongestProperty(obj);
          Object.keys(obj).forEach(function(n, i) {
            output[n] = getProgressBar(obj[n], max - n.length);
          });
          break;
          case 'number':
            output = new Array(blank + 1).join(' ') + '[' + new Array(obj + 1).join('#') + 
              new Array(11 - obj).join('_') + ']'; 
        }
        return output;
      }
      function getLongestProperty(obj) {
        let max = 0;
        Object.keys(obj).forEach(function(n, i) {
            max = Math.max(n.length, max);
        })
        return max;
      }
   		var oldSkills = state.data.resume.Skills;
   		return Object.assign(state.data.resume, {Skills: getProgressBar(oldSkills)});
   	}
  }
})