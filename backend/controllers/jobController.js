let jobPosts = [];

const { validateJobPost } = require('../models/jobValidation');

const createJob = (req, res) => {
  if (!validateJobPost(req.body)) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }
  const newJob = { ...req.body, id: Date.now().toString() };
  jobPosts.push(newJob);
  res.status(201).json({ success: true, job: newJob });
};

const getJobs = (req, res) => {
  res.json({ success: true, jobs: jobPosts });
};

module.exports = {
  createJob,
  getJobs
};
