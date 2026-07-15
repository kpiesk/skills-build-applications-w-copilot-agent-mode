"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectionString = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(connectionString);
        console.log('Connected to octofit_db');
    }
    catch (error) {
        console.warn('MongoDB connection unavailable; continuing without database:', error);
    }
};
exports.default = connectDB;
