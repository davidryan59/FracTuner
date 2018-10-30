import { validateMixChildDefnId } from '../validations'

const cmptMixN = (state, action) => {

  switch (action.type) {
    case 'SET':
      return {
        ...state,
        childDefnId: validateMixChildDefnId(action.childDefnId)
      }
    default:
      return state
  }

}

export default cmptMixN
