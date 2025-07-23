function validateJobPost(data) {
  const { title, department, employmentType, description, location, deadline } = data;
  if (!title || !department || !employmentType || !description || !location || !deadline) {
    return false;
  }
  return true;
}

module.exports = { validateJobPost };
