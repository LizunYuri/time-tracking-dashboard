const userData = [
    {
      "title": "Work",
      "color" : "hsl(15, 100%, 70%)",
      "icon" : "images/icon-work.svg",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "color" : "hsl(195, 74%, 62%)",
      "icon" : "images/icon-play.svg",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "color" : "hsl(348, 100%, 68%)",
      "icon" : "images/icon-study.svg",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "color" : "hsl(145, 58%, 55%)",
      "icon" : "images/icon-exercise.svg",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "color" : "hsl(264, 64%, 52%)",
      "icon" : "images/icon-social.svg",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "color" : "hsl(43, 84%, 65%)",
      "icon" : "images/icon-self-care.svg",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]
  


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

if(!filter){
    userData.forEach(element => {
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
}
else{

    containerBody.innerHTML = ''

    userData.forEach( element => {
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
}


document.addEventListener('DOMContentLoaded', () => {
    loadData()
})
