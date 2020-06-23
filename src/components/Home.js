import React, { useState } from "react";
import {
  Input,
  Row,
  Col,
  Typography,
  Skeleton,
  Card,
  Avatar,
  Statistic,
  notification
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const Home = () => {
  const [userName, setUserName] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const API_URL = "https://api.github.com/users";
  const { t } = useTranslation("home");

  const openNotificationWithIcon = type => {
    notification[type]({
      message: t("error.header"),
      description: t("error.description")
    });
  };

  const handleInputChange = e => {
    if (e) {
      setUserName(e.target.value.trim());
    }
  };

  const handleInputSubmit = e => {
    if (userName) {
      setIsFetching(true);
      fetch(`${API_URL}/${userName}`)
        .then(res => res.json())
        .then(data => {
          setIsFetching(false);
          setUserInfo(data);
        })
        .catch(err => {
          openNotificationWithIcon("error");
          setIsFetching(false);
          setUserInfo(null);
        });
    }
  };

  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <Typography>
            <Title>{t("header")}</Title>
            <Paragraph>{t("subHeader")}</Paragraph>
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <Input
            allowClear
            size="large"
            placeholder={t("inputPlaceholder")}
            onChange={handleInputChange}
            onPressEnter={handleInputSubmit}
            prefix={<UserOutlined />}
          />
        </Col>
      </Row>
      {(userInfo || isFetching) && (
        <Row>
          <Col span={12} offset={6}>
            <Card style={{ width: "100%", marginTop: 16 }} hoverable>
              <Skeleton loading={isFetching} avatar active>
                <Meta
                  avatar={<Avatar src={userInfo && userInfo.avatar_url} />}
                  title={userInfo && userInfo.name}
                  description={userInfo && userInfo.location}
                  style={{ textTransform: "capitalize" }}
                />
                <Row gutter={16} style={{ marginTop: 20, marginLeft: 40 }}>
                  <Col span={12}>
                    <Statistic
                      title={t("stats.repos")}
                      value={userInfo && userInfo.public_repos}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title={t("stats.gists")}
                      value={userInfo && userInfo.public_gists}
                    />
                  </Col>
                </Row>
                <Row gutter={16} style={{ marginLeft: 40 }}>
                  <Col span={12}>
                    <Statistic
                      title={t("stats.followers")}
                      value={userInfo && userInfo.followers}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title={t("stats.following")}
                      value={userInfo && userInfo.following}
                    />
                  </Col>
                </Row>
              </Skeleton>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Home;
