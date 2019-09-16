export const addTask = (text, idTaskList) => ({
  type: 'ADD_TASK',
  payload: {
    text,
    idTaskList
  }
})