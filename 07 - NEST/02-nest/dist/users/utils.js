"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPassword = exports.createHash = void 0;
const bcryptjs_1 = require("bcryptjs");
const createHash = (password) => (0, bcryptjs_1.hashSync)(password, 10);
exports.createHash = createHash;
const isValidPassword = (password, user) => (0, bcryptjs_1.compareSync)(password, user.password);
exports.isValidPassword = isValidPassword;
//# sourceMappingURL=utils.js.map