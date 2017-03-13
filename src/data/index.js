const data = {
	readme: 'Welcome to my resume, please keep going and found out who I am ^o^',
	resume: {
		Name: "daisykoo古潆延",
		Gender: "♀妹子",
		Birth: "1993.5.19",
		Mail: "daisykoo666@gmail.com",
		Phone: "18682066846",
		Blog: "daisykoo.rezelchen.com/blog",
		Skills: {
            html: 9,
			css: 9,
			JavaScript: 8,
			jQuery: 9,
			'Node.js': 7,
			Frame: {
				Vue_Vuex: 8,
				React_Redux: 7
			},
			Tool: {
				Less: 10,
				gulp: 9,
				Webpack: 6,
				photoshop: 4
			}
		},
		WorkExperence : {
			company: '不丢美家',
			time: '2016.6 - now',
			desc: '搭建和维护**移动**pc**家具商城',
			works: ['首页', '商品详情页', '购物车', '结算支付流程'],
			url: 'shop.budiujiaju.com'
		},
		Languages: {
	        name: 'English',
	        CET: '6+',
	        desc: 'Can read pull English document and technoligy book, solve problem with English forum'
	    }
	},
	projects: [{
			name: "Terminal-cv",
			skill: "Vue_Vuex_Webpack",
			desc: "模拟终端简历制作工具",
			git: "https://github.com/daisykoo/terminal-cv.git"
		}, {
			name: "Music-player",
			skill: "React_Redux_Node.js",
			desc: "音乐播放器，支持...",
			git: "daisykoo.rezelchen.com",
			src: "daisykoo.rezelchen.com"
		}, {
			name: "Readering",
			skill: "Node.js_Vue_Vuex_Webpack",
			desc: "全栈读书笔记工具",
			git: "daisykoo.rezelchen.com",
			src: "daisykoo.rezelchen.com"
		}],
	download: '/古潆延个人简历.pdf'
}
export {data};