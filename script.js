const inputField = document.getElementById("input");
const addButton = document.getElementById("btn");
const editBtn = document.getElementById("edit");
const deleteBtn = document.getElementById("delete");
const list = document.getElementById("item-list");

let arrTask = [];

const taskTemplate = () => {
  return arrTask.map(
    (work) => `
    <li class="list">
        <!-- <label for="1"> -->
            <!-- <input type="checkbox" id="1"> -->
            <p> <input type="checkbox" id="1"> ${work.task} from ${work.time} - 08:30</p>
        <!-- </label> -->
        <div class="settings">
        <i class="fa fa-ellipsis-h" aria-hidden="true" id="bars"></i>
        <ul class="task">
            <li class="controls">
                <i class="fa fa-pencil" aria-hidden="true" id="edit"></i>
                Edit
            </li>
            <li
                class="controls"
                onclick="deleteTask(${work.id})"
            >
                <i class="fa fa-trash" aria-hidden="true" id="delete"></i>
                Delete
            </li>
        </ul>
        </div>
    </li>`
  );
};

const addItem = () => {
  if (inputField.value <= 0) {
    alert("Please add an item");
    return;
  }

  let newId = 0;
  if (arrTask.length <= 0) {
    newId = 1;
  } else {
    newId = arrTask[arrTask.length - 1].id + 1;
  }

  const newItem = {
    id: newId,
    task: inputField.value,
    time: new Date().toLocaleTimeString(),
  };

  arrTask.push(newItem);
  inputField.value = "";
  list.innerHTML = taskTemplate(arrTask);
};

const editTask = (id) => {
    //
}

const deleteTask = (id) => {
    const newArr = arrTask.filter((item) => {
        return item.id !== id;
    });

    arrTask = newArr

    list.innerHTML = taskTemplate(newArr);
}

addButton.addEventListener("click", addItem);
