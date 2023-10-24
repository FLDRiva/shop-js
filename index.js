let publicItem = []
let archiveItem = []

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

function addArchive(optionItem) {
  for (i = 0; i < publicItem.length; i++) {
    if (publicItem[i].arcItem === optionItem) {
      archiveItem.push(publicItem[i])
    }
  }
  
}


addItem('mobile', 2000, 'https://www.google.com/', true)
console.log(publicItem);
// addArchive(true)
console.log(archiveItem);