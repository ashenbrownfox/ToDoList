//Check off Specific ToDos by clicking
$(document).ready(function(){
	$("ul").on("click", "li", function(){
		$(this).toggleClass("completed");
	});

	$("ul").on("click", "span", function(event){
		$(this).parent().fadeOut(500, function(){
			$(this).remove();
		});
		event.stopPropagation();
	});

	$("input[type='text']").keypress(function(){
		if(event.which === 13){
			var toDoText = $(this).val();
			console.log(toDoText);
			$(this).val("");

			$("ul").append("<li><span class='delete'><i class='fa fa-trash' aria-hidden='true'></i></span> "+ toDoText
				+"</li>");
			
		}
	});


	$(".fa-pencil-square-o").click(function(){
		$("input[type='text']").fadeToggle();
	});
});
