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

};

export default antdPropConstants;
