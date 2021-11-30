$(document).ready(() => {
	const yTemplate = $('#team > div > div:nth-child(2) > div > div:nth-child(1) > a');

	yInit(1, 1340761826, "没有什么是摸鱼做不到，如果有，那就多摸一会。", "//i.iying.top");

	yInit(2, 1737335442, "", "//www.islmh.cn");
	yInit(2, 2945775594, "这个需求很简单！", "#");
	yInit(2, 1346653001, "hi~ 你好，这里是海豚。", "#");
  
	yInit(3, 1756340200, "惹了做地图的人，你连开始屋都出不去。", "#");
	yInit(3, 1184460184, "", "#");
	yInit(3, 1808562846, "", "#");
	yInit(3, 939983740, "", "#");
	yInit(3, 1258781427, "", "#");
	yInit(3, 2282053451, "", "#");
	yInit(3, 1303845406, "", "#");
	yInit(3, 3266804313, "", "#");
	yInit(3, 1953907351, "", "#");
    yInit(3, 3370461966, "", "#");
	yInit(3, 2984806255, "", "#");
  	yInit(3, 2603222506, "", "#");
	yInit(3, 1158023071, "", "#");
	yInit(3, 188300516, "", "#");

	yLoad(yTemplate);
});

const yGroups = [];
const yUins = [];
const ySignatures = [];
const ySites = [];

// https://users.qzone.qq.com/fcg-bin/cgi_get_portrait.fcg?uins=1340761826
const yInit = (yGroup, yUin, ySignature, ySite) => {
	yGroups.push(yGroup);
	yUins.push(yUin);
	ySignatures.push(ySignature);
	ySites.push(ySite)
}

const yLoad = (yTemplate) => {
	$.ajax({
		type: "get",
		async: false,
		url: 'https://users.qzone.qq.com/fcg-bin/cgi_get_portrait.fcg?uins=' + yUins.join(","),
		dataType: "jsonp",
		jsonp: "portraitCallBack",
		jsonpCallback: "portraitCallBack",
		success: (yData) => {
			console.log(yData);
			yUins.forEach((yValue, yIndex) => {
				yTemplate = yTemplate.clone();
				yTemplate.show();
				yTemplate.find('img').attr('src', 'https://q.qlogo.cn/headimg_dl?dst_uin=' + yValue + '&spec=100');
				yTemplate.find('p').html(yData[yValue][6]);
				yTemplate.find('span').html(ySignatures[yIndex]);
				yTemplate.attr('href', ySites[yIndex]);
				yTemplate.appendTo('#team > div > div:nth-child(2) > div > div:nth-child(' + yGroups[yIndex] + ')');
			});
		},
		error: (error) => console.error(error),
	});
}

function portraitCallBack(yData)  {}