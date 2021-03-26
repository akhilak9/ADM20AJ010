$(document).ready(function(){
	$('#btn').click(function(){
		var search=$('#searchbox').val();
		var textarea=$('#textarea').val();

		var words=search.split(",");
		var answer="";
		var lines=textarea.split("\n");
		for(var j=0;j<words.length;j++){

		for(var i=0;i<lines.length;i++){
			if(lines[i].includes(words[j])){
				var lineWords=lines[i].split(" ");
				for(var k=0;k<lineWords.length;k++){
					if(words[j].localeCompare(lineWords[k])){
						if(k==lineWords.length-1)
						answer=answer.concat(lineWords[k]).concat(", ");
						else
						answer=answer.concat(lineWords[k]).concat(" ");
					}
					else
					{	if(k==lineWords.length-1)
						answer=answer.concat("<b>").concat(lineWords[k]).concat("</b>, ");
						else
						answer=answer.concat("<b>").concat(lineWords[k]).concat("</b> ");
					}
				}



				
			}		
		}

		}
		$('#result').val(answer.substring(0,answer.length-2));

	})
})