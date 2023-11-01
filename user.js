// TODO СПРОЕКТИРОВАТЬ МОДЕЛЬ ПОЛЬЗОВАТЕЛЯ +
// TODO СОЗДАНИЕ ПОЛЬЗОВАТЕЛЯ +
// TODO УДАЛЕНИЕ +
// TODO РЕДАКТИРОВАНИЕ +
// TODO ПОИСК +

const user = [
  { 
    id: 1,
    name: 'Andrey',
    surname: 'Revin',
    email: 'example@gmail.com',
    adress: 'Izhevsk',
    phone: '+7852460000',
  },
  { 
    id: 2,
    name: 'Andrey',
    surname: 'Revin',
    email: 'example@gmail.com',
    adress: 'Izhevsk',
    phone: '+7852460000',
  }
]

function addUser(name, surname, email, adress, phone) {
  newUser = {
    id: 2,
    name: name,
    surname: surname,
    email: email,
    adress: adress,
    phone: phone
  }
  user.push(newUser)
}

function delUser(currentId) {
  for (i = 0; i < user.length; i++) {
    if (user[i].id === currentId) {
      user.splice(i, 1)
    }
  }
}

function editUser(currentId, name, surname, email, adress, phone) {
  for (i = 0; i < user.length; i++) {
    if (user[i].id === currentId) {
      user[i].name = name || user[i].name
      user[i].surname = surname || user[i].surname
      user[i].email = email || user[i].email
      user[i].adress = adress || user[i].adress
      user[i].phone = phone || user[i].phone
    }
  }
}

function searchUser(currentId) {
  for (i = 0; i < user.length; i++) {
    if (user[i].id === currentId) {
      return user[i]
    }
  }
}

