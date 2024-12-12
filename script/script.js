
const containerBody = document.querySelector('.container-body')
const navBtn = document.querySelectorAll('.nav-btn')
let filterKey = ''

navBtn.forEach(button => {
  

  button.addEventListener('click', () => {
    navBtn.forEach(btn => {
      btn.classList.remove('isActiv')
    })
    filterKey = button.getAttribute("data-filter");
    
    button.classList.add('isActiv')
    
    loadData(filterKey)



  })
})

const loadData = (filter) => {
  fetch('/data.json').then((response) => {  
    if(!response.ok) return console.log('Oops! Something went wrong.');
    
    return response.json();
  }).then((data) => {


    if(!filter){
      data.forEach(element => {
        containerBody.innerHTML += `
              <div class="card-body" style="background : ${element.color}">
                <div class="card-icon">
                  <img src="${element.icon}" alt="${element.title}">
                </div>
                  <div class="card-info">
                    <div class="card-info-title">
                      <h3>${element.title}</h3>
                      <p>...</p>
                    </div>
                    <div class="card-info-content">
                      <p>5hrs</p>
                      <p><span>Previous - 7hrs</span></p>
                    </div>
                  </div>
              </div>`
      })
    } else{

      containerBody.innerHTML = ''
      data.forEach(element => {
        containerBody.innerHTML += `
              <div class="card-body" style="background : ${element.color}">
                <div class="card-icon">
                  <img src="${element.icon}" alt="${element.title}">
                </div>
                  <div class="card-info">
                    <div class="card-info-title">
                      <h3>${element.title}</h3>
                      <p>...</p>
                    </div>
                    <div class="card-info-content">
                      <p>${element.timeframes[filter].current} hrs</p>
                      <p><span>Last ${filter} - ${element.timeframes[filter].previous} hrs</span></p>
                    </div>
                  </div>
              </div>` 
      })
    }
  });
}

loadData()