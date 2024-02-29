const router = require("express").Router();
const { subscriberRequest } = require("../controller/subscribe");
router.post("/",subscriberRequest);

module.exports=router;

