import React from "react";
import { Input, Row, Col, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <Typography>
            <Title>Github user search</Title>
            <Paragraph>
              Welcome to Github user search. The app allows you to query github
              user API. Get started by typing in your query below.
            </Paragraph>
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <Input
            size="large"
            placeholder="Search for a Github user..."
            prefix={<UserOutlined />}
          />
        </Col>
      </Row>
    </>
  );
};

export default Home;
