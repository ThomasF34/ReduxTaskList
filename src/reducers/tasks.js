const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

export default tasks