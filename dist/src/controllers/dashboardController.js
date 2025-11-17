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
exports.getDashboardMetrics = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getDashboardMetrics = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (req = express_1.request, res = express_1.response) {
    try {
        const popularProducts = yield prisma.products.findMany({
            take: 15,
            orderBy: {
                stockQuantity: 'desc'
            },
        });
        const salesSummary = yield prisma.salesSummary.findMany({
            take: 5,
            orderBy: {
                date: 'desc'
            },
        });
        const purchaseSummary = yield prisma.purchaseSummary.findMany({
            take: 5,
            orderBy: {
                date: 'desc'
            },
        });
        const expenseSummary = yield prisma.expenseSummary.findMany({
            take: 5,
            orderBy: {
                date: 'desc'
            },
        });
        const expenseByCategorySummaryRaw = yield prisma.expenseByCategory.findMany({
            take: 5,
            orderBy: {
                date: 'desc'
            },
        });
        const expenseByCategorySummary = expenseByCategorySummaryRaw.map(item => (Object.assign(Object.assign({}, item), { amount: item.amount.toString() // Convert Decimal to string
         })));
        res.json({
            popularProducts,
            salesSummary,
            purchaseSummary,
            expenseSummary,
            expenseByCategorySummary,
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
});
exports.getDashboardMetrics = getDashboardMetrics;
