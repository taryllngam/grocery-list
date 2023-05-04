const inputField = document.getElementById('input')
const addButton = document.getElementById('btn')
const deleteBtn = document.getElementById('delete')
const list = document.getElementById('item-list')

let arrTask = [
]

let taskHolder = {}

const displayTask = (newItem) => {
  const newList = document.createElement('li')
  newList.classList.add('list')
  newList.id = newItem.id

  newList.innerHTML = `
    <p name=${newItem.id} > <input type="checkbox"> ${newItem.task}</p>
    <div class="settings">
    <i class="fa fa-ellipsis-h" aria-hidden="true" id="bars"></i>
    <ul class="task">
        <li 
        class="controls"
        onclick="editTask(${newItem.id})"
        >
            <i class="fa fa-pencil" aria-hidden="true" id="edit"></i>
            Edit
        </li>
        <li
            class="controls"
            onclick="deleteTask(${newItem.id})"
        >
            <i class="fa fa-trash" aria-hidden="true" id="delete"></i>
            Delete
        </li>
    </ul>
    </div>
  `
  list.appendChild(newList)
}

const addItem = () => {
  if (inputField.value <= 0) {
    alert('Please add an item')
    return
  }

  if (taskHolder.id) {
    const [pTagToEdit] = document.getElementsByName(taskHolder.id)

    pTagToEdit.innerHTML = `
     <input type="checkbox"> ${inputField.value}
    `
    inputField.value = ''
    taskHolder = {}
    return
  }

  let newId = 0
  if (arrTask.length <= 0) {
    newId = 1
  } else {
    newId = arrTask[arrTask.length - 1].id + 1
  }

  const newItem = {
    id: newId,
    task: inputField.value
  }

  arrTask.push(newItem)
  inputField.value = ''
  displayTask(newItem)
}

const editTask = (name) => {
  const [pTagToEdit] = document.getElementsByName(name)
  const [taskToEdit] = arrTask.filter((item) => {
    return item.id === name
  })
  inputField.value = pTagToEdit.innerText
  taskHolder = taskToEdit
  console.log(taskToEdit, pTagToEdit)
}

const deleteTask = (id) => {
  document.getElementById(id).remove()

  const newArr = arrTask.filter((item) => {
    return item.id !== id
  })

  arrTask = newArr
}

addButton.addEventListener('click', addItem)

function saveData () {
  localStorage.setItem('data', list.innerHTML)
}
