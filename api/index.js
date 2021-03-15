const auth = require('./auth');
const jobs = require('./jobs');
const express = require('express');
const app = express();

// export the server middleware
// Import API Routes
app.use(jobs);
app.use(auth);
// Export the server middleware
// Export the server middleware
module.exports = {
    path: '/api',
    handler: app
};
