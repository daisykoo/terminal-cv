<template>
<div class="project">
  <ul>
    <li v-for="prj in prjs">
      <a :href="prj.git" target="_Blank">{{prj.name}}</a>
      <span class="skill">[{{prj.skill}}]</span>
      <span class="intro"> - {{prj.desc}}</span>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'my-project',
  data () {
    return {
      prjs : this.$store.state.data.projects
    }
  }
}
</script>