function sendContactData(){
    let form = document.getElementById('contactForm');
    let errorDiv = document.querySelector('#contact #contactForm .error');
    let errorMessage = document.querySelector('#contact #contactForm .error .errMessage');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(form['name'].value === "" || form['user-email'].value === ""
    || form['subject'].value === "" || form['message'].value === ""){
        if(document.querySelector('#contact #contactForm .successMessage').style.display = 'flex'){
            document.querySelector('#contact #contactForm .successMessage').style.display = 'none';
        }
        window.location.href = '#contactForm';
        errorMessage.innerHTML = 'You must fill in all the fields';
        return errorDiv.style.display = 'flex';
    }else if(!form['user-email'].value.match(pattern)){

        if(document.querySelector('#contact #contactForm .successMessage').style.display = 'flex'){
            document.querySelector('#contact #contactForm .successMessage').style.display = 'none';
        }
        window.location.href = '#contactForm';
        errorMessage.innerHTML = 'Please Enter Valid Email Address';
        return errorDiv.style.display = 'flex';
    }

    let contactData = document.querySelectorAll('#contact form .contact_data');
    let form_data = new FormData();

    for( let count = 0; count < contactData.length; count++){
        form_data.append(contactData[count].name, contactData[count].value)
    }
    document.querySelector('#contact #contactForm #submit-contact').disabled = true;

    const xhttp = new XMLHttpRequest();
    xhttp.open('POST', '/contact/handler');
    xhttp.send(form_data);

    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            document.querySelector('#contact #contactForm #submit-contact').disabled = false;
            document.getElementById('contactForm').reset();
            window.location.href = '#contactForm';
            if(document.querySelector('#contact #contactForm .error').style.display = 'flex'){
                document.querySelector('#contact #contactForm .error').style.display = 'none';
            }
            document.querySelector('#contact #contactForm .successMessage').style.display = 'flex';
        }
    }
}
function closeSuccessMsg(){
    return document.querySelector('#contact #contactForm .successMessage').style.display = 'none';
}
function closeError(){
    return document.querySelector('#contact #contactForm .error').style.display = 'none';
}
