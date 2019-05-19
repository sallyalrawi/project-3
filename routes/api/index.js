const path = require('path');
const router = require('express').Router();
const cashCalRoutes = require('./cashCal');

router.use('/cashCal', cashCalRoutes);

router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './client/build/index.html'))
);

module.exports = router;