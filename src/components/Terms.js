import React from "react";
import { Row, Col, Typography } from "antd";

const { Title, Paragraph } = Typography;

const Terms = () => {
  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <Typography>
            <Title>Terms of Use</Title>
            <Paragraph>
              Welcome to Github Search (the “Platform”). This Platform is owned
              and operated&nbsp;by Open source Pvt Ltd, a company incorporated
              in India, having its registered office at Mumbai, India. The
              product is a cloud-based Platform designed to
              facilitate&nbsp;github user search.
            </Paragraph>
            <Paragraph>
              <ul>
                <li>
                  <div>
                    <span>Terms 1</span>
                    <ul>
                      <li>
                        Welcome to Github Search (the “Platform”). This Platform
                        is owned and operated&nbsp;by Open source Pvt Ltd, a
                        company incorporated in India, having its registered
                        office at Mumbai, India.
                      </li>
                      <li>
                        Welcome to Github Search (the “Platform”). This Platform
                        is owned and operated&nbsp;by Open source Pvt Ltd, a
                        company incorporated in India, having its registered
                        office at Mumbai, India.
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div>
                    <span>Terms 2</span>
                    <ul>
                      <li>
                        Welcome to Github Search (the “Platform”). This Platform
                        is owned and operated&nbsp;by Open source Pvt Ltd, a
                        company incorporated in India, having its registered
                        office at Mumbai, India.
                      </li>
                      <li>
                        Welcome to Github Search (the “Platform”). This Platform
                        is owned and operated&nbsp;by Open source Pvt Ltd, a
                        company incorporated in India, having its registered
                        office at Mumbai, India.
                      </li>
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
