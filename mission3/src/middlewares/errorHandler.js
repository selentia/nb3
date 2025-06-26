export const errorHandler = (err, req, res, next) => {
  console.error('[ERROR]', err);
  res.status(err.status || 500).json({
    message: err.message || '서버 오류',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};