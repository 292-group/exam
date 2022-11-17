let number;
let block;
let count = 0;
let page = 1;
let countToDownload = 30;
let pageData

loadPage();

function loadNav() {
  for (let i = 0; i < countToDownload; i++) {
    block = document.createElement('li');
    if (pageData[i].name===null || pageData[i].name==='')
      block.innerHTML = (`NotHasName`);
    else
      block.innerHTML = (`${pageData[i].name}`);
    block.className = (`${i+count}`);
    document.querySelector('.sov-character-list').appendChild(block);
  }
  count += countToDownload;
}

document.querySelector('.sov-character-list ').onclick = (event) => {
  clickEvent(event.target);
}

function loadPage() {
  httpRequest('GET', `https://anapioficeandfire.com/api/characters?page=${page}&pageSize=${countToDownload}`)

  function httpRequest(method, url) {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        pageData = JSON.parse(this.responseText);
        loadNav();
      }
    }

    xhttp.open(method, url);
    xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
  }
  page++;
}

function clickEvent(element) {
  if (number)
    document.getElementsByClassName(`${number}`).item(0).classList.remove('active');
  number = parseInt((element.className));
  element.classList.add('active');
  number = `${number}`;
}

document.querySelector('.nav_bar').addEventListener('scroll',()=>{
  if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
    loadPage();
  }
})
