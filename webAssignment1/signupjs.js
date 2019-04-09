
				 
			
            var emailvalid= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			
	        var illegalChars = /\W/; // allow letters, numbers, and underscores
			name.addEventListener('blur', nameVerify, true);
            email.addEventListener('blur', emailVerify, true);
            password.addEventListener('blur', passwordVerify, true);
 
	function validate(){
		 var name=document.getElementById('name').value;
            var email=document.getElementById('Email').value;
            var password=document.getElementById('Password').value;
	      
			
    if (name == "") {
        name.style.background = 'Yellow';
        document.getElementById("errormsg").innerHTML="Please enter a Username";
        return false;
 
    }if ((name.length < 5) || (name.length > 15)) {
        name.style.background = 'Yellow';
		 document.getElementById("errormsg").innerHTML="The username is the wrong length";
		return false;
 
    }
	
		if(email==""){
   document.getElementById("errormsg").innerHTML="Please enter a email";
    return false; 
}
if(password==""){
 document.getElementById("errormsg").innerHTML="Password required";
    return false;
}
}
//event nameVerify
	function nameVerify(){
	if (illegalChars.test(name)) {
		 document.getElementById("errormsg").innerHTML=" ";
		return true;
 
    }
	}
	//event emailVerify
	function emailVerify(){
	if(emailvalid.test(email)){
    document.getElementById("errormsg").innerHTML=" ";
    return true;
}
	}
	

	