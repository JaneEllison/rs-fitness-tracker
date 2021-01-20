import React, { useState } from 'react';
import { List, Drawer, Button } from 'antd';

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
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <List
            style={{ width: 200, marginLeft: -15 }}
            itemLayout="horizontal"
            size="small"
            dataSource={videosData}
            renderItem={({ snippet, id }, index) => (
              <List.Item
                onClick={() => selectVideo(id, onVideoSelected)}
                key={index}
                extra={
                  <img
                    width={200}
                    alt="logo"
                    src={snippet.thumbnails.medium.url}
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
