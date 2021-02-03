import makeQueryToSearchYoutube from '../../../api/makeQueryToSearchYoutube';
import {
  SEARCH_EXERCISE,
  SELECT_EXERCISE_VIDEO,
} from './exerciseSearchConstant';

const initialState = {
  videoMetaInfo: [],
  selectedVideoId: '',
};

const exerciseSearchReducer = (state = initialState, { type, data, id }) => {
  switch (type) {
    case SEARCH_EXERCISE:
      return {
        ...state,
        videoMetaInfo: data.data.items,
        selectedVideoId: data.data.items[0].id.videoId,
      };
    case SELECT_EXERCISE_VIDEO:
      return {
        ...state,
        selectedVideoId: id,
      };
    default:
      return { ...state };
  }
};

export const exerciseSearchAction = (data) => ({
  type: SEARCH_EXERCISE,
  data,
});

export const selectVideoAction = (id) => ({
  type: SELECT_EXERCISE_VIDEO,
  id,
});

export const getSearchDataYoutubeAPI = (query) => async (dispatch) => {
  const response = await makeQueryToSearchYoutube('/search', {
    params: {
      q: query,
    },
  });
  dispatch(exerciseSearchAction(response));
};

export default exerciseSearchReducer;
