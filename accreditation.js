
var result = window.location.hash;
	result =  parseInt(result.substring(1,result.length));
	
	if(isNaN(result) || result==""){
		result=0;
	}
	window.location.hash = result;

$(document).ready(function(){


	

	// text for questions
	if($("input").length > 0){
		
		
		
		$("button").bind("click",function(event){
		
			if($( "input[type=radio]:checked").val() >= 0){
		
				$( "input[type=radio]").attr("disabled","disabled");
				$(this).css("display","none");
				
				
				
				if($( "input[type=radio]:checked").val()==1){
					$("#correct").css("display","block");
				} else {
					$("#incorrect").css("display","block");
				}
				
				
				
				$("#accred-feedback").css("display","block");
				
				
				
				
				
				
				
				
				
				$( "#accred-feedback" ).animate({
					opacity: 1
				  }, 500, function() {
					
					
					
						
					
					
						
					
				  });
				
				
				
				
		
		
			} else {
			
			
			
			
			
			}
		
		});
		
		
		
		$("a").bind("click",function(event){
			event.preventDefault();
			
			
			
			
			//alert(result);
			//alert(parseInt($( "input[type=radio]:checked" ).val()));
			
			result = (result + parseInt($( "input[type=radio]:checked" ).val()));
			
			
			location.href = $(this).attr("href")+"#"+result;
			
			
			return false;

			



		});
		
		
		
		
		
		
	// result
	} else if ($("#accred-response").length > 0){
	
		//alert('result:'+result);
	
	
	// intros
	
	} else {
	
	}


});