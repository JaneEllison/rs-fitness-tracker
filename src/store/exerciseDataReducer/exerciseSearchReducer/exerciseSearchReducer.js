import makeQueryToSearchYoutube from '../../../api/makeQueryToSearchYoutube';
import {
  SEARCH_EXERCISE,
  SELECT_EXERCISE_VIDEO,
} from './exerciseSearchConstant';

const initialState = {
  videoMetaInfo: [
    {
      kind: 'youtube#searchResult',
      etag: 'AtViPItBQEfNOMY-h2Qn02NslF0',
      id: { kind: 'youtube#video', videoId: 'hY7m5jjJ9mM' },
      snippet: {
        publishedAt: '2017-05-31T09:30:02Z',
        channelId: 'UC9obdDRxQkmn_4YpcBMTYLw',
        title: 'CATS will make you LAUGH YOUR HEAD OFF',
        channelTitle: 'Tiger FunnyWorks',
        description:
          'Cats are amazing creatures because they make us laugh all the time!',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/hY7m5jjJ9mM/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/hY7m5jjJ9mM/mqdefault.jpg',
            width: 320,
            height: 180,
          },
        },
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'caUquwPO_pM5ltp-ZuZ7SnKJsZU',
      id: { kind: 'youtube#video', videoId: 'tpiyEe_CqB4' },
      snippet: {
        publishedAt: '2017-05-31T09:30:02Z',
        channelId: 'UCzn2gx8zzhF0A4Utk8TEDNQ',
        title: 'Cute and Funny Cat Videos to Keep You Smiling!',
        channelTitle: 'Rufus',
        description:
          'hi hoomans! im rufus p goodboy and dis my yootoob channel!',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/tpiyEe_CqB4/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/tpiyEe_CqB4/mqdefault.jpg',
            width: 320,
            height: 180,
          },
        },
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'AtViPItBQEfNOMY-h2Qn02NslF0',
      id: { kind: 'youtube#video', videoId: 'hY7m5jjJ9mM' },
      snippet: {
        publishedAt: '2017-05-31T09:30:02Z',
        channelId: 'UC9obdDRxQkmn_4YpcBMTYLw',
        title: 'CATS will make you LAUGH YOUR HEAD OFF',
        channelTitle: 'Tiger FunnyWorks',
        description:
          'Cats are amazing creatures because they make us laugh all the time!',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/hY7m5jjJ9mM/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/hY7m5jjJ9mM/mqdefault.jpg',
            width: 320,
            height: 180,
          },
        },
      },
    },
  ],
  selectedVideoId: 'hY7m5jjJ9mM',
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
