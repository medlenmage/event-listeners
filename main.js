const pies = [
  {
    type: 'Apple',
    size: '12"',
    crust: 'lattuce',
    price: 10,
    imgUrl: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2013/07/salted-caramel-apple-pie-recipe-7.jpg',
    owner: 'luke',
    aLaMode: true
  },
  {
    type: 'cherry',
    size: '8"',
    crust: 'lattuce',
    price: 10,
    imgUrl: 'https://bit.ly/2xeAXnF',
    owner: 'Matt',
    aLaMode: true
  },
  {
    type: 'chess',
    size: '16"',
    crust: 'standard',
    price: 3,
    imgUrl: 'https://images.food52.com/5qJW9R0kFGw0GtcV7gIi_MsqymQ=/1200x675/a38d55e1-e09b-4758-b301-449967da4fee--buttermilk_chess_pie.jpg',
    owner: 'Michael',
    aLaMode: true
  }
];


const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerhtml = textToPrint;
}

const buildPies = (pieCollection) => {
  let domString = ''

  for (let i = 0; i < pieCollection.length; i++) {
    domString += `<div class="pie">`
    domString += `<h2>${pieCollection[i].type}</h2>`
    domString += `<img src="${pieCollection[i].imgUrl}" alt="${pieCollection[i].type} pie">`
    domString += `<p>Thid ${pieCollection[i].type} pie is a ${pieCollection[i].size} pie, it's owned ny ${pieCollection[i].owner} and has a crust of ${pieCollection[i].crust}</p>`
    domString += `<h4>${pieCollection[i].price}</h4>`
    domString += `</div>`
    ;
  }

  printToDom('#pieContainer', domString)
}

const init = () => {
  buildPies(pies);
}

init();
