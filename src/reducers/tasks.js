const taskLists = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return state.map(list =>
        list.id === action.payload.idTaskList
          ? { id: list.id, tasks: [...list.tasks, { text: action.payload.text, completed: false }] }
          : list)
    case 'ADD_TASK_LIST':
      return [
        ...state,
        { id: action.payload.name, tasks: [] }
      ]
    default:
      return state
  }
}

export default taskLists