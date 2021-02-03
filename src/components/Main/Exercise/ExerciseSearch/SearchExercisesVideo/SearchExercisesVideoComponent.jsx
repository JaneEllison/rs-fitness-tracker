import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List, Drawer, Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import style from '../ExerciseSearch.module.css';

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
      <Button className="search-btn_list" type="primary" onClick={showDrawer}>
        VIDEO LIST
      </Button>
      <Drawer
        closeIcon={<CloseCircleOutlined />}
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <List
          className={style.video_list}
          itemLayout="horizontal"
          size="small"
          onClick={onClose}
          dataSource={videosData}
          renderItem={({ snippet, id }, index) => (
            <List.Item
              onClick={() => selectVideo(id, callback)}
              key={index}
              extra={(
                <img
                  width={155}
                  alt="logo"
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
  /* eslint-disable react/forbid-prop-types */
  data: PropTypes.array.isRequired,
  onVideoSelected: PropTypes.func.isRequired,
};

export default SearchExercisesVideo;
