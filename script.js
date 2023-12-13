imageOne=document.getElementById('img1')
imageTwo=document.getElementById('img2')
header=document.querySelector('h1')
const choices=[
    {
        number:1,
        img:'images/dice1.png'
    }
    ,
    {
        number:2,
        img:'images/dice2.png'
    }
    ,
    {
        number:3,
        img:'images/dice3.png'
    }
    ,
    {
        number:4,
        img:'images/dice4.png'
    }
    ,
    {
        number:5,
        img:'images/dice5.png'
    }
    ,
    {
        number:6,
        img:'images/dice6.png'
    }
]

window.addEventListener('load',()=>{
    const obj1=choices[(Math.floor(Math.random()*choices.length))]
    const obj2=choices[(Math.floor(Math.random()*choices.length))]
    const num1=obj1.number
    const playerOneImg=obj1.img
    const num2=obj2.number
    const playerTwoImg=obj2.img
    if(num1==num2){
        header.textContent='Refresh Again !!!'
        imageOne.src=playerOneImg
        imageTwo.src=playerTwoImg
    }
    else if(num1>num2){
        header.textContent="Player 1 wins !"
        imageOne.src=playerOneImg
        imageTwo.src=playerTwoImg
    }
    else{
        header.textContent="Player 2 wins !!"
        imageOne.src=playerOneImg
        imageTwo.src=playerTwoImg
    }
})

