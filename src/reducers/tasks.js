const taskLists = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      /*       return [
              ...state,
              {
                text: action.text,
                completed: false
              }
            ] */
      return state.map(list =>
        list.id === action.payload.idTaskList
          ? { id: list.id, tasks: [...list.tasks, { text: action.payload.text, completed: false }] }
          : list)
    default:
      return state
  }
}

export default taskLists