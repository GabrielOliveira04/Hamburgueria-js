const showAllButton = document.querySelector('.show-all');
const mapButtonAll = document.querySelector(".map-all");
const sumAllButton = document.querySelector(".sum-all")
const filterButton = document.querySelector(".filter-vengan");
const list = document.querySelector('.list')

function format(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}

function showAll(items) {
    
    let newLi = ''

    items.forEach(item => {
        newLi =
          newLi +
          ` <li>
                 <img src= "${item.src}"> 
                 <p>${item.name}</p>
                 <p class="price">${format(item.price)}</p>           
              </li>
        `;
    })
    list.innerHTML = newLi
}

function mapAll() {
    const newPrice = menuOptions.map((item) => ({
      ...item,
        price: item.price * 0.9,
      
    }))
    showAll(newPrice)
    

}

function sumAllItems() {
  const sumAll = menuOptions.reduce((acumulador, currency) => {
    return acumulador + currency.price;
  }, 0);

  list.innerHTML = ` 
        <li class="sum-container">
            <p>A soma de todos os itens do menu:</p>
            <h1 class="price">${format(sumAll)}</h1>
        </li>
    `;
}

function filterjustvegan() {
    const justVegan = menuOptions.filter(item => item.vegan)

    showAll(justVegan)
}


showAllButton.addEventListener('click',() => showAll(menuOptions));
mapButtonAll.addEventListener("click", mapAll);
sumAllButton.addEventListener('click', sumAllItems)
filterButton.addEventListener('click',filterjustvegan)