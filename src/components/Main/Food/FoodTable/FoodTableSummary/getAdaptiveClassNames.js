import checkOffsetWidth from '../../../../../utils/checkOffsetWidth';
import adaptiveBreakPoints from '../../../../../constants/adaptiveBreakPoints';
import style from './SummaryCellFix.module.css';
import foodComponentsConfig from '../../../../../config/foodComponentsConfig';

const getAdaptiveClassNames = () => {
  const {BREAKPOINT_MD} =adaptiveBreakPoints;
  const {
    SUMMARY_COMPONENT_FIX_LEFT_CLASS,
    SUMMARY_COMPONENT_FIX_LEFT_LAST_CLASS,
    SUMMARY_COMPONENT_FIX_RIGHT_CLASS,
    SUMMARY_COMPONENT_FIX_RIGHT_LAST_CLASS,
  } = foodComponentsConfig.foodTableComponent.summaryComponent;
  if(checkOffsetWidth(BREAKPOINT_MD)) {
    return {classesLeft: [], classesRight: []}
  } else {
    return {
      classesLeft: [
        style.summaryCellStickyLeft,
        SUMMARY_COMPONENT_FIX_LEFT_CLASS,
        SUMMARY_COMPONENT_FIX_LEFT_LAST_CLASS
      ],
      classesRight: [
        style.summaryCellStickyRight,
        SUMMARY_COMPONENT_FIX_RIGHT_CLASS,
        SUMMARY_COMPONENT_FIX_RIGHT_LAST_CLASS
      ]
    }
  }
};

export default getAdaptiveClassNames;
