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
    owner: 'matt',
    aLaMode: true
  },
  {
    type: 'chess',
    size: '16"',
    crust: 'standard',
    price: 3,
    imgUrl: 'https://images.food52.com/5qJW9R0kFGw0GtcV7gIi_MsqymQ=/1200x675/a38d55e1-e09b-4758-b301-449967da4fee--buttermilk_chess_pie.jpg',
    owner: 'michael',
    aLaMode: true
  }
];


// 1. make 4 buttons 1 for each instructor
// 2 when you click on a button do the filter thing
//   a. console log out a button click
//   b. filter collection
// 3. Reprint the dom with the filtered collection



const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildPies = (pieCollection) => {
  let domString = '';

  for (let i = 0; i < pieCollection.length; i++) {
    const aLaModeText = (pieCollection[i].aLaMode) ? ' with ice cream' : 'without ice cream'
    
    domString += `
      <div class="pie">
        <h2>${pieCollection[i].type}</h2>
        <img src="${pieCollection[i].imgUrl}" alt="image of ${pieCollection[i].type} pie">
        <p>This ${pieCollection[i].type} pie is a ${pieCollection[i].size} pie, it's owned by ${pieCollection[i].owner}, <br> and has a ${pieCollection[i].crust} crust, and is served ${aLaModeText}</p>
        <h4>Price: ${pieCollection[i].price}</h4>
      </div>
    `;
  }

  printToDom('#pieContainer', domString);
}

const filterPiesEvent= (event) => {
  const buttonId = event.target.id;

  const tempPieCollection = [];

  if (buttonId === all) {
    buildPies(pies);
    return
  }
  
  for (let i = 0; i < pies.length; i++) {
    if (pies[i].owner === buttonId) {
      tempPieCollection.push(pies[i]);
    }
    
  }
  buildPies(tempPieCollection);
}


const clickEvents = () => {
  document.querySelector('#luke').addEventListener('click', filterPiesEvent);
  document.querySelector('#michael').addEventListener('click', filterPiesEvent);
  document.querySelector('#matt').addEventListener('click', filterPiesEvent);
  document.querySelector('#all').addEventListener('click', init);
}



const init = () => {
  buildPies(pies);
  clickEvents();
}

init();


// new buttons
