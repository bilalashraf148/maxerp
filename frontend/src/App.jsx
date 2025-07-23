import React, { useEffect, useState } from 'react';
import { message, Card, Row, Col, Form } from 'antd';
import { getJobs, createJob } from './services/jobApi';
import NavBar from './components/NavBar';
import JobPostForm from './components/JobPostForm';
import JobPostList from './components/JobPostList';
import './App.css';


function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchJobs = async () => {
    try {
      const res = await getJobs();
      if (res.data.success) {
        setJobs(res.data.jobs);
      }
    } catch {
      message.error('Failed to fetch job posts.');
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const payload = {
        ...values,
        deadline: values.deadline && values.deadline.format ? values.deadline.format('YYYY-MM-DD') : values.deadline,
      };
      const response = await createJob(payload);
      if (response.data && response.data.success) {
        message.success('Job post created!');
        form.resetFields();
        fetchJobs();
      } else {
        message.error('Failed to create job post.');
      }
    } catch {
      message.error('Failed to create job post.');
    } finally {
      setLoading(false);
    }
  };


  const [form] = Form.useForm();

  return (
    <div style={{ height: '100vh', background: '#18191A', boxSizing: 'border-box', overflow: 'hidden' }}>
      <NavBar />
      <div className="main-container">
        <Row gutter={[32, 32]} justify="center" align="top" className="custom-row">
          <Col xs={24} md={10} className="custom-col">
            <Card className="custom-card">
              <h2 className="form-title">Create Job Post</h2>
              <JobPostForm onSubmit={onFinish} loading={loading} form={form} />
            </Card>
          </Col>
          <Col xs={24} md={14} className="custom-col">
            <JobPostList jobs={jobs} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
