const buttonEdit = document.querySelector('.profile__info-edit')
const popupEdit = document.querySelector('.popup-edit') 

const buttonAdd = document.querySelector('.profile__info-add')
const popupAdd = document.querySelector('.popup-add')

const formElementProfile = document.querySelector('.popup__form-profile')
const formElementPlace = document.querySelector('.popup__form-place')

const closeBtns = document.querySelectorAll('.popup__close')

const nameInput = document.querySelector('.popup__form-input_type_name')
const jobInput = document.querySelector('.popup__form-input_type_job')

const placeInput = document.querySelector('.popup__form-input_type_place')
const linkInput = document.querySelector('.popup__form-input_type_link')

const title = document.querySelector('.profile__info-title')
const subtitle = document.querySelector('.profile__info-subtitle')


const imageClose = document.querySelector('.popup__image-close')
const imageBlock = document.querySelector('.popup-block')

const popupImage = document.querySelector('.popup__image')
const popupCaption = document.querySelector('.popup__caption')

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

// Открытие и закрытие popup

function openPopup(popup){
  popup.classList.add('popup_opened')
}

buttonEdit.addEventListener('click', function(){
  nameInput.value = title.textContent
  nameInput.placeholder = title.textContent

  jobInput.value = subtitle.textContent
  jobInput.placeholder = subtitle.textContent

  openPopup(popupEdit)
})


// imageBlock.addEventListener('click', () => openPopup(popupAdd))

buttonAdd.addEventListener('click', () => openPopup(popupAdd))

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

closeBtns.forEach((button) => {
  const popup = button.closest('.popup')
  button.addEventListener('click', () => closePopup(popup))
});


// const openBtns = document.querySelectorAll('.button')
// console.log(openBtns)


// openBtns.forEach((button)=>{
//   // const popup = button.closest('.popup')
//   button.addEventListener('click', () => console.log(button))
// })

// function togglePopup(index){
  
//   popups[index].classList.remove('hidden');
//   setTimeout(function () {
//     popups[index].classList.remove('visuallyhidden');
//   }, 20);

//   closeBtns[index].addEventListener( 'click', ()=> closePopup(index) );
// }

// buttonEdit.addEventListener( 'click', ()=> togglePopup(0) );
// buttonAdd.addEventListener( 'click', ()=> togglePopup(1) );

// function closePopup(index){

//   popups[index].classList.add('visuallyhidden');    
//   popups[index].addEventListener('transitionend', function(e) {
//     popups[index].classList.add('hidden');
//     }, {
//     capture: false,
//     once: true,
//     passive: false
//   });
// }

// Обработка обновления профиля и добавления карточек

formElementProfile.addEventListener('submit', function (evt) {
  evt.preventDefault()
  title.textContent = nameInput.value
  subtitle.textContent = jobInput.value
  const popup = formElementProfile.closest('.popup')
  closePopup(popup)
})

formElementPlace.addEventListener('submit', function (evt) {
  evt.preventDefault()
  displayCard({name : placeInput.value, link: linkInput.value}) 
  const popup = formElementPlace.closest('.popup')
  closePopup(popup)
  evt.target.reset()
})


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
  placeElement.querySelector(".card__image").alt = name;

  // Открытие изображения 


  // imageClose.addEventListener('click',function(){

  // imageBlock.classList.add('visuallyhidden');    
  // imageBlock.addEventListener('transitionend', function(e) {
  //   imageBlock.classList.add('hidden');
  //   }, {
  //   capture: false,
  //   once: true,
  //   passive: false
  // });

  // })

  const cardImage = placeElement.querySelector(".card__image")
  const cardTitle = placeElement.querySelector(".card__title")

  cardImage.addEventListener('click', function(){

    openPopup(imageBlock)
    
    // Получаем значание картинки и названия места
    const cardImageSrc = cardImage.src
    const cardTitleSrc = cardTitle.textContent
    
    popupImage.src = cardImageSrc
    popupImage.alt = cardTitleSrc
    popupCaption.textContent = cardTitleSrc
  })

  // cardImage.addEventListener('click', function(){
  //   imageBlock.classList.remove('hidden');
  //   setTimeout(function () {
  //     imageBlock.classList.remove('visuallyhidden');
  //   }, 20);

  //   // Получаем значание картинки и названия места
  //   const cardImageSrc = cardImage.src
  //   const cardTitleSrc = cardTitle.textContent

  //   popupImage.src = cardImageSrc
  //   popupCaption.textContent = cardTitleSrc
  // })

  // Кнопка лайка
  const likeButton = placeElement.querySelector('.card__button')
  
  likeButton.addEventListener('click', function(){
    if (likeButton.classList.contains('card__button_active')){
      console.log('tu')
    }
    console.log(likeButton)
  })

  // likeButton.addEventListener('click', function(){
  //   if (likeButton.querySelector('img').getAttribute('src') === 'images/vector_3.svg'){
  //     likeButton.querySelector('img').src = 'images/vector_4.svg'
  //   }else{
  //     likeButton.querySelector('img').src = 'images/vector_3.svg'
  //   }
  // })

  // Кнопка удаления
  const deleteButton = placeElement.querySelector('.button__delete')

  deleteButton.addEventListener('click', function(){
    placeElement.remove()
  })



  cardContainer.prepend(placeElement);
}

display();