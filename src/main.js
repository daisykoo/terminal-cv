import Vue from "vue"
import store from './store'

import Resume from './components/resume.vue'
import Readme from './components/readme.vue'
import Project from './components/project.vue'
import Help from './components/help.vue'
import NotFound from './components/notFound.vue'
import Main from './components/main.vue'
import Print from './components/print.vue'

require('./style/index.less')
new Vue({
  el: '#terminal_cv',
  store: store,
  data: {
  	pos: '~',
  	items: [],
  	dir: {
  		'~': 'main-page',
  		'project': 'my-project'
  	},
    file: {
      'README': 'read-me',
      'resume': 'my-resume'
    },
  	command: ''
  },
  computed: {
  	lastlog() {
  		return (new Date()).toString();
  	},
  	header() {
  		return this.pos + ' ➤';
  	}
  },
  components: {
    'read-me': Readme,
  	'main-page': Main,
  	'my-resume': Resume,
  	'my-project': Project,
  	'my-help': Help,
  	'not-found': NotFound,
  	'print-order': Print
  },
  methods: {
  	addOrder() {
  		const ord = this.command.replace('\r', ''),
  			ordArr = ord.split(" ");
  		this.command = '';
  		this.items.push({
			component: 'print-order', 
			more: {
				pos: this.pos,
				ord: ord
			}
		});
  		if (ordArr.length === 1 && ord === "ls") {
  			this.items.push({component: this.dir[this.pos]});
  		} else if (ordArr.length === 2 && ordArr[0] === "cd") {
  			this.cd(ordArr[1]);
  		} else if (ordArr.length === 2 && ordArr[0] === "open") {
        this.open(ordArr[1]);
      } else if (ordArr.length === 1 && ordArr[0] === "-help") {
  			this.items.push({component: 'my-help'});
  		} else {
  			this.items.push({component: 'not-found', more: {
  				type: 'command',
  				text: ord
  			}});
  		}
  	},
    cd(dir) {
      if (this.dir.hasOwnProperty(dir)) {
        this.pos = dir;
      } else {
        this.items.push({component: 'not-found', more: {
          type: 'file',
          text: dir
        }});
      }
    },
    open(file) {
      if (this.pos === '~' && this.file.hasOwnProperty(file)) {
        this.items.push({component: this.file[file]});
      } else {
        this.items.push({component: 'not-found', more: {
          type: 'file',
          text: file
        }});
      }
    },
  	specialKeyHandler(key) {
  		let oldCom = this.command;
  		if (key === 46 || key === 8) {
  			this.command = oldCom.slice(0, oldCom.length - 1);
  		}
  	},
  	keyHandler(key) {
  		this.command += String.fromCharCode(key);
  	}
  },
  created() {
  	let self = this;
  	window.onkeydown = function(e) {
  		const key = e.which || e.keyCode;
  		if (key === 13) {
  			self.addOrder();
  		} else if (key === 8 || key === 46 || key === 38 || key === 37 || key === 39 || 
  			key === 40 || e.ctrlKey) {
            e.preventDefault();
            self.specialKeyHandler(key);
        }
  	}
  	window.onkeypress = function(e) {
  		const key = e.which || e.keyCode;
  		self.keyHandler(key);
  	}
  }
})
