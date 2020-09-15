const actionTypeChangeInfo = 'CHANGE_INFO'
const actionTypeAddInfo = 'ADD_INFO'

const reducerCheck = (state, action) => {
  switch (action.type) {
    case actionTypeChangeInfo:
      let t = [...state]
      t[action.payload.id - 1].check = !t[action.payload.id - 1].check
      console.log(t)
      return t
      
    case actionTypeAddInfo:
      return [...state, action.payload]
    default:
      return state
  }
}

export default reducerCheck