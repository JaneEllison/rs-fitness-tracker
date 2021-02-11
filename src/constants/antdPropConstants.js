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
      INPUT_LABEL_ALIGN: 'left',
      BUTTON_TYPE: 'primary',
      BUTTON_HTML_TYPE: 'submit',
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

  TIME: {
    STOPWATCH: {
      ROW_ALIGN: 'bottom',
      ROW_JUSTIFY: 'center',
      BUTTONS_ALIGN: 'center',

      BUTTONS_COMPONENT: {
        ROW_JUSTIFY: 'center',
        AUDIO_ID: 'audioPlayerStopwatch',
        AUDIO_PRELOAD: 'metadata',
        AUDIO_TYPE: 'audio/ogg',

        PAUSE_TOOLTIP_TITLE: 'Pause',
        START_TOOLTIP_TITLE: 'Start',
        STOP_TOOLTIP_TITLE: 'Stop',
        SOUND_ON_TOOLTIP_TITLE: 'Sound on',
        SOUND_OFF_TOOLTIP_TITLE: 'Sound off',
        BUTTON_TYPE: 'primary',
        BUTTON_SHAPE: 'circle',
      },

      COUNT_COMPONENT: {
        DIV_CLASS_NAME: 'wrapper',
        ROW_JUSTIFY: 'center',
        ROW_ALIGN: 'middle',
        SVG_CLASS_NAME: 'spinerIcon',
        SVG_VIEWBOX: '0 0 500 500',
        CIRCLE_CX: '250',
        CIRCLE_CY: '250',
        CIRCLE_R: '100',
        CIRCLE_CLASS_NAME: 'spinner-track',
        CIRCLE_CLASS_NAME_RUNNING: 'spinner',
      },

      LIST_COMPONENT: {
        ROW_JUSTIFY: 'center',
        SPACE_DIRECTION: 'vertical',
        CARD_TITLE: 'Time',
        CARD_SIZE: 'small',
      },
    },
  },
};

export default antdPropConstants;
