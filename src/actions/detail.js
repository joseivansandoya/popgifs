import { GIPHY_API_KEY, endpoint } from './../giphy-config';

export const fetchDetailAndRelated = id => async dispatch => {
  dispatch(detailBegin());
  try {
    let search_url = `${endpoint}/${id}?api_key=${GIPHY_API_KEY}`;
    const response = await fetch(search_url);
    const data = await response.json();
    dispatch(detailSuccess(data));

    // get related gifs
    dispatch(relatedBegin());
    search_url = `${endpoint}/trending?api_key=${GIPHY_API_KEY}&limit=6`;
    const relatedResponse = await fetch(search_url);
    const relatedData = await relatedResponse.json();
    dispatch(relatedSuccess(relatedData));
  }
  catch (err) {
    dispatch(detailError());
  }
}

const detailBegin = () => ({
  type: 'DETAIL_BEGIN'
})

const detailSuccess = detail => ({
  type: 'DETAIL_SUCCESS',
  payload: detail
})

const detailError = () => ({
  type: 'DETAIL_ERROR'
})

const relatedBegin = () => ({
  type: 'RELATED_BEGIN'
})

const relatedSuccess = related => ({
  type: 'RELATED_SUCCESS',
  payload: related
})
