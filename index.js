let publicItem = []
let archiveItem = [
  {id: 3, name: 'milk1', price: 50, link: '', checkItem: false, arcItem: true}
]

function addItem(text, num, img, arcItem) {
  id = +Math.random().toString().slice(2)
  newItem = {
    id: id,
    name: text,
    price: num,
    link: img,
    checkItem: false,
    arcItem: arcItem
  }
  if(newItem.arcItem === true) {
    archiveItem.push(newItem)
  } else {
    publicItem.push(newItem)
  }
}

function delItem(num) {
  for (i = 0; i < publicItem.length; i++) {
    if(publicItem[i].id === num) {
      delete publicItem[id]
    }
  }
}

function refreshItem(num, text, price, img,) {
  for (i = 0; i < publicItem.length; i++) {
    if (publicItem[i].id === num ) {
      publicItem[i].name = text
      publicItem[i].price = price
      publicItem[i].link = img
    }
  }
}

function addArchive(num, optionItem) {
  for (i = 0; i < publicItem.length; i++) {
    if (publicItem[i].arcItem === optionItem && publicItem[i].id === num) {
      archiveItem.push(publicItem[i])
      delete publicItem[i]
    } 
  }
  for (j = 0; j < archiveItem.length; j++) {
    if (archiveItem[j].arcItem !== optionItem && archiveItem[j].id === num) {
      publicItem.push(archiveItem[j])
      delete archiveItem[j]
    }
  }  
}

addArchive(3, false)
console.log(publicItem);
console.log(archiveItem);