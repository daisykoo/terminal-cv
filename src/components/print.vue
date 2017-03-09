<template>
	<p class="print"><span>{{this.more.pos}} ➤ </span><span>{{this.more.ord}}</span></p>
</template>

<script>
export default {
  name: 'print-command',
  props: ['more'],
  data () {
    return {
      data: {}
    }
  },
  methods: {
    
  }
}
</script>