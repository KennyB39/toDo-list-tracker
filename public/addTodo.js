

const newTextBoxHandler = async (event) => {
  event.preventDefault();


  const todoText = document.getElementByClass('.w3-input w3-animate-input w3-round-large').value.trim();

  if (todoText) {
    const response = await fetch(`/api/todos`, {
      method: 'POST',
      body: JSON.stringify({ todoText }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/todos');
    } else {
      alert('Failed to create new to-do item');
    }
  }
};


document
  .querySelector('#todoBox')
  .addEventListener("submit", newTextBoxHandler);