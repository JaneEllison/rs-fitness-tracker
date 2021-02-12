import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Tooltip, Button } from 'antd';
import { CaretRightOutlined, PauseOutlined } from '@ant-design/icons';
import { IoIosSquare, IoMdVolumeHigh, IoMdVolumeOff } from 'react-icons/io';
import antdPropConstants from '../../../../../../constants/antdPropConstants';
import exerciseComponentConstants from '../../../../../../constants/exerciseComponentConstants';
import style from '../../Time.module.css';

const {
  TIME: {
    STOPWATCH: {
      BUTTONS_COMPONENT: {
        DONE_TRACK_SRC,
      },
    },
  },
} = exerciseComponentConstants;

const {
  TIME: {
    STOPWATCH: {
      BUTTONS_COMPONENT: {
        ROW_JUSTIFY,
        AUDIO_ID,
        AUDIO_PRELOAD,
        AUDIO_TYPE,
        PAUSE_TOOLTIP_TITLE,
        START_TOOLTIP_TITLE,
        STOP_TOOLTIP_TITLE,
        SOUND_ON_TOOLTIP_TITLE,
        SOUND_OFF_TOOLTIP_TITLE,
        BUTTON_TYPE,
        BUTTON_SHAPE,
      },
    },
  },
} = antdPropConstants;

const StopwatchButtonsComponent = ({
  stopwatchSeconds,
  setIsRunningStopwatch,
  changeSeconds,
  deletePreviousValue,
  addValuesOfSeconds,
  isRunningStopwatch,
  currentTrack,
  setCurrentTrack,
  getRandomAudio,
}) => {
  let audioPlayer;

  const [isSoundOn, setIsSoundOn] = useState(true);

  const initPlayer = () => {
    audioPlayer = document.getElementById(AUDIO_ID);
  };

  const handlePlayAudio = () => {
    if (audioPlayer.paused || audioPlayer.ended) {
      setTimeout(() => {
        audioPlayer.play();
      }, 0);
    } else {
      setTimeout(() => {
        audioPlayer.pause();
      }, 0);
    }
  };

  useLayoutEffect(() => {
    initPlayer();
  });

  const startStopwatch = () => {
    setIsRunningStopwatch(true);
    setTimeout(() => {
      getRandomAudio();
      handlePlayAudio();
    }, 0);
  };

  const pauseStopwatch = () => {
    handlePlayAudio();
    setIsRunningStopwatch(false);
  };

  const stopStopwatch = () => {
    deletePreviousValue();
    addValuesOfSeconds();
    setIsRunningStopwatch(false);
    changeSeconds(0);
    setCurrentTrack(DONE_TRACK_SRC);
    initPlayer();
    setTimeout(() => {
      audioPlayer.play();
    }, 0);
  };

  const mutedSound = () => {
    audioPlayer.muted = isSoundOn;
    setIsSoundOn(!isSoundOn);
  };

  return (
    <Row justify={ROW_JUSTIFY}>
      <audio
        id={AUDIO_ID}
        preload={AUDIO_PRELOAD}
        src={currentTrack}
        type={AUDIO_TYPE}
      />
      {
        (isRunningStopwatch)
          ? (
            <Tooltip title={PAUSE_TOOLTIP_TITLE}>
              <Button
                type={BUTTON_TYPE}
                shape={BUTTON_SHAPE}
                icon={<PauseOutlined />}
                onClick={pauseStopwatch}
              />
            </Tooltip>
          )
          : (
            <Tooltip title={START_TOOLTIP_TITLE}>
              <Button
                type={BUTTON_TYPE}
                shape={BUTTON_SHAPE}
                icon={<CaretRightOutlined />}
                onClick={startStopwatch}
              />
            </Tooltip>
          )
      }
      <Tooltip title={STOP_TOOLTIP_TITLE} className={style.timeBtn}>
        <Button
          type={BUTTON_TYPE}
          shape={BUTTON_SHAPE}
          icon={<IoIosSquare />}
          onClick={stopStopwatch}
          disabled={!stopwatchSeconds}
        />
      </Tooltip>
      {
        (isSoundOn)
          ? (
            <Tooltip title={SOUND_ON_TOOLTIP_TITLE} className={style.timeBtn}>
              <Button
                type={BUTTON_TYPE}
                shape={BUTTON_SHAPE}
                icon={<IoMdVolumeHigh />}
                onClick={mutedSound}
              />
            </Tooltip>
          )
          : (
            <Tooltip title={SOUND_OFF_TOOLTIP_TITLE} className={style.timeBtn}>
              <Button
                type={BUTTON_TYPE}
                shape={BUTTON_SHAPE}
                icon={<IoMdVolumeOff />}
                onClick={mutedSound}
              />
            </Tooltip>
          )
      }
    </Row>
  );
};

StopwatchButtonsComponent.propTypes = {
  stopwatchSeconds: PropTypes.number.isRequired,
  setIsRunningStopwatch: PropTypes.func.isRequired,
  changeSeconds: PropTypes.func.isRequired,
  deletePreviousValue: PropTypes.func.isRequired,
  addValuesOfSeconds: PropTypes.func.isRequired,
  isRunningStopwatch: PropTypes.bool.isRequired,
  currentTrack: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  getRandomAudio: PropTypes.func.isRequired,
};

export default StopwatchButtonsComponent;
