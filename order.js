// TODO СОЗДАНИЕ ЗАКАЗА +
//  TODO ДОБАВЛЕНИЕ ТОВАРА В ЗАКАЗ +
//  TODO УДАЛЕНИЕ ТОВАРА ИЗ ЗАКАЗА +
// TODO ИЗМЕНЕНИЕ СТАТУСА ЗАКАЗА +


// статусы для заказов
// исполнен, не исполнен, отменен, в ожидание

const orders = [
  {
    date: new Date(),
    status: 'исполнен',
    id: 7,
    userId: 2,
    products: [
      {
        itemID: 3,
        count: 10
      },
    ]
  },
  {
    date: new Date(),
    status: 'отменен',
    id: 8,
    userId: 2,
    products: [
      {
        itemID: 3,
        count: 10
      }
    ]
  },
]

function addOrder(currentId, currentUserId, totalCount) {
  newOrder = {
    date: new Date(),
    status: 'в ожидание',
    id: 5,
    userId: currentUserId,
    products: [
      {
        itemID: currentId,
        count: totalCount
      },
      
    ]
  }
  orders.push(newOrder)
}

function addProduct(currentId, currentItemId, totalCount) {
  for (add of orders) {
    if (add.id === currentId) {
      changeItem = {
        itemID: currentItemId,
        count: totalCount
      }
      add.products.push(changeItem)
    }
  }  
}

function delProduct(currentId, currentItemId) {
  for (del = 0; del < orders.length; del++) {
    if (orders[del].id === currentId) {
      for (i = 0; i < orders[del].products.length; i++) {
        if (orders[del].products[i].itemID === currentItemId) {
          orders[del].products.splice(i)
        }
      }
    }
  }
}

function changeStatus(currentId, stat) {
  for (i = 0; i < orders.length; i++) {
    if (orders[i].id === currentId) {
      orders[i].status = stat
    }
  }
}




