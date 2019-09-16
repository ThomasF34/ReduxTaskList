const defaultStore = {
  taskLists: [{
    id: 'To do quickly',
    tasks: [
      { text: 'Something done', completed: true },
      { text: 'Homework', completed: false }
    ]
  },
  {
    id: 'September',
    tasks: [
      { text: 'Back to school', completed: true },
      { text: 'Survive', completed: false }
    ]
  }
  ]
}

module.exports = { defaultStore }