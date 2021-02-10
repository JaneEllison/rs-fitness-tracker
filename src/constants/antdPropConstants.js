const antdPropConstants = {
  EMPTY_PROP: {
    IMAGE_HEIGHT: 80,
  },

  APP_CONTAINER: {
    SPACING_DIRECTION: 'vertical',
    SPACING_SIZE: 'middle',
  },

  STATS_COMPONENT: {
    SPIN_SIZE: 'large',
  },

  HEADER: {
    AUTH_MENU: {
      MODE: 'horizontal',
      THEME: 'dark',
    },

    DROP_DOWN_MENU: {
      TRIGGER: ['hover'],
      PLACEMENT: 'bottomCenter',
      BUTTON_TYPE: 'text',
    },
  },

  NAV_MENU_COMPONENT: {
    MODE: 'horizontal',
    THEME: 'dark',
  },

  WEATHER_COMPONENT: {
    CONTENT_JUSTIFY: 'center',

    MODAL: {
      FOOTER: null,
      TITLE_LEVEL: 1,
      COMPONENT_ALIGN: 'center',
      COMPONENT_JUSTIFY: 'space-around',
      COMPONENT_GUTTER: 15,
      TEMPERATURE_ROW_JUSTIFY: 'center',
      DESCRIPTION_ROW_JUSTIFY: 'center',
      FEELS_LIKE_ROW_JUSTIFY: 'center',
      WIND_ROW_JUSTIFY: 'space-between',
      PRESSURE_ROW_JUSTIFY: 'space-between',
      HUMIDITY_ROW_JUSTIFY: 'space-between',
    },
  },

  ACCOUNT_COMPONENT: {
    MENU: {
      MODE: 'inline',
      THEME: 'light',
    },

    PROFILE_INFO: {
      TITLE: 'User info',
      COLUMN: 1,
    },
  },

  AUTHENTIFICATION: {
    ERROR_MODAL: {
      TITLE: 'Authentification failed!',
    },

    SIGN_IN_COMPONENT: {
      FORM_NAME: 'basic',
      BUTTON_TYPE: 'primary',
      BUTTON_HTML_TYPE: 'submit',
    },

    SIGN_UP_COMPONENT: {
      FORM_NAME: 'basic',
      BUTTON_TYPE: 'primary',
      BUTTON_HTML_TYPE: 'submit',
    },
  },

  GOAL: {
    USER_GOAL: {
      BUTTON_TYPE: 'primary',
      SELECT_OPTION_FILTER_PROP: 'children',
      DESCRIPTION_JUSTIFY: 'end',
    },

    USER_PHYSICS: {
      RADIO_STYLE: 'button',
      BUTTON_TYPE: 'primary',
    },
  },
};

export default antdPropConstants;
