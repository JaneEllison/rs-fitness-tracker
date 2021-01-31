import React, { useState } from 'react';
import { List, Drawer, Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import style from '../ExerciseSearch.module.css';

const SearchExercisesVideo = ({ data, onVideoSelected }) => {
  const [visible, setVisible] = useState(false);

  const selectVideo = (videoIdObj, onVideoSelected) => {
    onVideoSelected(videoIdObj.videoId);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const constructVideo = (videosData, onVideoSelected) => {
    return (
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
                onClick={() => selectVideo(id, onVideoSelected)}
                key={index}
                extra={
                  <img
                    width={155}
                    alt="logo"
                    src={snippet.thumbnails.default.url}
                  />
                }
              >
                <List.Item.Meta title={snippet.channelTitle} />
                {snippet.title}
              </List.Item>
            )}
          />
        </Drawer>
      </div>
    );
  };

  return <>{constructVideo(data, onVideoSelected)}</>;
};

export default SearchExercisesVideo;
