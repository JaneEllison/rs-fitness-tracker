import { connect } from 'react-redux';
import StatsComponent from './StatsComponent';
import {
  userSummarySelector,
  userTimelineSelector
} from './../../../store/Selectors/userSelector';

const mapStateToProps = (state) => ({
  summary: userSummarySelector(state),
  timelineData: userTimelineSelector(state),
});

export default connect(mapStateToProps)(StatsComponent);