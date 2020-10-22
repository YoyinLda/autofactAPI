const AWS = require('aws-sdk');

const s3bucket = new AWS.S3({
  accessKeyId: process.env.AAK,
  secretAccessKey: process.env.ASK,
  Bucket: process.env.BUCKET_NAME,
  region: process.env.REGION
});
module.exports = s3bucket;