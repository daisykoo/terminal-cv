<template>
<div class="tree">
  <p>~</p>
  <p>|——README</p>
  <p>|——resume</p>
  <p>|——projects</p>
  <p v-for="prj in prjs">|&nbsp;&nbsp;|——
    <a :href="prj.src" target="_Blank">{{prj.name}}</a>
    <a :href="prj.git" target="_Blank">git</a>
    <span>{{prj.desc}}</span>
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