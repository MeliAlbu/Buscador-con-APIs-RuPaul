// fetch("http://nokeynoshade.party/api/queens/all")
// .then(res=> res.json()) //aca le pido que interprete la data como json

// .then(data =>{

//     for ( let i =; i <data.length; i++) {
        
//     }
// })



// lo primero que hacemos es traernos todas las participantes

function fetchParticipantes (url) {
    document.getElementById('loader').classList.add('show');
    
    fetch(`https://www.nokeynoshade.party/api/queens/${url}`)
      .then(res => res.json()) // interprete los datos como json
      .then(data => {
        const ul = document.querySelector('ul#listado-participantes');
        let lis = '';
  
        for (let i = 0; i < data.length; i++) {
          lis += `
            <li>
              <img src="${data[i].image_url}" />
              <p>${data[i].name}</p>
              <p>${data[i].winner ? 'Si' : 'No'}</p>
            </li>
          `;
        }
  
        document.getElementById('loader').classList.remove('show');
        ul.innerHTML = lis;
      });
  }
  
  
  document.getElementById('all').onclick = function () {
    fetchParticipantes('all');
  }
  // http://www.nokeynoshade.party/api/queens/winners
  document.getElementById('winners').onclick = function () {
    fetchParticipantes('winners')
  }
  
  fetchParticipantes('all');