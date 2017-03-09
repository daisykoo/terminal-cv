<template>
	<div><pre>{{this.resume}}</pre></div>
</template>

<script>
export default {
  name: 'my-resume',
  data () {
    return {
      	resume: this.$store.state.data.resume
    }
  },
  created() {
  	this.resume.skills = this.getProgressBar(this.resume.skills);
  },
  methods: {
    getProgressBar(obj) {
      let result = {};
      const self = this;
      if (typeof obj === 'object') {
        Object.keys(obj).forEach(function(n, i) {
          result[n] = self.getProgressBar(obj[n]);
        });
      } else {
          result = '[' + 
            new Array(obj + 1).join('#') + 
            new Array(11 - obj).join('_') + 
            ']';
      }
      return result;
    }
  }
}
</script>

