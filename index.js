function Start() {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      HttRequest(JSON.parse(this.responseText))
    }
  }
  xhr.open('GET', `https://anapioficeandfire.com/api/characters/583`);
  xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  xhr.send();
}


function HttRequest(data) {
    $('.name').text(`${data.name}`)
  $('.data').html(`
                     <li><span>Gender: </span>${data.gender}</li>
                     <li><span>Culture: </span>${data.culture}</li>
                     <li><span>Born: </span>${data.born}</li>
                     <li><span>Died: </span>${data.died}</li>
                     <li><span>Titles: </span>${data.titles}</li>
                     <li><span>Aliasees: </span>${data.aliases}</li>
                     <li><span>Father: </span>${data.father}</li>
                     <li><span>Mather: </span>${data.mother}</li>
                     <li><span>Spouse: </span>${data.spouse}</li>
                     <li><span>Books: </span>${data.books}</li>
                     <li><span>PovBooks: </span>${data.povBooks}</li>
                     <li><span>Played By: </span>${data.playedBy}</li>
        `)
}
Start()