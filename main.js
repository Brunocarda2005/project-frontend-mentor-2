let content = document.querySelector('.main-content-data-details');
let contentArray = [];


const fun = async () => {
  
  await fetch('data.json')
    .then((element) => element.json())
    .then((data) => {
      
      
      data.forEach((e) => {
        
        contentArray.push(e.amount);
      
        content.innerHTML += `
          <div class="main-content-data-details-div" style="height:${e.amount}%" id="${e.day}">
            <p class="main-content-data-details-div-p">${e.day}</p>
          </div>`;
        
        
      })
      
      
      
        const dataMoney = document.getElementById('money');
        const contentMoney = document.querySelector('.p');
        const uno = document.getElementById('mon');
        const dos = document.getElementById('tue');
        const tres = document.getElementById('wed');
        const cuatro = document.getElementById('thu');
        const sinco = document.getElementById('fri');
        const seis = document.getElementById('sat');
        const siete = document.getElementById('sun');
        
        
        
        uno.addEventListener('click', () => {
          
          document.getElementById('span').style = 'top: 75%; left: 43%;';
          dataMoney.style = `display: flex; left: -5%; top: ${70 - contentArray[0]}%;`
          contentMoney.innerHTML = `$ ${contentArray[0]}`
          
          
        })
        dos.addEventListener('click' , () => {
          
          document.getElementById('span').style = 'top: 75%; left: 43%;';
          dataMoney.style = `display: flex; left: 8%; top: ${70 - contentArray[1]}%;`
          contentMoney.innerHTML = `$ ${contentArray[1]}`
          
        })
        tres.addEventListener('click', () => {
          
          document.getElementById('span').style = 'top: 75%; left: 43%;';
          dataMoney.style = `display: flex; left: 24%; top: ${70 - contentArray[2]}%;`
          contentMoney.innerHTML = `$ ${contentArray[2]}`
        
        })
        cuatro.addEventListener('click', () => {
          
          document.getElementById('span').style = 'top: 75%; left: 43%;';
          dataMoney.style = `display: flex; left: 38%; top: ${70 - contentArray[3]}%;`
          contentMoney.innerHTML = `$ ${contentArray[3]}`
        
        })
        sinco.addEventListener('click', () => {
          
          document.getElementById('span').style = 'top: 75%; left: 43%;';
          dataMoney.style = `display: flex; left: 52%; top: ${70 - contentArray[4]}%;`
          contentMoney.innerHTML = `$ ${contentArray[4]}`
        
        })
        seis.addEventListener('click', () => {
          
          document.getElementById('span').style = 'top: 75%; left: 43%;';
          dataMoney.style = `display: flex; left: 66%; top: ${70 - contentArray[5]}%;`
          contentMoney.innerHTML = `$ ${contentArray[5]}`
        
        })
        siete.addEventListener('click', () => {
        
          document.getElementById('span').style = 'top: 30%; left: 85%;'
          dataMoney.style = `display: flex; left: 63%; top: ${100 - contentArray[6]}%;`
          contentMoney.innerHTML = `$ ${contentArray[6]}`
        
        })
        
        
        
        
     
     
    })
}

fun()


