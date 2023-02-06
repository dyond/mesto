let buttonEdit = document.querySelector('.profile__info-edit')
let buttonAdd = document.querySelector('.profile__info-add')
let popupBtn = document.querySelectorAll('.button')

// let popup = document.querySelectorAll('.popup_opened')

let popup = document.querySelectorAll('.popup')

let popupTitle = document.querySelector('.popup__form-title')

let popupEdit = document.querySelector('.popup-edit')
let popupAdd = document.querySelector('.popup-add')

let buttonClose = document.querySelectorAll('.popup__close')

let formElement = document.querySelectorAll('.popup__form-container')


let nameInput = document.querySelector('.popup__form-input_type_name')
let jobInput = document.querySelector('.popup__form-input_type_job')

let placeInput = document.querySelector('.popup__form-input_type_place')
let linkInput = document.querySelector('.popup__form-input_type_link')

let title = document.querySelector('.profile__info-title')
let subtitle = document.querySelector('.profile__info-subtitle')

let body = document.querySelector('.root')

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

let popupContainer = document.querySelectorAll(".popup__container")


// Открытие и закрытие popup 


function togglePopup(index){
  popup[index].classList.toggle("popup_opened");
  buttonClose[index].addEventListener( 'click', ()=> closePopup(index) );
}

buttonEdit.addEventListener( 'click', ()=> togglePopup(0) );
buttonAdd.addEventListener( 'click', ()=> togglePopup(1) );

function closePopup(index){
  popup[index].classList.remove("popup_opened");
}




// Добавление карточки в массив

// New
let formElementProfile = document.querySelector('.popup__form-profile')
let formElementPlace = document.querySelector('.popup__form-place')

// console.log(formElementBtn[0])
// console.log(formElementBtn[1])

formElementProfile.addEventListener('submit', function (evt) {
  evt.preventDefault()
  title.textContent = nameInput.value
  subtitle.textContent = jobInput.value
  formElementBtn[0].addEventListener( 'click', ()=> closePopup(0) );
})

// formElement.forEach.call(formElement,function(el, i){
//   console.log(el)
//   el.addEventListener('submit', function(evt){
//     evt.preventDefault()
//     if ( i === 0 ){
//       title.textContent = nameInput.value
//       subtitle.textContent = jobInput.value

//     }else if (( placeInput.value != '') || ( linkInput.value != '')){

//       initialCards.push({name : placeInput.value, link: linkInput.value})
//       displayCard({name : placeInput.value, link: linkInput.value})
      
//     }

    
//     // popup[i].style.display = 'none'
//     // body.style.overflow = 'visible'   
//   })  
// })


// console.log(buttonClose[0])
// console.log(buttonClose[1])




// function openPopup(i){

//   if(i === 1) {
//     placeInput.value = ''
//     linkInput.value = ''
//   }

//   popup[i].style.display = 'block'
//   body.style.overflow = 'hidden'

//   // New one


//   closePopup(i)
// }

// function closePopup(i){
//   buttonClose.forEach.call(buttonClose, function(el){
//     el.addEventListener('click', function(){
//       popup[i].style.display = 'none'
//       body.style.overflow = 'visible'
//       if ( i === 0){
//         nameInput.value = title.textContent
//         jobInput.value = subtitle.textContent
//       }
//     })
//   })
// }

// popupBtn.forEach.call(popupBtn,function(el,i){
//   el.addEventListener('click', function(){
//     openPopup(i)
    
//   })
// })

// --------------------------------------

const cardContainer = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card-template").content;


const createCard = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link
  };
});

function display() {
  createCard.forEach(displayCard);
}

function displayCard({ name, link }){
  const placeElement = cardTemplate.querySelector(".card").cloneNode(true);
  placeElement.querySelector(".card__title").textContent = name;
  placeElement.querySelector(".card__image").src = link;

  // Animate image

  let imageClose = document.querySelector('.popup__image-close')
  let imageBlock = document.querySelector('.popup__image-block')

  let popupImage = document.querySelector('.popup__image')
  let popupCaption = document.querySelector('.popup__caption')

  imageClose.addEventListener('click',function(){
    imageBlock.classList.remove("popup__image-block_opened")
    body.style.overflow = 'visible'
  })

  let cardImage = placeElement.querySelector(".card__image")
  let cardTitle = placeElement.querySelector(".card__title")

  cardImage.addEventListener('click', function(){
    imageBlock.classList.add("popup__image-block_opened")
    body.style.overflow = 'hidden'
    // Получаем значание картинки и названия места
    let cardImageSrc = cardImage.src
    let cardTitleSrc = cardTitle.textContent

    popupImage.src = cardImageSrc
    popupCaption.textContent = cardTitleSrc
  })


  // Like button function
  let likeButton = placeElement.querySelector('.card__button')
  // console.log(likeButton)

  likeButton.addEventListener('click', function(){
    if (likeButton.querySelector('img').getAttribute('src') === 'images/vector_3.svg'){
      likeButton.querySelector('img').src = 'images/vector_4.svg'
    }else{
      likeButton.querySelector('img').src = 'images/vector_3.svg'
    }
  })

  // Delete button function
  let deleteButton = placeElement.querySelector('.button__delete')

  deleteButton.addEventListener('click', function(){
    placeElement.remove()
  })



  cardContainer.prepend(placeElement);
}

display();















