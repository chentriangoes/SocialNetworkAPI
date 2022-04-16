// Run npm install mongodb and require mongodb
const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb://localhost:27017/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export mongoose connection 
module.exports = mongoose.connection;