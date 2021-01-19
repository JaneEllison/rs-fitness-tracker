import React from 'react';
import placeholderPicture from '../../../assets/nopic.png';
import { Descriptions, Row, Col, Image } from 'antd';
import profileSelector from '../../../store/Selectors/profileSelector';
import { useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';

const AccountComponent = () => {
  const profile = useSelector(profileSelector);

  const {email, avatarURL, displayName} = profile;
  const firebase = useFirebase();

  return (
    <Row>
      <Col span={12}>
        <Descriptions title="User Info" column={1} bordered>
          <Descriptions.Item label="User name">{displayName}</Descriptions.Item>
          <Descriptions.Item label="E-mail">{email}</Descriptions.Item>
          <Descriptions.Item label="Weight">75 kg</Descriptions.Item>
          <Descriptions.Item label="Height">175 sm</Descriptions.Item>
          <Descriptions.Item label="Age">25 years</Descriptions.Item>
          <Descriptions.Item label="Gender">Male</Descriptions.Item>
          <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
          <Descriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1<br />
          </Descriptions.Item>
        </Descriptions>
      </Col>
      <Col span={12}>
        <Image width={200} src={avatarURL} fallback={placeholderPicture}/>
      </Col>
    </Row>

  );
};

export default AccountComponent;
