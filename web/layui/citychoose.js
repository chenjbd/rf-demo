function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return decodeURI(r[2]); return null;
}
	var city = getUrlParam('city');
	$("#spmenu").attr("href","gst_sp.html?city="+city);
	$("#zsmenu").attr("href","gst_zs.html?city="+city);
	$("#ysmenu").attr("href","gst_ys.html?city="+city);
	$("#zjmenu").attr("href","gst_zj.html?city="+city);
	$("#czmenu").attr("href","gst_cz.html?city="+city);
	
	$("#sygst").attr("href","gst_sp.html?city="+city);
	$("#sytsjy").attr("href","tsjy.html?city="+city);
	$("#sybgt").attr("href","bgt.html?city="+city);
	
	$("#spsidemenu").attr("href","gst_sp.html?city="+city);
	$("#zssidemenu").attr("href","gst_zs.html?city="+city);
	$("#yssidemenu").attr("href","gst_ys.html?city="+city);
	$("#zjsidemenu").attr("href","gst_zj.html?city="+city);
	$("#czsidemenu").attr("href","gst_cz.html?city="+city);
	
	$("#ptindex").attr("href","ygrf.html?city="+city);
	$("#fhindex").attr("href","ygrf.html?city="+city);
	
	if(city=='js'){
		$("#cityname").text("江苏省");
		$("#logoname").attr("src","images/logo_js.png");
		$("#banner1").attr("src","images/b1_js.jpg");
		cn="南京市";
		$("#cityVAL").html('<option value="南京市">南京市</option>'+
						   '<option value="无锡市">无锡市</option>'+
						   '<option value="徐州市">徐州市</option>'+
						   '<option value="常州市">常州市</option>'+
						   '<option value="苏州市">苏州市</option>'+
						   '<option value="南通市">南通市</option>'+
						   '<option value="连云港市">连云港市</option>'+
						   '<option value="淮安市">淮安市</option>'+
						   '<option value="盐城市">盐城市</option>'+
						   '<option value="扬州市">扬州市</option>'+
						   '<option value="镇江市">镇江市</option>'+
						   '<option value="泰州市">泰州市</option>'+
						   '<option value="宿迁市">宿迁市</option>');
	}
	if(city=='nj'){
		$("#cityname").text("南京市");
		$("#logoname").attr("src","images/logo_nj.png");
		$("#banner1").attr("src","images/b1_nj.jpg");
		$(".dqchosse").show();
		cn="南京市";
		$("#cityVAL").html('<option value="">请选择</option>'+
						'<option value="玄武区">玄武区</option>'+
						'<option value="秦淮区">秦淮区</option>'+
						'<option value="鼓楼区">鼓楼区</option>'+
						'<option value="建邺区">建邺区</option>'+
						'<option value="浦口区">浦口区</option>'+
						'<option value="栖霞区">栖霞区</option>'+
						'<option value="雨花台区">雨花台区</option>'+
						'<option value="江宁区">江宁区</option>'+
						'<option value="六合区">六合区</option>'+
						'<option value="高淳区">高淳区</option>'+
						'<option value="江北新区">江北新区</option>'+
						'<option value="溧水区">溧水区</option>');
	}
	if(city=='wx'){
		$("#cityname").text("无锡市");
		$("#logoname").attr("src","images/logo_wx.png");
		$("#banner1").attr("src","images/b1_wx.jpg");
		$(".dqchosse").show();
		cn="无锡市";
		$("#cityVAL").html('<option value="">请选择</option>'+
						'<option value="梁溪区">梁溪区</option>'+
						'<option value="滨湖区">滨湖区</option>'+
						'<option value="新吴区">新吴区</option>'+
						'<option value="锡山区">锡山区</option>'+
						'<option value="惠山区">惠山区</option>'+
						'<option value="江阴市">江阴市</option>'+
						'<option value="经开区">经开区</option>'+
						'<option value="宜兴市">宜兴市</option>');
	}
	if(city=='xz'){
		$("#cityname").text("徐州市");
		$("#logoname").attr("src","images/logo_xz.png");
		$("#banner1").attr("src","images/b1_xz.jpg");
		$(".dqchosse").show();
		cn="徐州市";
		$("#cityVAL").html('<option value="">请选择</option>'+
						'<option value="鼓楼区">鼓楼区</option>'+
						'<option value="云龙区">云龙区</option>'+
						'<option value="贾汪区">贾汪区</option>'+
						'<option value="泉山区">泉山区</option>'+
						'<option value="铜山区">铜山区</option>'+
						'<option value="睢宁县">睢宁县</option>'+
						'<option value="邳州县">邳州县</option>'+
						'<option value="新沂市">新沂市</option>'+
						'<option value="丰县">丰县</option>'+
						'<option value="经济开发区">经济开发区</option>'+
						'<option value="沛县">沛县</option>');
	}
	if(city=='cz'){
		$("#cityname").text("常州市");
		$("#logoname").attr("src","images/logo_cz.png");
		$("#banner1").attr("src","images/b1_cz.jpg");
		$(".dqchosse").show();
		cn="常州市";
		$("#cityVAL").html('<option value="">请选择</option>'+
						'<option value="天宁区">天宁区</option>'+
						'<option value="钟楼区">钟楼区</option>'+
						'<option value="新北区">新北区</option>'+
						'<option value="武进区">武进区</option>'+
						'<option value="溧阳市">溧阳市</option>'+
						'<option value="经开区">经开区</option>'+
						'<option value="金坛区">金坛区</option>');
	}
	if(city=='sz'){
		$("#cityname").text("苏州市");
		$("#logoname").attr("src","images/logo_sz.png");
		$("#banner1").attr("src","images/b1_sz.jpg");
		$(".dqchosse").show();
		cn="苏州市";
		$("#cityVAL").html('<option value="">请选择</option>'+
						'<option value="姑苏区">姑苏区</option>'+
						'<option value="虎丘区">虎丘区</option>'+
						'<option value="吴中区">吴中区</option>'+
						'<option value="相城区">相城区</option>'+
						'<option value="常熟市">常熟市</option>'+
						'<option value="张家港市">张家港市</option>'+
						'<option value="昆山市">昆山市</option>'+
						'<option value="吴江区">吴江区</option>'+
						'<option value="太仓市">太仓市</option>'+
						'<option value="工业园区">工业园区</option>');
	}
	if(city=='nt'){
		$("#cityname").text("南通市");
		$("#logoname").attr("src","images/logo_nt.png");
		$("#banner1").attr("src","images/b1_nt.jpg");
		$(".dqchosse").show();
		cn="南通市";
		$("#cityVAL").html('<option value="">请选择</option>'+
						'<option value="崇川区">崇川区</option>'+
						'<option value="港闸区">港闸区</option>'+
						'<option value="海安市">海安市</option>'+
						'<option value="如东县">如东县</option>'+
						'<option value="启东市">启东市</option>'+
						'<option value="如皋市">如皋市</option>'+
						'<option value="通州区">通州区</option>'+
						'<option value="海门市">海门市</option>');
	}
	if(city=='lyg'){
		$("#cityname").text("连云港市");
		$("#logoname").attr("src","images/logo_lyg.png");
		$("#banner1").attr("src","images/b1_lyg.jpg");
		$(".dqchosse").show();
		cn="连云港市";
		$("#cityVAL").html('<option value="">请选择</option>'+
						'<option value="连云区">连云区</option>'+
						'<option value="海州区">海州区</option>'+
						'<option value="赣榆区">赣榆区</option>'+
						'<option value="东海县">东海县</option>'+
						'<option value="灌云县">灌云县</option>'+
						'<option value="灌南县">灌南县</option>');
	}
	if(city=='ha'){
		$("#cityname").text("淮安市");
		$("#logoname").attr("src","images/logo_ha.png");
		$("#banner1").attr("src","images/b1_ha.jpg");
		$(".dqchosse").show();
		cn="淮安市";
		$("#cityVAL").html('<option value="">请选择</option>'+
						'<option value="清江浦区">清江浦区</option>'+
						'<option value="淮安区">淮安区</option>'+
						'<option value="淮阴区">淮阴区</option>'+
						'<option value="涟水县">涟水县</option>'+
						'<option value="洪泽县">洪泽县</option>'+
						'<option value="盱眙县">盱眙县</option>'+
						'<option value="生态新城">生态新城</option>'+
						'<option value="开发区">开发区</option>'+
						'<option value="金湖县">金湖县</option>');
	}
	if(city=='yc'){
		$("#cityname").text("盐城市");
		$("#logoname").attr("src","images/logo_yc.png");
		$("#banner1").attr("src","images/b1_yc.jpg");
		$(".dqchosse").show();
		cn="盐城市";
		$("#cityVAL").html('<option value="">请选择</option>'+
						'<option value="亭湖区">亭湖区</option>'+
						'<option value="盐都区">盐都区</option>'+
						'<option value="响水县">响水县</option>'+
						'<option value="滨海县">滨海县</option>'+
						'<option value="阜宁县">阜宁县</option>'+
						'<option value="射阳县">射阳县</option>'+
						'<option value="建湖县">建湖县</option>'+
						'<option value="东台市">东台市</option>'+
						'<option value="大丰区">大丰区</option>');
	}
	if(city=='yz'){
		$("#cityname").text("扬州市");
		$("#logoname").attr("src","images/logo_yz.png");
		$("#banner1").attr("src","images/b1_yz.jpg");
		$(".dqchosse").show();
		cn="扬州市";
		$("#cityVAL").html('<option value="">请选择</option>'+
						'<option value="广陵区">广陵区</option>'+
						'<option value="邗江区">邗江区</option>'+
						'<option value="宝应县">宝应县</option>'+
						'<option value="仪征市">仪征市</option>'+
						'<option value="高邮市">高邮市</option>'+
						'<option value="江都区">江都区</option>');
	}
	if(city=='zj'){
		$("#cityname").text("镇江市");
		$("#logoname").attr("src","images/logo_zj.png");
		$("#banner1").attr("src","images/b1_zj.jpg");
		$(".dqchosse").show();
		cn="镇江市";
		$("#cityVAL").html('<option value="">请选择</option>'+
						'<option value="京口区">京口区</option>'+
						'<option value="润州区">润州区</option>'+
						'<option value="丹徒区">丹徒区</option>'+
						'<option value="新区">新区</option>'+
						'<option value="丹阳市">丹阳市</option>'+
						'<option value="扬中市">扬中市</option>'+
						'<option value="句容市">句容市</option>');
	}
	if(city=='tz'){
		$("#cityname").text("泰州市");
		$("#logoname").attr("src","images/logo_tz.png");
		$("#banner1").attr("src","images/b1_tz.jpg");
		$(".dqchosse").show();
		cn="泰州市";
		$("#cityVAL").html('<option value="">请选择</option>'+
						'<option value="海陵区">海陵区</option>'+
						'<option value="高港区">高港区</option>'+
						'<option value="兴化市">兴化市</option>'+
						'<option value="靖江市">靖江市</option>'+
						'<option value="泰兴市">泰兴市</option>'+
						'<option value="姜堰区">姜堰区</option>');
	}
	if(city=='sq'){
		$("#cityname").text("宿迁市");
		$("#logoname").attr("src","images/logo_sq.png");
		$("#banner1").attr("src","images/b1_sq.jpg");
		$(".dqchosse").show();
		cn="宿迁市";
		$("#cityVAL").html('<option value="">请选择</option>'+
						'<option value="宿城区">宿城区</option>'+
						'<option value="宿豫区">宿豫区</option>'+
						'<option value="沐阳县">沐阳县</option>'+
						'<option value="泗阳县">泗阳县</option>'+
						'<option value="泗洪县">泗洪县</option>');
	}
	
	$('li.dropdown').mouseover(function() {   
		 $(this).addClass('open');    }).mouseout(function() {        $(this).removeClass('open');    }); 