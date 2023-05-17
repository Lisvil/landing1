window.addEventListener('scroll', e => {
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother) 
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content'
})
let progress = document.querySelector('.nav__progress_active');
let images = [
  ['img/img1.jpg', 

  'img/img2.jpg'
  ], 

  ['img/img3.jpg', 

  'img/img4.jpg'], 

  ['img/img5.jpg', 

  'img/img6.jpg'], 
  
  ['img/img7.jpg', 
  
  'img/img8.jpg'] 
]
let reviews = [
  {
    name: 'Anna Gana',
    position: 'General Director',
    photo: 'https://images.pexels.com/photos/11432781/pexels-photo-11432781.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    title: 'Great work',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra sit amet aliquam id. '
  },
  {
    name: 'Jonathan Borba',
    position: 'Art director',
    photo: 'https://images.pexels.com/photos/10951449/pexels-photo-10951449.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'I will definitely come back again',
    comment: 'Sagittis eu volutpat odio facilisis mauris sit amet. Molestie nunc non blandit massa enim nec dui nunc. Sagittis orci a scelerisque purus semper eget duis. '
  },
  {
    name: 'Ryan Klaus',
    position: 'Product owner',
    photo: 'https://images.pexels.com/photos/15792248/pexels-photo-15792248.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    title: 'Good service',
    comment: 'Nam libero justo laoreet sit amet. Integer vitae justo eget magna fermentum iaculis. Non consectetur a erat nam at lectus. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Hac habitasse platea dictumst vestibulum.'
  },
  {
    name: 'Tetiana Bozhakovska',
    position: 'Art director',
    photo: 'https://images.pexels.com/photos/16577586/pexels-photo-16577586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Great job',
    comment: 'Facilisi nullam vehicula ipsum a arcu. Non consectetur a erat nam at lectus urna duis convallis. Pulvinar pellentesque habitant morbi tristique senectus et netus et.'
  },
  {
    name: 'Yury Oliveira',
    position: 'Sales manager',
    photo: 'https://images.pexels.com/photos/15598315/pexels-photo-15598315.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    title: 'I am very satisfied',
    comment: 'Sagittis orci a scelerisque purus. Egestas dui id ornare arcu odio ut. Viverra maecenas accumsan lacus vel facilisis volutpat. Rhoncus dolor purus non enim praesent elementum facilisis leo. In nisl nisi scelerisque eu ultrices vitae. '
  },
  {
    name: 'Ivan Samkov',
    position: 'UI/UX designer',
    photo: 'https://images.pexels.com/photos/16564746/pexels-photo-16564746.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    title: 'I recommend them',
    comment: 'Ante metus dictum at tempor commodo ullamcorper a. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In est ante in nibh mauris. Euismod in pellentesque massa placerat duis. Imperdiet massa tincidunt nunc pulvinar. '
  }
]
let next_btn = document.querySelector('.nav__button_next')
let prev_btn = document.querySelector('.nav__button_prev')
let nav_info = document.querySelector('.nav__info')
let img1 = document.querySelector('#img1')
let img2 = document.querySelector('#img2')

let counter = 0
next_btn.addEventListener('click', () => {
  // img1.classList.remove("slider_animation")
  // img2.classList.remove("slider_animation")
  if(counter < 3) {
    counter++
  } else {
    counter = 0
  }
  img1.src = images[counter][0]
  img2.src = images[counter][1]
  img1.classList.add("slider_animation")
  img2.classList.add("slider_animation")

  progress.style.width = 25 * (counter + 1) + '%'
  nav_info.textContent = (counter + 1) + ' / 4'
  img1.addEventListener('animationend', () => {
    img1.classList.remove("slider_animation")
    img2.classList.remove("slider_animation")
  })
})
prev_btn.addEventListener('click', () => {
  if (counter > 0) {
    counter--
  } else {
    counter = 3
  }
  img1.src = images[counter][0]
  img2.src = images[counter][1]
  img1.classList.add("slider_animation")
  img2.classList.add("slider_animation")
  progress.style.width = 25 * (counter + 1) + '%'
  nav_info.textContent = (counter + 1) + ' / 4'
  img1.addEventListener('animationend', () => {
    img1.classList.remove("slider_animation")
    img2.classList.remove("slider_animation")
  })
})

let comment_photos = document.querySelectorAll('.review__user_photo')
let comment_title = document.querySelectorAll('.review__title')
let comment_text = document.querySelectorAll('.review__text')
let comment_user = document.querySelectorAll('.review__user_name')
let comment_user_position = document.querySelectorAll('.review__user_position')

let comment_arrow_prev = document.querySelector('.review__arrow_prev')
let comment_arrow_next = document.querySelector('.review__arrow_next')

let comment_counter = 0

function showComments() {
  comment_photos[0].style.backgroundImage = `url(${reviews[comment_counter].photo})`
  comment_photos[1].style.backgroundImage = `url(${reviews[comment_counter + 1].photo})`
  
  comment_title[0].textContent = reviews[comment_counter].title
  comment_title[1].textContent = reviews[comment_counter + 1].title
  
  comment_text[0].textContent = reviews[comment_counter].comment
  comment_text[1].textContent = reviews[comment_counter + 1].comment
  
  comment_user[0].textContent= reviews[comment_counter].name
  comment_user[1].textContent = reviews[comment_counter + 1].name
  
  comment_user_position[0].textContent= reviews[comment_counter].position
  comment_user_position[1].textContent= reviews[comment_counter + 1].position
}

showComments()

comment_arrow_next.addEventListener('click', () => {
  comment_counter += 2
  if(comment_counter === reviews.length) {
    comment_counter = 0
  } 
  showComments()
})
comment_arrow_prev.addEventListener('click', () => {
  comment_counter -= 2
  if(comment_counter < 0) {
    comment_counter = reviews.length - 2
  } 
  showComments()
})
