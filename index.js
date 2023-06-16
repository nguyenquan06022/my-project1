let parallax = document.querySelectorAll('.parallax')
let caption = document.querySelectorAll('.caption')
let caption1 = document.querySelector('.caption1')
let caption2 = document.querySelector('.caption2')
let index = document.querySelectorAll('.index div')
let arrow = document.querySelectorAll('.arrow')
let process = document.querySelectorAll('.process>.item>.percent>span')
let main_content = document.querySelector('.main-content')
let content = document.querySelector('.content')
let content_item = document.querySelectorAll('.content-item')
let content_infor = document.querySelector('.content-infor')
let content_h3 = document.querySelector('.content>h3')
let content_p = document.querySelector('.content>p')
let project = document.querySelector('.project')
let project_h3 = document.querySelector('.project>h3')
let project_p = document.querySelector('.project>p')
let project_main = document.querySelector('.project-main')
let project_item = document.querySelectorAll('.project-item')
let planning = document.querySelector('.planning')
let planning_h3 = document.querySelector('.planning>h3')
let planning_p = document.querySelector('.planning p')
let planning_item = document.querySelectorAll('.planning-item')
let planning_main = document.querySelector('.planning-main')
var checkbox = document.getElementById('check-video')
let iframe = document.querySelector('iframe')
let scroll_top = document.querySelector('.scroll-top')
let ul = document.querySelector('.logo ul')
let li = document.querySelectorAll('.logo ul li')
let w = li[0].offsetWidth
let myInterval
let myTimeout
let id = 6
let people = document.querySelector('.people')
let people_h3 = document.querySelector('.people>h3')
let people_p = document.querySelector('.people>p')
let mainpeople = document.querySelector('.main-people')
let people_item = document.querySelectorAll('.people-item')
let articles = document.querySelector('.articles')
let articles_h3 = document.querySelector('.articles>h3')
let articles_p = document.querySelector('.articles>p')
let map = document.querySelector('.map')
let check_map = document.querySelector('#check-map')
if(check_map.checked) console.log('yes')
let backbtnxx = document.querySelector('.backxx')
let nextbtnxx = document.querySelector('.nextxx')
checkbox.onchange = function() {
  if(!checkbox.checked){
    iframe.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
}
}

window.addEventListener('scroll', function() {
    let scrolled = window.scrollY;
    if(scrolled > window.innerHeight && scrolled+300 < map.offsetTop) scroll_top.classList.add('show-arrow')
    else scroll_top.classList.remove('show-arrow')
    if(articles.offsetTop+100<window.pageYOffset+window.innerHeight){
      articles_h3.classList.add('animation5')
      articles_p.classList.add('animation5')
    }
    if(people.offsetTop+100<window.pageYOffset+window.innerHeight){
      people_h3.classList.add('animation5')
      people_p.classList.add('animation5')
    }
    if(content.offsetTop+100<window.pageYOffset+window.innerHeight){
      content_h3.classList.add('animation5')
      content_p.classList.add('animation5')
    }
    if(project.offsetTop+100<window.pageYOffset+window.innerHeight){
      project_h3.classList.add('animation5')
      project_p.classList.add('animation5')
    }
    if(project_main.offsetTop+project.offsetTop+100<window.pageYOffset+window.innerHeight){
      project_main.classList.add('animation6')
      project_item.forEach(x=> {
        x.classList.add('animation6')
      })
    }
    if(planning.offsetTop+100<window.pageYOffset+window.innerHeight){
      planning_h3.classList.add('animation5')
      planning_p.classList.add('animation5')
    }
    if(planning_main.offsetTop+planning.offsetTop+100<window.pageYOffset+window.innerHeight){
      planning_item.forEach(x=> {
        x.classList.add('animation7')
      })
    }
    if(mainpeople.offsetTop+people.offsetTop+100<window.pageYOffset+window.innerHeight){
      people_item.forEach(x=> {
        x.classList.add('animation4')
      })
    }
    parallax.forEach((x,i)=> {
      let min = x.parentNode.offsetTop
      let max = x.parentNode.offsetTop + x.parentNode.offsetHeight
      if(scrolled+200>min && scrolled < max) x.style.marginTop = `${scrolled - min}px`
      
    })
    process.forEach(item=> {
      let min = window.scrollY
      let max = window.innerHeight + min;
      let area = main_content.offsetTop + content.offsetTop
      if(area < max && area > min){
        item.classList.add('animation3')
        content_item.forEach(x=> {
          x.classList.add('animation4')
        })
        content_infor.classList.add('animation5')
      }
    })
  })
let image_source = [
  {
    link:'photo/architecture6.jpg',
    title1:'INNOVATIVE',
    title2:'ARCHITECTURE',
  },
  {
    link:'photo/architecture2.jpg',
    title1:'BELIEVE IN THE POWER',
    title2:'OF ARCHITECTURE',
  }
]
let i = 0
function setImage () {
  if(i == image_source.length) i = 0
  else if(i == -1) i = 1
  setTimeout(function() {
    parallax[0].classList.add('animation2')
    caption[0].classList.add('animation2')
    parallax[0].src = image_source[i].link
    caption1.innerText = image_source[i].title1
    caption2.innerText = image_source[i].title2
    parallax[0].classList.remove('animation1')
    caption[0].classList.remove('animation1')
    setTimeout(function() {
      parallax[0].classList.remove('animation2')
      caption[0].classList.remove('animation2')
    },700)
  },700)
  index.forEach(x=> {
    if(x.classList.contains('active')) x.classList.remove('active')
  })
  index[i].classList.add('active')
}
setImage()
setInterval(function() {
  i += 1
  parallax[0].classList.add('animation1')
  caption[0].classList.add('animation1')
  setImage()
},10000)

arrow.forEach(x => {
  x.addEventListener('click',function(e) {
    if(x.classList.contains('next')) i+=1
    else i-=1
    parallax[0].classList.add('animation1')
    caption[0].classList.add('animation1')
    setImage()
  })
})

function moveItem(direct) {
    let interval
    if(direct == 'time') interval = 700
    else interval = 100
    ul.style.transition = `${interval/1000}s linear`
    ul.style.transform = `translateX(-${w*id}px)`
    setTimeout(function(){
     checkPos()
    },interval)
}
moveItem('time')
function checkPos() {
    if(li[id].classList.contains('firstlogo')) {
        id = 6
        ul.style.transition = 'none'
        ul.style.transform = `translateX(-${w*id}px)`
    }
    else if(li[id].classList.contains('lastlogo')) {
        id = 11
        ul.style.transition = 'none'
        ul.style.transform = `translateX(-${w*id}px)`
    }
}

myInterval = setInterval(function() {
    nextItem()
    moveItem('time')
},10000)

function nextItem() {
    id++;
}
function backItem() {
    id--;
}
let backbtn = document.querySelector('.backx')
let nextbtn = document.querySelector('.nextx')
nextbtnxx.onclick = function() {
  clearTimeout(myTimeout)
  clearInterval(myInterval)
  nextItem()
  moveItem('click')
  myTimeout = setTimeout(()=>{
      myInterval = setInterval(function() {
          nextItem()
          moveItem('time')
      },2000)
  },10000)
}
nextbtn.onclick = function() {
    clearTimeout(myTimeout)
    clearInterval(myInterval)
    nextItem()
    moveItem('click')
    myTimeout = setTimeout(()=>{
        myInterval = setInterval(function() {
            nextItem()
            moveItem('time')
        },2000)
    },10000)
}
backbtnxx.onclick = function() {
  clearTimeout(myTimeout)
  clearInterval(myInterval)
  backItem()
  moveItem('click')
  myTimeout = setTimeout(()=>{
      myInterval = setInterval(function() {
          nextItem()
          moveItem('time')
      },10000)
  },5000)
}
backbtn.onclick = function() {
    clearTimeout(myTimeout)
    clearInterval(myInterval)
    backItem()
    moveItem('click')
    myTimeout = setTimeout(()=>{
        myInterval = setInterval(function() {
            nextItem()
            moveItem('time')
        },10000)
    },5000)
}
let btn_menu = document.querySelector('.btn-menu')
let sub_menux = document.querySelector('.submenux')
let main_bar = document.querySelector('.mobile-bar-main')
btn_menu.onclick = function() {
  sub_menux.classList.toggle('showsubmenu')
}
let bar_btn = document.querySelector('.mobile-bar span')
bar_btn.onclick = function() {
  main_bar.classList.toggle('height')
  if(!main_bar.classList.contains('height')) sub_menux.classList.remove('showsubmenu')
}