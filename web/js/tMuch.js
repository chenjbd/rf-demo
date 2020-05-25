$(document).ready(function(){
//限制字符个数
$(“.tMuch”).each(function(){
var maxwidth=3;
if($(this).text().length>maxwidth){
$(this).text($(this).text().substring(0,maxwidth));
$(this).html($(this).html()+’…’);
}
});
});