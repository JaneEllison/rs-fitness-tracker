import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List, Drawer, Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import style from '../ExerciseSearch.module.css';
import exerciseComponentConstants from '../../../../../constants/exerciseComponentConstants';

const {
  SEARCH_EXERCISES_VIDEO_COMPONENT: {
    BUTTON_CLASS_NAME,
    BUTTON_TYPE,
    BUTTON_TEXT,
    DRAWER_PLACEMENT,
    LIST_ITEM_LAYOUT,
    LIST_SIZE,
    IMG_ALT,
    IMG_WIDTH,
  },
} = exerciseComponentConstants;

const selectVideo = (obj, cb) => {
  cb(obj.videoId);
};

const SearchExercisesVideo = ({ data, onVideoSelected }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const constructVideo = (videosData, callback) => (
    <div>
      <Button
        className={BUTTON_CLASS_NAME}
        type={BUTTON_TYPE}
        onClick={showDrawer}
      >
        {BUTTON_TEXT}
      </Button>
      <Drawer
        closeIcon={<CloseCircleOutlined />}
        placement={DRAWER_PLACEMENT}
        onClose={onClose}
        visible={visible}
      >
        <List
          className={style.video_list}
          itemLayout={LIST_ITEM_LAYOUT}
          size={LIST_SIZE}
          onClick={onClose}
          dataSource={videosData}
          renderItem={({ snippet, id }, index) => (
            <List.Item
              onClick={() => selectVideo(id, callback)}
              key={index}
              extra={(
                <img
                  width={IMG_WIDTH}
                  alt={IMG_ALT}
                  src={snippet.thumbnails.default.url}
                />
                )}
            >
              <List.Item.Meta title={snippet.channelTitle} />
              {snippet.title}
            </List.Item>
          )}
        />
      </Drawer>
    </div>
  );

  return <>{constructVideo(data, onVideoSelected)}</>;
};

SearchExercisesVideo.propTypes = {
  data: PropTypes.array.isRequired,
  onVideoSelected: PropTypes.func.isRequired,
};

export default SearchExercisesVideo;
