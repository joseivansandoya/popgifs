const initialState = {
  data: null,
  loading: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_BEGIN':
      return {
        ...state,
        data: null,
        loading: true,
        error: false
      }

    case 'LIST_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false
      }

    case 'LIST_ERROR':
      return {
        ...state,
        data: null,
        loading: false,
        error: true
      }

    default: return state
  }
}
