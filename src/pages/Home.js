import { useState } from "react";

import {
  Card,
  Col,
  Row,
  Typography,
  Tooltip,
  Progress,
  Upload,
  message,
  Button,
  Timeline,
  Radio,
} from "antd";

import SemiCircleProgressBar from "react-progressbar-semicircle";

function Home() {
  const { Title, Text } = Typography;

  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  const count = [
    {
      today: "Total Incident",
      title: "53",
    },
    {
      today: "Total Incident (RAN)",
      title: "32",
    },
    {
      today: "Total Incident (Core)",
      title: "12",
    },
    {
      today: "Total Incident (Transmission)",
      title: "13",
    },
  ];

  return (
    <>
      <div className="layout-content">
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {count.map((c, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={6}
              xl={6}
              className="mb-24"
            >
              <Card
                bordered={false}
                className="criclebox "
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "calc(100% - 20px)",
                }}
              >
                <div className="number">
                  <Row align="middle" gutter={[24, 0]}>
                    <Col>
                      <span>{c.today}</span>
                      <Title
                        level={3}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {c.title}
                      </Title>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <Row align="middle">
          <Col>
            <Card>
              <SemiCircleProgressBar percentage={33} showPercentValue />
            </Card>
          </Col>
          <Col>
            <Card>
              <Row align="middle">
                <SemiCircleProgressBar percentage={33} showPercentValue />
              </Row>
              <Row align="middle">
                <SemiCircleProgressBar percentage={33} showPercentValue />
              </Row>
              <Row align="middle">
                <SemiCircleProgressBar percentage={33} showPercentValue />
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
