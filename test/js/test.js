var arr = [
	[
		["华硕主板","F8 "],
		["技嘉主板","F12 "],
		["微星主板","F11 "],
		["映泰主板","F9 "],
		["梅捷主板","ESC或F12 "],
		["七彩虹主板","ESC或F11 "],
		["华擎主板","F11 "],
		["斯巴达克主板","ESC "],
		["昂达主板","F11 "],
		["双敏主板","ESC "],
		["翔升主板","F10 "],
		["精英主板","ESC或F11 "],
		["冠盟主板","F11或F12 "],
		["富士康主板","ESC或F12 "],
		["顶星主板","F11或F12 "],
		["铭瑄主板","ESC或F11 "],
		["盈通主板","F8或F11 "],
		["捷波主板","ESC "],
		["Intel主板","F12 "],
		["杰微主板","ESC或F8 "],
		["致铭主板","F12 "],
		["磐英主板","ESC "],
		["磐正主板","ESC "],
		["冠铭主板","F9 "],
		["军工主板","F11 "]
	],
	[
		["联想笔记本","F12 "],
		["宏基笔记本","F12 "],
		["华硕笔记本","ESC "],
		["惠普笔记本","F9 "],
		["联想Thinkpad","F12 "],
		["戴尔笔记本","F12 "],
		["神舟笔记本","F12 "],
		["东芝笔记本","F12 "],
		["三星笔记本","F12 "],
		["IBM笔记本","F12 "],
		["富士通笔记本","F12 "],
		["海尔笔记本","F12 "],
		["方正笔记本","F12 "],
		["清华同方笔记本","F12 "],
		["微星笔记本","F11 "],
		["明基笔记本","F9 "],
		["技嘉笔记本","F12 "],
		["Gateway笔记本","F12 "],
		["eMachines笔记本","F12 "],
		["索尼笔记本","F11或ESC "],
		["苹果笔记本","开机长按“option”键 "]
	],
	[
		["联想品牌台式","F12 "],
		["惠普品牌台式","F9或F12 "],
		["宏基品牌台式","F12 "],
		["戴尔品牌台式","ESC或F12 "],
		["神舟品牌台式","F12"],
		["华硕品牌台式","F8 "],
		["方正品牌台式","F12 "],
		["清华同方台式","F12 "],
		["海尔品牌台式","F12 "],
		["明基品牌台式","F8 "]
	]
];	



var num;

function query(e){
	for (var i = 0; i < arr[e].length; i++) {
		$('#sec2').append('<option>'+arr[e][i][0]+'</option>');
	}
	for (var i = 0; i < arr[e].length; i++) {
		if (arr[e][i][0]==sec2.value) {
			$('#shortcuts').html(arr[e][i][1]);
		}
	}
	num=e;
}

$('#sec1').change(function(){
	$('#sec2').html('');
	$('#shortcuts').html('');
	var val=this.value;
	switch (val) {
		case '组装台式电脑':
			query(0);
			break;
		case '品牌笔记本':
			query(1);
			break;
		case '品牌台式电脑':
			query(2);
			break;
		default:
			$('#sec2').html('<option>'+'请选择电脑品牌'+'</option>');
			$('#shortcuts').html('请在左边选择电脑类型和品牌查看U盘启动快捷键');
			break;
	}
});


$('#sec2').change(function(){
	$('#shortcuts').html('');
	for (var i = 0; i < arr[num].length; i++) {
		if (this.value==arr[num][i][0]) {
			$('#shortcuts').html(arr[num][i][1]);
		}
	}
});