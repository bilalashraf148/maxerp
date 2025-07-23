import React from 'react';
import { Form, Input, Select, DatePicker, Button } from 'antd';
import dayjs from 'dayjs';
import './JobPostForm.css';

const { Option } = Select;

const JobPostForm = ({ onSubmit, loading, form }) => {
  // Disable all dates before today
  const disabledDate = (current) => current && current < dayjs().startOf('day');
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onSubmit}
    >
      <div className="form-scroll-area">
        <Form.Item name="title" label="Job Title" rules={[{ required: true, message: 'Please enter job title' }]}> 
          <Input placeholder="e.g. Software Engineer" />
        </Form.Item>
        <Form.Item name="department" label="Department" rules={[{ required: true, message: 'Please enter department' }]}> 
          <Input placeholder="e.g. Engineering" />
        </Form.Item>
        <Form.Item name="employmentType" label="Employment Type" rules={[{ required: true, message: 'Please select employment type' }]}> 
          <Select placeholder="Select type">
            <Option value="Full-time">Full-time</Option>
            <Option value="Part-time">Part-time</Option>
            <Option value="Internship">Internship</Option>
          </Select>
        </Form.Item>
        <Form.Item name="description" label="Job Description" rules={[{ required: true, message: 'Please enter job description' }]}> 
          <Input.TextArea rows={4} placeholder="Describe the role, responsibilities, and requirements..." />
        </Form.Item>
        <Form.Item name="location" label="Location" rules={[{ required: true, message: 'Please enter location' }]}> 
          <Input placeholder="e.g. New York, Remote" />
        </Form.Item>
        <Form.Item name="deadline" label="Application Deadline" rules={[{ required: true, message: 'Please select deadline' }]}> 
          <DatePicker className="full-width" placeholder="Select date" disabledDate={disabledDate} />
        </Form.Item>
      </div>
      <div className="sticky-footer">
        <Form.Item className="no-margin">
          <Button type="primary" htmlType="submit" loading={loading} block size="middle">
            Create Job Post
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default JobPostForm;
