console.log("Project 4");


const name1 = document.getElementById('name');
const email1 = document.getElementById('email');
const phone1 = document.getElementById('phone');

let validName = false;
let validEmail = false;
let validPhone = false;


// when form submit and no error found then clear the all data of name, email, address and phn no.
//so implement the clear function
function clear () {
    const form1 = document.getElementById('submitForm');
    form1.reset();
    

}



//console.log(name1, email, phone)
name1.addEventListener('blur', () => {
    console.log("name is blurred");

    //validated name here
    let regex = /^[A-Z]([a-z]){2,10}$/;
    let str = name1.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your name is valid');
        name1.classList.remove('is-invalid');
        validName = true;

        // name set in localstorage
        let userid = document.getElementById('userid');
        let name2 = document.getElementById('name').value;
        let name3 = localStorage.getItem('blk');
        let nameObj
        
        if (name3 == null) {
            nameObj = [];
        }
        else {
            nameObj = JSON.parse(name3);
        }
       nameObj.push(name2);
        
        localStorage.setItem('blk', JSON.stringify(nameObj));
        console.log(name2)
        name2 = "";
        

    }
    else {
        console.log('Your name is not valid');
        name1.classList.add('is-invalid');
        validName = false;
    }
})

email1.addEventListener('blur', () => {
    console.log("email is blurred");

    //validated email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email1.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email1.classList.remove('is-invalid');
        validEmail = true;

         // Email value set in localstorage
         let emailid = document.getElementById('userid');
         let email2 = document.getElementById('email').value;
         let email3 = localStorage.getItem('red');
         let emailObj
         
         if (email3 == null) {
             emailObj = [];
         }
         else {
             emailObj = JSON.parse(email3);
         }
        emailObj.push(email2);
         
         localStorage.setItem('red', JSON.stringify(emailObj));
         console.log(email2)
         email2 = "";
         
 
     }
     else {
         console.log('Your name is not valid');
         name1.classList.add('is-invalid');
         validName = false;
     }
    
   
})


phone1.addEventListener('blur', () => {
    console.log("phone is blurred");

    //validated phone here
    let regex = /^([0-9]){10}$/;
    let str = phone1.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phn num is is valid');
        phone1.classList.remove('is-invalid');
        validPhone = true;

        // Email value set in localstorage
        let phoneid = document.getElementById('phoneid');
        let phone2 = document.getElementById('phone').value;
        let phone3 = localStorage.getItem('blue');
        let phonelObj
        
        if (phone3 == null) {
            phoneObj = [];
        }
        else {
            phoneObj = JSON.parse(phone3);
        }
       phoneObj.push(phone2);
        
        localStorage.setItem('blue', JSON.stringify(phoneObj));
        console.log(phone2)
        phone2 = "";
        

    
    }
    else {
        console.log('Your phn num is  is not valid');
        phone1.classList.add('is-invalid');
        validPhone = false;
    }
})


let submit1 = document.getElementById('submit');
submit1.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("you click on submit");
    console.log(validName, validEmail, validPhone);

    //Submit your from here
    if (validName && validEmail && validPhone) {
        console.log("Phone, email,and username are valid. Submitting the form")
        let success1 = document.getElementById("success");
        success1.classList.add('show');
        let failure1 = document.getElementById("failure");
        failure1.classList.remove('show');

        // clear function calling 
        clear();
        
    }
    else {
        console.log("One of Phone, email and username are not valid hence not Submitting the form.Correct the error and try again")
        let failure1 = document.getElementById("failure");
        failure1.classList.add('show');
        let success1 = document.getElementById("success");
        success1.classList.remove('show');
       
    }


})
