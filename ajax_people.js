//In Class ---> AjJAX + DOM Manipulation + Event Driven JavaScript Exercize

let data;

let req = new XMLHttpRequest();

req.onreadystatechange = function () {
  if (req.readyState === 1) {
    console.log('Established server connection')
  }
  else if (req.readyState === 2) {
    console.log('Request recieved by server')
  }
  else if (req.readyState === 3) {
    console.log('Server is processign request')
  }
  else if (req.readyState === 4) {
    console.log('Response recieved from server')
    if (req.status === 200) {
      console.log('data loaded');
      data = JSON.parse(req.response);
      writeData();
    }
    else {
      console.log('Error' + req.status);
    }
  }
  else {
    console.log('oops, something went wrong')
  }
}

req.open('GET', 'https://tallgrassschool.com/cohort_6/data/people.json');

req.send();


function writeData() {
  let container = document.getElementById('container');
  container.innerHTML = '';
  //container.innerHTML = req.response;
  //console.log(data);
  //console.log(typeof(data));
  for (let i = 0; i < data.people.length; i++) {
    //console.log(i)
    //console.log(data.people);

    let div = document.createElement('div');
    div.setAttribute('class', 'myDiv');
    container.appendChild(div);

    let img = document.createElement('img');
    img.setAttribute('src', data.people[i].imgUrl);
    div.appendChild(img);

    // let h1 = document.createElement('h1');
    // h1.innerHTML = data.people[i].name;
    // div.appendChild(h1);

    let nameContainer = document.createElement('div');
    let nameLabel = document.createElement('label');
    let nameInput = document.createElement('input');
    nameLabel.innerText = "Name: ";
    nameInput.value = data.people[i].name;
    nameContainer.appendChild(nameLabel);
    nameContainer.appendChild(nameInput);
    div.appendChild(nameContainer);

    // let h2One = document.createElement('h2');
    // h2One.innerHTML = data.people[i].role;
    // div.appendChild(h2One);

    let roleContainer = document.createElement('div');
    let roleLabel = document.createElement('label');
    let roleInput = document.createElement('input');
    roleLabel.innerText = "Role: ";
    roleInput.value = data.people[i].role;
    roleContainer.appendChild(roleLabel);
    roleContainer.appendChild(roleInput);
    div.appendChild(roleContainer);

    // let h2Two = document.createElement('h2');
    // h2Two.innerHTML = data.people[i].hometown;
    // div.appendChild(h2Two);

    let hometownContainer = document.createElement('div');
    let hometownLabel = document.createElement('label');
    let hometownInput = document.createElement('input');
    hometownLabel.innerText = "Hometown: ";
    hometownInput.value = data.people[i].hometown;
    hometownContainer.appendChild(hometownLabel);
    hometownContainer.appendChild(hometownInput);
    div.appendChild(hometownContainer);

    // let h2Three = document.createElement('h2');
    // h2Three.innerHTML = 'Loves ' + data.people[i].favoriteHoliday;
    // div.appendChild(h2Three);

    let favoriteHolidayContainer = document.createElement('div');
    let favoriteHolidayLabel = document.createElement('label');
    let favoriteHolidayInput = document.createElement('input');
    favoriteHolidayLabel.innerText = "Favorite Holiday: ";
    favoriteHolidayInput.value = data.people[i].favoriteHoliday;
    favoriteHolidayContainer.appendChild(favoriteHolidayLabel);
    favoriteHolidayContainer.appendChild(favoriteHolidayInput);
    div.appendChild(favoriteHolidayContainer);

    let b = document.createElement('button');
    b.innerText = "Delete";
    div.appendChild(b);

    b.addEventListener('click', function() {
      //console.log(data.people);
      data.people.splice(i, 1);
      //console.log(data.people);
      writeData();
    })

    let bSave = document.createElement('button');
    bSave.innerText = "Save";
    div.appendChild(bSave);

    let msg = document.createElement('p');
    msg.className = 'msg';
    msg.innerText = "Data Saved!"
    div.appendChild(msg);


    bSave.addEventListener('click', function() {
      data.people[i].name = nameInput.value;
      data.people[i].role = roleInput.value;
      data.people[i].hometown = hometownInput.value;
      data.people[i].favoriteHoliday = favoriteHolidayInput.value;
      console.log(data.people);
      msg.classList.add('msg_visible')
      setTimeout(function() {
        msg.classList.remove('msg_visible');
      }, 1500)
    })
  }
}








//TOP DIV

let newName = document.getElementById('name');
let newRole = document.getElementById('role');
let newHometown = document.getElementById('hometown');
let newFavoriteHoliday = document.getElementById('holiday');
let newImg = document.getElementById('newImg');
let bTwo = document.getElementById("add");

bTwo.addEventListener('click', function() {
    //console.log(newPerson);
    let newPerson = {
      name: newName.value,
      role: newRole.value,
      hometown: newHometown.value,
      imgUrl: newImg.value,
      favoriteHoliday: newFavoriteHoliday.value,
    };
    console.log(newPerson);
    data.people.push(newPerson);
    //console.log(data.people);
    //console.log(data);
    newName.value = '';
    newRole.value = '';
    newHometown.value = '';
    newFavoriteHoliday.value = '';
    newImg.value = '';
    writeData();

  });
