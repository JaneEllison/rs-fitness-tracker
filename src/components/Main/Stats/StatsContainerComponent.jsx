import { connect } from 'react-redux';
import StatsComponent from './StatsComponent';
import {
  userSummarySelector,
  userGoalSelector,
  userHistoryDatesSelector,
  userHistoryWeightSelector,
  userHistoryCaloriesSelector,
  userHistoryWorkoutTimeSelector,
} from './../../../store/Selectors/userSelector';

const mapStateToProps = (state) => ({
  summary: userSummarySelector(state),
  goal: userGoalSelector(state),
  dateHistory: userHistoryDatesSelector(state),
  weightHistory: userHistoryWeightSelector(state),
  caloriesHistory: userHistoryCaloriesSelector(state),
  workoutsTime: userHistoryWorkoutTimeSelector(state),
});

export default connect(mapStateToProps)(StatsComponent);