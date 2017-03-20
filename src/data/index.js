//按照'[]'内格式修改修改以下数据，即可定制属于你的终端简历。
const data = {
	//自我介绍[String]
	readme: 'Welcome! I am DaisyKoo -- a web developer learning to build wonderful code. Hope that we can be partner and make cool stuff together!',
	//基本信息，属性和value值可以根据需要设置，页面中直接输出对象。
  resume: {    
		Name: "daisykoo古潆延",    	
		Gender: "Female",
		Birth: "1993.5.19",
		Mail: "daisykoo666@gmail.com",
		Phone: "18682066846",
		Blog: "daisykoo.rezelchen.com/blog", 
    // 技术对象：
    // 属性:技术盏名称
    // value值[Number]:技术熟练程度，10为满分（页面中会自动转换为进度条输出）。
    // 可以自定义多层分类，如下方的Frame
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
			desc: '搭建和维护移动端/PC端家具商城',
			url: 'shop.budiujiaju.com'
		},
		Languages: {
      name: 'English',
      CET: '6+',
      desc: 'Can read pull English document and technoligy book, solve problem with English forum.'
    }
	},
  //项目经历：
  // 每个项目为一个对象，加入到数组中
  // name: 项目名称[String]，必填
  // skill: 项目技术[String]，选填
  // desc: 项目描述[String]，选填
  // git: 项目仓库或网址[String]，选填(页面上以a标签的形式展示，可跳转)
	projects: [{
      name: "不丢美家商城",
      skill: "jQuery_LESS_GULP",
      desc: "负责首页、商品详情页、套系详情页、购物车、订单流程、个人中心等页面的移动PC端开发及维护，兼容IE8+。",
      git: "http://shop.budiujiaju.com"
    }, {
			name: "Terminal-cv",
			skill: "Vue_Vuex_Webpack",
			desc: "模拟终端简历，支持cd目录切换，ls文件展示，open文件打开等命令；修改数据并编译，即可实现个人简历定制。",
			git: "https://github.com/daisykoo/terminal-cv.git"
		}, {
			name: "Music-player",
			skill: "React_Redux_Webpack",
			desc: "模块化开发的落网音乐播放器，实现暂停／播放、歌曲选择、上一首、下一首、进度条调节等功能。",
			git: "https://github.com/daisykoo/luoo-player",
		}],
	//线下简历下载文件路径
	download: './dist/古潆延-前端开发.pdf'
}
export {data};