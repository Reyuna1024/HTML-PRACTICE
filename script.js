let burger ="https://www.burgerking.ee/images/optimized/products/dbl-whopper-cheese-desktop-0046a8bbd7923b1a32245608c5aa8731.png";
let chicken="https://images.eatthismuch.com/img/1329773_tabitharwheeler_89e471bd-14b5-4f76-b783-4bc69edb5e93.jpg";
let cburger="https://asset.japantoday.com/img/store/5b/a6/c4fbdddfdc92c15cdbf6657821368a020b3f/Screen-Shot-2022-12-14-at-8.21.01.png";
let pizzahut="https://wallpaperaccess.com/full/3189291.jpg";

let foods =[burger, chicken, cburger,pizzahut];


function changeImg()
{
    let index = Math.floor(Math.random()*4);
    console.log(index);
    document.getElementById('pizza').src=foods[index];
}

function background(){
    document.body.style.backgroundColor = "black";
}