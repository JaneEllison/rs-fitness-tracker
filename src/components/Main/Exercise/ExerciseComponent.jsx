import React, { useState } from 'react';
import ExerciseControlComponent from './ExerciseSchedule/ExerciseControlComponent';
import { useSelector } from 'react-redux';
import ExerciseListComponent from './ExerciseSchedule/ExerciseListComponent';
import SearchExercises from './ExerciseSearch/SearchExercises';
import youtubeApi from '../../../api/makeQueryToSearchYoutube';

const ExerciseComponent = () => {
  const exerciseData = useSelector((state) => state.exerciseReducer);
  const selectedDay = useSelector((state) => state.selectedDayReducer);
  const [search, setSearch] = useState([
    {
      videoMetaInfo: [],
      selectedVideoId: null,
    },
  ]);

  const components = Object.entries(exerciseData).map(([day, data], index) => {
    return (
      <ExerciseControlComponent
        selectedDay={selectedDay}
        key={index}
        day={day}
        exercises={data.exercises}
      />
    );
  });

  const onSearch = async (key) => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: key,
      },
    });

    console.log(response);
  };

  return (
    <div className="exercise-wrapper">
      <h1>Exercise schedule</h1>
      {components}
      <ExerciseListComponent />
      <SearchExercises onSubmit={onSearch} />
    </div>
  );
};

export default ExerciseComponent;
