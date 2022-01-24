module.exports = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    code: 'internal_server_error',
    message: 'error processing request',
  });
};