"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersControlls_1 = require("./usersControlls");
router
    .post("/login", usersControlls_1.userLogin);
// .get()
exports["default"] = router;
