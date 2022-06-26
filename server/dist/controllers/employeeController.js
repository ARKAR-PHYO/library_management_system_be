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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizedEmployee = exports.SigninUser = void 0;
const helpers_1 = require("../helpers");
const errors_1 = require("../helpers/errors");
const prisma_1 = __importDefault(require("../lib/prisma"));
const SigninUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = yield prisma_1.default.employees.findFirst({
            where: {
                email: req.body.email,
            },
        });
        if (!employee)
            return next((0, errors_1.CreateError)(404, "EMPLOYEE NOT FOUND !!"));
        const isPasswordCorrect = (0, helpers_1.comparedPassword)(req.body.password, employee.password);
        if (!isPasswordCorrect)
            return next((0, errors_1.CreateError)(404, "WRONG USER NAME OR PASSWORD !!!"));
        const accessToken = (0, helpers_1.signinToken)({
            email: employee.email,
            id: employee.id,
            password: employee.password,
            updatedAt: employee.updatedAt.toDateString(),
            createdAt: employee.createdAt.toDateString(),
            name: employee.name,
            bio: employee.bio,
            phone_number: employee.phone_number,
            address: employee.address,
            nrc: employee.nrc,
            dob: employee.dob,
            profile_picture: employee.profile_picture,
            barcode: employee.barcode,
        });
        if (accessToken) {
            const { password } = employee, otherDetails = __rest(employee, ["password"]);
            res
                .cookie("accessToken", Object.assign(Object.assign({}, otherDetails), { accessToken }), {
                httpOnly: true,
            })
                .status(200)
                .json({
                statusCode: 200,
                message: `EMPLOYEE SUCCESS SIGNIN.`,
                accessToken,
            });
            console.log("Client connected");
        }
    }
    catch (error) {
        next((0, errors_1.CreateError)(500, error));
    }
});
exports.SigninUser = SigninUser;
const authorizedEmployee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employee = req.employee;
        res.status(200).json({
            statusCode: 200,
            message: "YOU ARE AUTHORIZED.",
            employee: employee,
        });
    }
    catch (error) {
        next((0, errors_1.CreateError)(500, error));
    }
});
exports.authorizedEmployee = authorizedEmployee;
//# sourceMappingURL=employeeController.js.map