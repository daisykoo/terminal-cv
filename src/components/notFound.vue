<template>
	<p class="notFound">{{this.front}}{{this.more.text}}</p>
</template>

<script>
export default {
  name: 'not-found',
  props: ['more'],
  computed: {
    front() {
      switch(this.more.type) {
        case 'command':
          return 'daisykoo: command not found: ';
        default: 
          return this.more.type + ': no such file or directory: '
      }
    }
  },
  methods: {
    
  }
}
</script>