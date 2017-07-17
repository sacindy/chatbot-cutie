$("button").on("click", function(){
	addMessage();

});

$(document).on("click", ".response-button",function(){
	var data= $(this).datas("hook");

});

$(document).on ("keydown", function (evt){
	if (evt.keyCode == 13){
		addMessage();
	}
})
funct(val, side, responses, image){
	responses = responses || false;
	image = image || false;

	=var chatMsg = '<li class="chats-' + side + 'pre">';
		chatMsg += val;

		if(image){
			chatMsg += 'img src+'" 'image+'" 
			class="response-image"/>';
		if (responses){
			for (var i= 0; i < responses.length; i++){
				chatMsg += '<button class ="response-button" data-hook="'+responses[i]'+ [i]+'</button>';
			}
		}



}