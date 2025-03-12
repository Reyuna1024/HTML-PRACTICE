let burger ="https://www.eatthis.com/wp-content/uploads/sites/4/2023/03/burger-king-triple-whopper.jpg?resize=473";
let chicken="https://images.eatthismuch.com/img/1329773_tabitharwheeler_89e471bd-14b5-4f76-b783-4bc69edb5e93.jpg";
let cburger="https://asset.japantoday.com/img/store/5b/a6/c4fbdddfdc92c15cdbf6657821368a020b3f/Screen-Shot-2022-12-14-at-8.21.01.png";

let foods =[burger, chicken, cburger];



function changeImg()
{
    let index = Math.floor(Math.random()*4);
    document.getElementById('pizza').src=foods[index];
}