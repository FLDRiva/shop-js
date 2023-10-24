let publicItem = [
  {id: 1, name: 'tttt', price: 2, link: '', arcItem: false}
]
let archiveItem = [
  {id: 2, name: 'rrrr', price: 2, link: '', arcItem: true}
]

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

function refreshItem(currentId, text, price, img,) {
  for (i = 0; i < publicItem.length; i++) {
    if (publicItem[i].id === currentId ) {
      publicItem[i].name = text
      publicItem[i].price = price
      publicItem[i].link = img
    }
  }
}

function addArchive(currentId) {
  for (i = 0; i < publicItem.length; i++) {
    if (publicItem[i].id === currentId) {
      publicItem[i].arcItem = !publicItem[i].arcItem
      archiveItem.push(publicItem[i])
      publicItem.splice(i, 1)
    } 
  }
  for (j = 0; j < archiveItem.length; j++) {
    if (archiveItem[j].id === currentId) {
      archiveItem[j].arcItem = !archiveItem[j].arcItem
      publicItem.push(archiveItem[j])
      archiveItem.splice(j, 1)
    }
  }  
}


addArchive(2, true)
console.log(archiveItem);