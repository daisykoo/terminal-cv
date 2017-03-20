<template>
	<div class="download">
    <a :href="url" target="_blank">点击下载</a>
  </div>
</template>

<script>
export default {
  name: 'download',
  data: function() {
    return {
      url: this.$store.state.data.download
    }
  }
}
</script>