var myindex=0;
	$(document).ready(function(){
		var timer=setInterval(function(){
			$(".into").eq(myindex).css("transform","translateY(0px)");
			$(".into").eq(myindex).css("opacity","1");
			myindex++;
			if($(".into").length<=myindex){
				clearInterval(timer);
			}
		},100);
	});
$(document).ready(function(){
		$("#openbtn").click(function(){
			$("#mySidenav").css({"left":"0"});


			$(".anse").css({"opacity":"0.6"});
			$(".anse").css({"z-index":"9999"});
			$("#closebtn").css({"display":"block"});
			$("#openbtn").css({"display":"none"});
			$("#closebtn").css({"z-index":"99999"});

		});

		$(".closebtn").click(function(){
			$("#mySidenav").css({"left":"-250px"});
			$(".anse").css({"opacity":"0"});
			$(".anse").css({"z-index":"0"});
			$("#closebtn").css({"display":"none"});
			$("#openbtn").css({"display":"block"});

		});

	});
	
