$(function(){
	$("#ContactForm").submit(function(){
		$("#submitf").value='Aguarde por favor...';
		
		$.post("process.php?send=comments", $("#ContactForm").serialize(),
		function(data){
			if(data.frm_check == 'error'){ 
			
					$("#message_post").html("<div class='errorMessage'>ERROR: " + data.msg + "!</div>"); 
					document.ContactForm.submitf.value='Resend >>';
					document.ContactForm.submitf.disabled=false;
			} else {
				$("#message_post").html("<div class='successMessage'>Sua Mensagem foi enviada com sucesso!</div>"); 
				$("#submitf").value='Send >>';
				}
		}, "json");
		
		return false;
		
	});
});