const initialState = {
  data: null,
  loadingData: false,
  errorData: false,
  related: null,
  loadingRelated: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'DETAIL_BEGIN':
      return {
        ...state,
        data: null,
        loadingData: true
      }

    case 'DETAIL_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loadingData: false,
        errorData: false
      }

    case 'DETAIL_ERROR':
      return {
        ...state,
        data: null,
        loadingData: false,
        errorData: true
      }

    case 'RELATED_BEGIN':
      return {
        ...state,
        related: null,
        loadingRelated: true,
        errorRelated: false
      }

    case 'RELATED_SUCCESS':
      return {
        ...state,
        related: action.payload,
        loadingRelated: false,
        errorRelated: false
      }
    
    default: return state
  }
}
