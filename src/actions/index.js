export const addTask = (text, idTaskList) => ({
  type: 'ADD_TASK',
  payload: {
    text,
    idTaskList
  }
})

export const addTaskList = (name) => ({
  type: 'ADD_TASK_LIST',
  payload: {
    name
  }
})