const data = {
	readme: 'Welcome to my resume, please keep going and found out who I am ^o^',
	resume: {
		name: "daisykoo古潆延",
		gender: "♀妹子",
		birth: "1993.5.19",
		mail: "daisykoo666@gmail.com",
		phone: "18682066846",
		blog: "daisykoo.rezelchen.com/blog",
		skills: {
            html: 9,
			css: 9,
			JavaScript: 8,
			jQuery: 9,
			'Node.js': 7,
			frame: {
				Vue_Vuex: 8,
				React_Redux: 7
			},
			tool: {
				Less: 10,
				gulp: 9,
				Webpack: 6,
				photoshop: 4
			}
		},
		workExperence : {
			company: '不丢美家',
			time: '2016.6 - now',
			desc: '搭建和维护**移动**pc**家具商城',
			works: ['首页', '商品详情页', '购物车', '结算支付流程'],
			url: 'shop.budiujiaju.com'
		},
		languages: {
	        name: 'English',
	        CET: '6+',
	        desc: 'Can read pull English document and technoligy book, solve problem with English forum'
	    }
	},
	projects: [{
			name: "terminal-cv",
			skill: "vue + vuex + webpack",
			desc: "模拟终端简历制作工具",
			git: "https://github.com/daisykoo/terminal-cv.git"
		}, {
			name: "music-player",
			skill: "react + redux + node.js",
			desc: "音乐播放器，支持...",
			git: "daisykoo.rezelchen.com",
			src: "daisykoo.rezelchen.com"
		}, {
			name: "readering",
			skill: "Node.js + vue + vuex + webpack",
			desc: "全栈读书笔记工具",
			git: "daisykoo.rezelchen.com",
			src: "daisykoo.rezelchen.com"
		}],
	download: '/古潆延个人简历.pdf'
}
export {data};