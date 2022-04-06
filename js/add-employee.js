// HANDLE THE LOAD EVENT OF THE WINDOW

// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

// CLOSE THE POPUP

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE

window.addEventListener('load', () => {
    window.resizeTo(800, 700);
    window.moveTo(600, -600);
})

let cancel = document.getElementById('cancel');
cancel.addEventListener('click', () => {
    window.close();
})

let form = document.getElementById('empForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let id = document.getElementById('id').value;
    console.log(`ID: ${id}`);
    let name= document.getElementById('name').value;
    console.log(`Name: ${name}`);
    let ext = document.getElementById('extension').value;
    console.log(`Extension: ${ext}`);
    let email = document.getElementById('email').value;
    console.log(`Email: ${email}`);
    let department = document.getElementById('department').value;
    console.log(`Department: ${department}`);
    let parentoutput = window.opener.document.getElementById('loginDetails');
    parentoutput.innerHTML = `ID: ${id}<br>Name: ${name}<br>Extension: ${ext}<br>Email: ${email}<br>Department: ${department}`;
    window.close(); 
})