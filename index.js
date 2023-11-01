let shopItem = {

  publicItem: [
    {id: 3, name: 'phone', price: 700, link: '', arcItem: false},
    {id: 2, name: 'milk', price: 900, link: '', arcItem: false}
  ],
  archiveItem: []

}


function addItem(text, num, img, arcItem) {
  id = +Math.random().toString().slice(2)
  newItem = {
    id: id,
    name: text,
    price: num,
    link: img,
    arcItem: arcItem
  }
  if(newItem.arcItem === true) {
    shopItem.archiveItem.push(newItem)
  } else {
    shopItem.publicItem.push(newItem)
  }
}

function delItem(currentId) {
  for (i = 0; i < shopItem.publicItem.length; i++) {
    if(shopItem.publicItem[i].id === currentId) {
      console.log(shopItem.publicItem[i]);
      delete shopItem.publicItem[i]
    }
  }
}

function refreshItem(currentId, text, price, img,) {
  for (i = 0; i < shopItem.publicItem.length; i++) {
    if (shopItem.publicItem[i].id === currentId ) {
      shopItem.publicItem[i].name = text
      shopItem.publicItem[i].price = price
      shopItem.publicItem[i].link = img
    }
  }
}

function addArchive(currentId) {
  for (i = 0; i < shopItem.publicItem.length; i++) {
    if (shopItem.publicItem[i].id === currentId) {
      shopItem.publicItem[i].arcItem = !shopItem.publicItem[i].arcItem
      shopItem.archiveItem.push(shopItem.publicItem[i])
      shopItem.publicItem.splice(i, 1)
    } 
  }
  for (j = 0; j < shopItem.archiveItem.length; j++) {
    if (shopItem.archiveItem[j].id === currentId) {
      shopItem.archiveItem[j].arcItem = !shopItem.archiveItem[j].arcItem
      shopItem.publicItem.push(shopItem.archiveItem[j])
      shopItem.archiveItem.splice(j, 1)
    }
  }  
}

