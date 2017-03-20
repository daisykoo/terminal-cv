<template>
	<div><pre>{{this.resume}}</pre></div>
</template>

<script>
export default {
  name: 'my-resume',
  data () {
    return {
      	resume: this.$store.getters.formatResume
    }
  },
  created() {
  	// this.resume.Skills = this.getProgressBar(this.resume.Skills);
  },
  methods: {
    //转换技能数据为熟悉程度进度条
    getProgressBar(obj, blank) {
      let result = {};
      const self = this;
      switch (typeof obj) {
        case 'object': 
        const max = self.getLongestProperty(obj);
        Object.keys(obj).forEach(function(n, i) {
          result[n] = self.getProgressBar(obj[n], max - n.length);
        });
        break;
        case 'number':
          result = new Array(blank + 1).join(' ') + '[' + new Array(obj + 1).join('#') + 
            new Array(11 - obj).join('_') + ']'; 
      }
      return result;
    },
    getLongestProperty(obj) {
      let max = 0;
      Object.keys(obj).forEach(function(n, i) {
          max = Math.max(n.length, max);
      })
      return max;
    }
  }
}
</script>

