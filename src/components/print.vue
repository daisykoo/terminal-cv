<template>
	<p class="print">
    <span class="bing">bing</span>@<a class="user" href="http://daisykoo.rezelchen.com">daisykoo</a>:
    <span class="yellow">{{this.more.pos}} $</span>
    <span class="command">{{this.more.ord}}</span>
  </p>
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