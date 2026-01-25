"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class MongoRepository {
    constructor(model) {
        this.model = model;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.model.find();
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.model.findById(id);
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
    create(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.model.create(obj);
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
    update(id, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.model.findByIdAndUpdate(id, obj, {
                    new: true,
                });
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.model.findByIdAndDelete(id);
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = MongoRepository;
