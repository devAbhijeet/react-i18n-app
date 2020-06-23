import React from "react";
import { Row, Col, Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;

const Terms = () => {
  const { t } = useTranslation("terms");
  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <Typography>
            <Title>{t("header")}</Title>
            <Paragraph>{t("subHeader")}</Paragraph>
            <Paragraph>
              <ul>
                <li>
                  <div>
                    <span>{t("terms1")}</span>
                    <ul>
                      <li>{t("subHeader")}</li>
                      <li>{t("subHeader")}</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div>
                    <span>{t("terms2")}</span>
                    <ul>
                      <li>{t("subHeader")}</li>
                      <li>{t("subHeader")}</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </Paragraph>
          </Typography>
        </Col>
      </Row>
    </>
  );
};

export default Terms;
