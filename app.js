document.addEventListener('DOMContentLoaded', ()=>{
    const cardArray =[
        {
            name: 'Catboy',
            img : 'img/catboyrun.png'
        },
        {
            name: 'Catboy',
            img : 'img/catboyrun.png'
        },
        {
            name: 'Ululet',
            img : 'img/owlettefly.png'
        },
        {
            name: 'Ululet',
            img : 'img/owlettefly.png'
        },
        {
            name: 'Geko',
            img : 'img/gekko.png'
        },
        {
            name: 'Geko',
            img : 'img/gekko.png'
        },
        {
            name: 'Luna',
            img : 'img/lunagirl.png'
        },
        {
            name: 'Luna',
            img : 'img/lunagirl.png'
        },
        {
            name: 'Romeo',
            img : 'img/romeo.png'
        },
        {
            name: 'Romeo',
            img : 'img/romeo.png'
        },
        {
            name: 'Ninja nocturno',
            img : 'img/nightninja2.png'
        }, 
        {
            name: 'Ninja nocturno',
            img : 'img/nightninja2.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#resultado')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard(){
        for(let i=0; i<cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'img/pjmasksaction.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
   function checkForMatch(){
       var cards = document.querySelectorAll('img')
       const optionOneId = cardsChosenId[0]
       const optionTwoId = cardsChosenId[1]
       if (cardsChosen[0] === cardsChosen[1]){
           //alert('Muy bien')
          // cards[optionOneId].setAttribute('src', 'img/white.png')
           //cards[optionTwoId].setAttribute('src', 'img/white.png')
           cardsWon.push(cardsChosen)
       } else{
           cards[optionOneId].setAttribute('src', 'img/pjmasksaction.png')
           cards[optionTwoId].setAttribute('src', 'img/pjmasksaction.png')
           //alert('intenta de nuevo')
       }
       cardsChosen = []
       cardsChosenId = []
       resultDisplay.textContent = cardsWon.length
       if (cardsWon.length === cardArray.length/2){
           resultDisplay.textContent = "Felicitaciones"
       }
   } 

    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }
    createBoard();



})