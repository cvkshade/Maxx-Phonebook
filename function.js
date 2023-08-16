// Targeted Elements
let phonebook = document.querySelector('.main');
let created = false;
let localArray;


let contactList = [
   
]

class contact {
    constructor(thumbnail, firstName, lastName, middleName, mobile, homeNum, workNum, email, address){
        this.thumbnail = thumbnail;
        this.firstname = firstName;
        this.lastname = lastName;
        this.middlename = middleName;
        this.mobile = mobile;
        this.homephone = homeNum;
        this.workphone = workNum;
        this.email = email;
        this.address = address;
        this.id = Date.now();
    }
}
const xClose = (ele) => {
    ele.style.display = 'none';
    // renderContent(contactList);
    location.reload();
}
const newContact = (thumbnail, firstName, middleName,  lastName, mobile, homeNum, workNum, email, address) => {
    let addBoard = document.querySelector('.addBoard');
    addBoard.classList.add('hideItem');

    let person = new contact (
        thumbnail, firstName,middleName, lastName, mobile, homeNum, workNum, email, address
    );
    contactList.push(person);
    renderContent(contactList);
    created = false;

    connectLocal(contactList);

}
const updateContact = (index, thumbnail, firstName, middleName,  lastName, mobile, homeNum, workNum, email, address) => {
    let addBoard = document.querySelector('.addBoard');
    addBoard.classList.add('hideItem');

        // contactList[index].thumbnail = thumbnail;
        contactList[index].firstname = firstName;
        contactList[index].lastname = lastName;
        contactList[index].middlename = middleName;
        contactList[index].mobile = mobile;
        contactList[index].homephone = homeNum;
        contactList[index].workphone = workNum;
        contactList[index].email = email;
        contactList[index].address = address;

            renderContent(contactList);
}

const connectLocal = (contactList) => {
    window.localStorage.setItem('contactList', JSON.stringify(contactList));
}
// connectLocal()
const retrieveLocal = () => {
    localFile = localStorage.getItem('contactList');
    localArray = JSON.parse(localFile);
    if(localArray === null) return;
    contactList = [...localArray];
}
retrieveLocal();
const renderContent = contactList => {
    let contactBook = document.querySelector('.phonebook');
    let navList = document.querySelector('.navlist');
    contactBook.innerHTML = "";
    navList.innerHTML = "";
    if(contactList.length === 0) return;
  
    for(let i =0; i < contactList.length; i++) {
        newPerson = document.createElement('div');
        newPerson.setAttribute('data-id', `${contactList[i].id}`);
        newPerson.setAttribute('class', 'contact');
        newPerson.innerHTML = `<div class="image">

                </div>
                <div class="info">
                    <div class="modifyer">
                    <button class="editContact" data-index="${i}">Edit</button>
                       <button class="deleteContact" data-index="${i}">Delete</button>
                    </div>
                    <section class="topSec">
                    <span class="name">${contactList[i].firstname} ${contactList[i].middlename} ${contactList[i].lastname}</span>
                    </section>
                    <section class="contactInfo">
                        <span><span class="marker">Primary:</span>  ${contactList[i].mobile}  <ion-icon name="call-outline"></ion-icon></span>
                    <span><span class="marker">Email:</span> ${contactList[i].email} <ion-icon name="email"></ion-icon></span>
                    <span><span class="marker">Home:</span> ${contactList[i].homephone}  <ion-icon name="call-outline"></ion-icon></span>
                    </section>
                    <section class="hiddenINfo">
                    <span><span class="marker">Address:</span> ${contactList[i].address} <ion-icon name="email"></ion-icon></span>
                    </section>
                </div
        `
        sideInfo = document.createElement('li');
        sideInfo.setAttribute('data-id', `${i}`);
        sideInfo.setAttribute('class', 'sideCo');
        sideInfo.innerHTML = `
        <div>
        <span class="sideImage">
                            ${contactList[i].firstname[0]}
                        </span>
                        <span class="sideName">${contactList[i].firstname} ${contactList[i].lastname}</span>
                        <button class="call-btn"><svg  class="ionicon" viewBox="0 0 512 512"><path fill="currentColor" d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0128.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 01-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 01391 480z"/></svg></button>
                        <button class="email-btn"><svg class="ionicon" viewBox="0 0 512 512"><path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z"/></svg></button>
                        <button class="info-btn"><svg class="ionicon" viewBox="0 0 512 512"><path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm48 226h-88a16 16 0 010-32h28v-88h-16a16 16 0 010-32h32a16 16 0 0116 16v104h28a16 16 0 010 32z"/></svg></button>                   </div>
            <section class="contact-info">jljdfald</section>
        `
    contactBook.appendChild(newPerson);
    navList.append(sideInfo);


    };
    
}

renderContent(contactList);

createNewContact = () => {
    let contactForm = document.createElement('div');
    contactForm.setAttribute('class', 'addBoard');
    contactForm.innerHTML = `<div class="top">
    <span class="close">X</span>
    <div class="imageSec">
    <img class="proImg"><input class="proImageInput" type="file" name="thumbnail"> </div>

    <div class="nameDisplay">
    <span class="firstname"></span>
    <span class="middlename"></span>
    <span class="lastname"></span>

    </div>
    </div><div class="bottom">
    <div class="personalInfo">
    <span> First Name:  <input type="text" name="firstname" placeholder="Enter Firstname"></span>
    <span> Middle Name:  <input type="text" name="middlename" placeholder="Enter Middle Name"></span>
    <span> Last Name:  <input type="text"name="lastname" placeholder="Enter Lastname"></span>
    </div>
    <div class="commInfo">
    <span>Personal: <input name="personal" type="text" placeholder="Enter Number"></span>
    <span>Home: <input type="text" name="home" placeholder="Enter Number"></span>
    <span>Work: <input type="text" name="work" placeholder="Enter Number"></span>
    <span>Email: <input type="email" name="email" placeholder="Email Address"></span>
    </div>
    <div class="addresses">
    <span>Address: <input type="text" name="address" class="address"></span>
    <button class="submit">Save</button>
    </div>
    </div>`;
    phonebook.appendChild(contactForm);
    created = true;
}

editContact = (index) => {

    console.log(contactList[index]);
    let contactForm = document.createElement('div');
    contactForm.setAttribute('class', 'addBoard');
    contactForm.innerHTML = `<div class="top">
    <span class="close">X</span>
    <img class="proImg"><input class="proImageInput" type="file" name="thumbnail"> </div>

    <div class="nameDisplay">
    <p class="firstname"></p>
    <p class="middlename"></p>
    <p class="lastname"></p>

    </div>
    </div><div class="bottom">
    <div class="personalInfo">
    <span> First Name:  <input value="${contactList[index].firstname}" type="text" name="firstname" placeholder="Enter Firstname"></span>
    <span> Middle Name:  <input value="${contactList[index].middlename}" type="text" name="middlename" placeholder="Enter Middle Name"></span>
    <span> Last Name:  <input type="text"name="lastname" value="${contactList[index].lastname}" placeholder="Enter Lastname"></span>
    </div>
    <div class="commInfo">
    <span>Personal: <input name="personal" value="${contactList[index].mobile}" type="text" placeholder="Enter Number"></span>
    <span>Home: <input type="text" name="home" value="${contactList[index].homephone}" placeholder="Enter Number"></span>
    <span>Work: <input type="text" name="work" value="${contactList[index].workphone}" placeholder="Enter Number"></span>
    <span>Email: <input type="email" name="email" value="${contactList[index].email}" placeholder="Email Address"></span>
    </div>
    <div class="addresses">
    <span>Address: <input type="text" name="address" value="${contactList[index].address}" class="address"></span>
    <button class="update">Update</button>
    </div>
    </div>`;
    phonebook.appendChild(contactForm);
}

phonebook.addEventListener('click', (e)=>{

    console.log(e.target)
    if(e.target.classList.contains('addContact')){

        if(created) return;
        createNewContact()
    }
    else if(e.target.classList.contains('submit')){
        console.log('charles')
    let firstname = document.querySelector('input[name=firstname]').value;
    let lastname = document.querySelector('input[name=lastname]').value;
    let middlename = document.querySelector('input[name=middlename]').value;
    let email = document.querySelector('input[name=email]').value;
    let mobile = document.querySelector('input[name=personal]').value;
    let worknumber = document.querySelector('input[name=work]').value;
    let home = document.querySelector('input[name=home]').value;
    let address = document.querySelector('input[name=address]').value;
    let thumbnail = document.querySelector('input[name=thumbnail]').files[0];

    newContact(thumbnail, firstname, lastname, middlename, mobile, home, worknumber, email, address);
    }
    else if(e.target.classList.contains('update')){
        console.log('charles')
        let index = e.target.getAttribute("data-index");
        let firstname = document.querySelector('input[name=firstname]').value;
    let lastname = document.querySelector('input[name=lastname]').value;
    let middlename = document.querySelector('input[name=middlename]').value;
    let email = document.querySelector('input[name=email]').value;
    let mobile = document.querySelector('input[name=personal]').value;
    let worknumber = document.querySelector('input[name=work]').value;
    let home = document.querySelector('input[name=home]').value;
    let address = document.querySelector('input[name=address]').value;
    let thumbnail = document.querySelector('input[name=thumbnail]').files[0];

    updateContact(index, thumbnail, firstname, lastname, middlename, mobile, home, worknumber, email, address);
    }
    else if(e.target.classList.contains('deleteContact')) {
        const index = e.target.parentElement.getAttribute("data-index");
        contactList.splice(index, 1);
        renderContent(contactList);
    }
    else if(e.target.classList.contains('editContact')) {
        let index = e.target.getAttribute("data-index");
        editContact(index);
        renderContent(contactList);
    }   
    else if(e.target.classList.contains('close')) {
        let ele = document.querySelector(".addBoard");
        xClose(ele);
    }
    else if(e.target.classList.contains('info-btn')) {
        console.log(
        e.target.nextSibling.className('.contact-info')

        )
    }
})

phonebook.addEventListener("change", () => {
    let firstname = document.querySelector('input[name=firstname]').value;
    let lastname = document.querySelector('input[name=lastname]').value;
    let contactPic = document.querySelector('input[name=thumbnail]').files[0];
    let middlename = document.querySelector('input[name=middlename]').value;
    let displayFirstname = document.querySelector('.firstname');
    let displayLastname = document.querySelector('.lastname');
    let displayMiddlename = document.querySelector('.middlename');
    let thumbnailDisplay = document.querySelector('.proImg');
    let displayCover = document.querySelector('.top');
    thumbnailDisplay.src = URL.createObjectURL(contactPic);
    displayFirstname.innerHTML = firstname;
    displayLastname.innerHTML = lastname;
    displayMiddlename.innerHTML = middlename;
})


/* <img class="contactThumb" src="${URL.createObjectURL(contactList[i].thumbnail)}">* */
