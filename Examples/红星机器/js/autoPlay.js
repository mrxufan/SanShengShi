(function(){
	// var imgArr=['images/1.jpg','images/2.jpg','images/1.jpg','images/2.jpg'];
	var imgArr=[];
	var bannerWrap=document.querySelector('.banner-wrap');
	var circle=document.querySelector('.circle');
	var li=circle.getElementsByTagName('li');
	var leftBtn=document.querySelector('.left-btn');
	var rightBtn=document.querySelector('.right-btn');
	var num=0;
	var timer=null;


	// ajax获取图片
	var xhr=new XMLHttpRequest();
	xhr.open('get','http://jsonplaceholder.typicode.com/photos',true);
	xhr.send();
	xhr.onreadystatechange=function(){
		if (xhr.readyState==4&&xhr.status==200) {
			var json=JSON.parse(xhr.responseText);
			var subJson=json.slice(0,5);
			subJson.forEach(function(a){
				imgArr.push(a.url);
			}.bind(this));
			console.log(imgArr.length);

			// 根据图片数量自动生成圆点
			for (var i = 0; i < imgArr.length; i++) {
				circle.innerHTML+='<li></li>';
			}

			function setInit(){
					bannerWrap.style.backgroundImage = 'url('+imgArr[num]+')';
					for (var i = 0; i < li.length; i++) {
						li[i].className='';
					}
					li[num].className='active';
				}

				// 自动播放
				function autoPlay(){
					setInit();
					num++;
					if (num>imgArr.length-1) {
						num=0;
					}
				}

				autoPlay();
				timer=setInterval(autoPlay, 3000);

				// 鼠标经过停止自动播放
				bannerWrap.onmouseenter=function(){
					clearInterval(timer);
				};
				// 鼠标离开继续自动播放
				bannerWrap.onmouseleave=function(){
					timer=setInterval(autoPlay, 3000);
				};

				// 点击右边按钮切换图片
				rightBtn.onclick=function(){
					setInit();
					num++;
					if (num>imgArr.length-1) {
						num=0;
					}
				};

				// 点击左边按钮切换图片
				leftBtn.onclick=function(){
					setInit();
					num--;
					if (num<0) {
						num=imgArr.length-1;
					}
				};
		}
	};
})()