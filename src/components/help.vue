<template>
	<div class="help">
    <p>first step: print `cd ${module name}` to switch module, module list:</p>
    <p>|-about : my personal message</p>
    <p>|-skill : skill list</p>
    <p>|-project : personal project</p>
    <p>|-language : language leval</p>
    <p>exp: print <span class="code">cd about</span> switch to about module;</p>
    <p>second step: print `ls` to show the content</p>
    <p>last: print -help in any module to know more;</p>
  </div>
</template>

<script>
export default {
  name: 'help',
  props: ['more'],
  computed: {
    front() {
      switch(this.more.type) {
        case 'command':
          return 'daisykoo: command not found: ';
        case 'file': 
          return 'cd: no such file or directory: '
      }
    }
  }
}
</script>