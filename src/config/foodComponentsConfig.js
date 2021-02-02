const foodComponentsConfig = {
  rowAlignments: {
    CENTER: 'center',
    SPACE_BETWEEN: 'space-between',
  },
  foodSearchComponent: {
    INPUT_TYPE: 'text',
  },
  foodActionsComponent: {
    TIME_PICKER_FORMAT: 'HH:mm',
    ADD_BUTTON_TEXT: 'Add to ration',
    ADD_BUTTON_TYPE: 'primary',
  },
  foodTableComponent: {
    FOOD_TABLE_SIZE: 'middle',
    FOOD_TABLE_SCROLL: { x: 1000, y: 400 },
    FOOD_TABLE_PAGINATION: false,
    FOOD_TABLE_BORDERED: true,
    FOOD_TABLE_STICKY: true,
    FOOD_TABLE_WIDE_CELL_WIDTH: 300,
    FOOD_TABLE_STANDARD_CELL_WIDTH: 100,
    summaryComponent: {
      SUMMARY_COMPONENT_FIX_LEFT_CLASS: 'ant-table-cell-fix-left',
      SUMMARY_COMPONENT_FIX_LEFT_LAST_CLASS: 'ant-table-cell-fix-left-last',
      SUMMARY_COMPONENT_FIX_RIGHT_CLASS: 'ant-table-cell-fix-right',
      SUMMARY_COMPONENT_FIX_RIGHT_LAST_CLASS: 'ant-table-cell-fix-left-right',
    },
  },
  emptyComponent: {
    EMPTY_COMPONENT_IMAGE: 'https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg',
    EMPTY_COMPONENT_MESSAGE: 'Search for food to see its nutrients!',
  },
};

export default foodComponentsConfig;
