import { GIPHY_API_KEY, endpoint } from './../giphy-config';

export const fetchList = (query = '') => async dispatch => {
  dispatch(listBegin());
  try {
    const search_type = query !== '' ? `search?q=${query}&` : 'trending?';
    const search_url = `${endpoint}/${search_type}api_key=${GIPHY_API_KEY}&limit=6`;
    const response = await fetch(search_url);
    const data = await response.json();
    dispatch(listSuccess(data));
  }
  catch (err) {
    dispatch(listError());
  }
}

const listBegin = () => ({
  type: 'LIST_BEGIN'
})

const listSuccess = imagesList => ({
  type: 'LIST_SUCCESS',
  payload: imagesList
})

const listError = () => ({
  type: 'LIST_ERROR'
})
