"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_index_1 = require("../controllers/controller-index");
const router = (0, express_1.Router)();
router.get('/', controller_index_1.getindex.index);
exports.default = router;
