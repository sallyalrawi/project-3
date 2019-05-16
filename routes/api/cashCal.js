const router = require('express').Router();
const cashCalController = require('../../controllers/cashCalControllers');

router
  .route('/diary/:userId')
  .get(cashCalController.getDiary)
  .post(cashCalController.createDiary);

router
  .route('/weight/:userId')
  .get(cashCalController.getWeight)
  .post(cashCalController.addWeight);
router
  .route('/user/:userId')
  .get(cashCalController.getUser)
  .post(cashCalController.createUser);

module.exports = router;