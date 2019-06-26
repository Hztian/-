var navbutton = document.getElementById('navbutton')
var chang_icon = document.getElementById('chang_icon')
var check = true
navbutton.onclick = function(){
	console.log("开始"+check)
	if (check==true) {
		$('#chang_icon').attr("xlink:href", "#icon-guanbi");
		check=false
	} 
	else if(check==false){
		$('#chang_icon').attr("xlink:href", "#icon-changjingdakai");
		check=true
	}
	console.log("结束"+check)
}
