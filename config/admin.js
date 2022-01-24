module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ee417ebbd6364d56b7f6112badc447ef'),
  },
});
