import React from 'react';
import { List, Card, Tag, Typography, Row, Col } from 'antd';
import { CalendarOutlined, EnvironmentOutlined, ApartmentOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;

const typeColor = {
  'Full-time': 'green',
  'Part-time': 'blue',
  'Internship': 'orange',
};

const JobPostList = ({ jobs }) => (
  <div className="job-list-wrapper">
    <h2 className="job-list-title">Job Posts</h2>
    <List
      grid={{ gutter: 24, xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 }}
      dataSource={jobs}
      locale={{ emptyText: <span className="job-list-empty">No job posts yet.</span> }}
      renderItem={job => (
        <List.Item key={job.id}>
          <Card
            hoverable
            className="job-card"
          >
            <Row justify="space-between" align="middle">
              <Col span={18}>
                <Text strong style={{ fontSize: 18 }}>{job.title}</Text>
              </Col>
              <Col span={6} style={{ textAlign: 'right' }}>
                <Tag color={typeColor[job.employmentType] || 'default'} style={{ fontWeight: 600 }}>
                  {job.employmentType}
                </Tag>
              </Col>
            </Row>
            <Row gutter={[0, 8]} style={{ marginTop: 8 }}>
              <Col span={24}>
                <Text type="secondary"><ApartmentOutlined /> {job.department}</Text>
              </Col>
              <Col span={24}>
                <Text type="secondary"><EnvironmentOutlined /> {job.location}</Text>
              </Col>
              <Col span={24}>
                <Text type="secondary"><CalendarOutlined /> {job.deadline}</Text>
              </Col>
            </Row>
            <Paragraph className="job-card-description" ellipsis={{ rows: 2, tooltip: job.description }}>
              {job.description}
            </Paragraph>
          </Card>
        </List.Item>
      )}
    />
  </div>
);

export default JobPostList;
