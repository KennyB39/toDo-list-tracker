

const newTodoHandler = async (event) => {
  event.preventDefault();


  const todoText = document.querySelector('#add-todo').value.trim();

  if (todoText) {
    const response = await fetch(`/api/todos`, {
      method: 'POST',
      body: JSON.stringify({ todoText }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/todos');
    } else {
      alert('Failed to create new to-do item');
    }
  }
};


document
  .querySelector('.todo-form')
  .addEventListener("submit", newTextBoxHandler);