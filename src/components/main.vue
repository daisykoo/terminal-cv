<template>
<div class="tree">
  <p>~</p>
  <p>|——README</p>
  <p>|——resume</p>
  <p>|——project</p>
  <p v-for="prj in prjs">|&nbsp;&nbsp;|——<a :href="prj.git" target="_Blank">{{prj.name}}</a>
  </p>
  <p>|——daisykooResume.pdf</p>
  
</div>
</template>

<script>
export default {
  name: 'main-tree',
  data () {
    return {
      prjs : this.$store.state.data.projects
    }
  },
  methods: {
    
  }
}
</script>