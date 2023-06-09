const todos = [
    {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
    },
    {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
    },
    {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
    },
    {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
    }
]

const  todosRefactor = refactorTodos(todos)

/**
 * Refactors an array of todos objects into a new array of todos objects with
 * renamed keys
 * @param {Array} todos - The array of todos objects to be refactored
 * @returns {Array} - The new array of todos objects with renamed keys
 */
const refactorTodos = (todos) => {
    const newTodos = [];

    // Iterate over each todo object in the array and rename keys
    todos.forEach(({ userId, id, title, completed }) => {
        const newObject = {};

        newObject.id_usuario = userId;
        newObject.id_todo = id;
        newObject.titulo_todo = title;
        newObject.status_todo = completed;

        newTodos.push(newObject);
    });

    return newTodos;
}