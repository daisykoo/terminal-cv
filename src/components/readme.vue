<template>
<div class="readme">{{readme}}</div>
</template>

<script>
export default {
  name: 'read-me',
  data () {
    return {
      readme: this.$store.state.data.readme
    }
  },
}
</script>