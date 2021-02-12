export default {
  DAYS_LIST: [
    {
      id: 0,
      name: 'Sunday',
    },
    {
      id: 1,
      name: 'Monday',
    },
    {
      id: 2,
      name: 'Tuesday',
    },
    {
      id: 3,
      name: 'Wednesday',
    },
    {
      id: 4,
      name: 'Thursday',
    },
    {
      id: 5,
      name: 'Friday',
    },
    {
      id: 6,
      name: 'Saturday',
    },
  ],

  EXERCISE_ADD_COMPONENT: {
    SEARCH_PLACEHOLDER: 'Add exercise',
    SEARCH_BUTTON_TEXT: 'Add',
    SEARCH_TYPE: 'text',
    SEARCH_NAME: 'text',
  },

  EXERCISE_FORM_COMPONENT: {
    SELECT_DAY_HEADING: 'Select day: ',
    EXERCISE_HEADING: 'Exercise: ',
  },

  EXERCISE_ACTION_COMPONENT: {
    CARD_SIZE: 'small',
    DELETE_ICON_CLASS_NAME: 'delete-icon',
    COMPLETE_ICON_CLASS_NAME: 'complete-icon',
    EDIT_ICON_CLASS_NAME: 'edit-icon',
  },

  EXERCISE_UPDATE_COMPONENT: {
    SUBMIT_ID_MULTIPLIER: 10000,
    INPUT_TYPE: 'text',
    INPUT_NAME: 'text',
    INPUT_PLACEHOLDER: 'Update your exercise',
    BUTTON_TYPE: 'primary',
    BUTTON_TEXT: 'UPDATE',
  },

  EXERCISE_CONTROL_COMPONENT: {
    CARD_SIZE: 'small',
  },

  SEARCH_EXERCISES_INPUT_COMPONENT: {
    SEARCH_TYPE: 'text',
    SEARCH_PLACEHOLDER: 'Search exercise',
    SEARCH_ENTER_BUTTON: 'SEARCh',
  },

  SEARCH_EXERCISES_COMPONENT: {
    ROW_JUSTIFY: 'space-between',
  },

  SEARCH_EXERCISES_PLAYER_COMPONENT: {
    GET_IFRAME_SRC: (id) => `https://www.youtube.com/embed/${id}`,
  },

  SEARCH_EXERCISES_VIDEO_COMPONENT: {
    BUTTON_CLASS_NAME: 'search-btn_list',
    BUTTON_TYPE: 'primary',
    BUTTON_TEXT: 'VIDEO LIST',
    DRAWER_PLACEMENT: 'right',
    LIST_ITEM_LAYOUT: 'horizontal',
    LIST_SIZE: 'small',
    IMG_WIDTH: 155,
    IMG_ALT: 'logo',
  },

  TIME: {
    STOPWATCH: {
      BUTTONS_COMPONENT: {
        DONE_TRACK_SRC: './music/done.mp3',
      },
    },
  },
};
