import { Row, Col, Typography, Modal } from 'antd';
import style from '../Weather.module.css';
const { Title } = Typography;

const WeatherModalComponent = ({ weatherInfo, setIsModalVisible, isModalVisible }) => {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return(
    <>
      <Modal
        className={style.weatherModal}
        title={`${weatherInfo.name}, ${weatherInfo.countryName}`}
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        centered={true}
        footer={null}
        >
        <Row gutter={15} align="middle" justify="space-around">
          <Col sm={{span: 12}} xs={{span: 17}}>
            <img 
              src={weatherInfo.icon}
              alt="weather-icon"
              className={style.weatherModalImg}
            />
          </Col>
          <Col sm={{span: 12}} xs={{span: 17}}>
            <Row justify="center">
              <Title 
                level={1}
                style={{ marginBottom: '3px' }}
              >
                {`${weatherInfo.temperature} °C`}
              </Title>
            </Row>
            <Row justify="center">
              <p className={style.weatherModalSubtitle}>
                {weatherInfo.discription}
              </p>
            </Row>
            <Row justify="center"> 
              <p>Feels like:</p>
              <p>{`${weatherInfo.temperatureFeelsLike} °C`}</p>
            </Row>
            <Row justify="space-between">
              <p>Wind:</p>
              <p>{`${weatherInfo.wind} km/h`}</p>
            </Row>
            <Row justify="space-between">
              <p>Precipitation:</p>
              <p>{`${weatherInfo.precip} %`}</p>
            </Row>
            <Row justify="space-between">
              <p>Humidity:</p>
              <p>{`${weatherInfo.humidity} %`}</p>
            </Row>
          </Col>
        </Row>
      </Modal>
    </>
  )
}

export default WeatherModalComponent;