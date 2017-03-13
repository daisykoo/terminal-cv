<template>
	<div class="help">
    You can control this resume  by typing commands in the terminal or by clicking the underlinked project link.
    <p> Commands list: <span class="highLight">open cd ls -help download</span></p>
    <p>* type <span class="highLight">"cd + [directory name]"</span> to change into a directory.</p>
    <p>* type <span class="highLight">"ls"</span> to list the contents of that directory.</p>
    <p>* type <span class="highLight">"open + [file name]"</span> to view the content file.</p>
    <p>* </span>type <span class="highLight">"download"</span> to download the PDF resume.</p>
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