<template>
    <div class="language">
        <pre>
            {{this.lang}}
        </pre>
    </div>
</template>

<script>
export default {
  name: 'help',
  props: ['more'],
  data: function() {
    var self = this;
    return {
        lang: self.$store.state.data.lang
    }
  },
  computed: {

  }
}
</script>