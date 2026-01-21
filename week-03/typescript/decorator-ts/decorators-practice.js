"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
/* ===============================
   CLASS DECORATOR
================================ */
function Logger(constructor) {
    console.log("Class created:", constructor.name);
}
let User = class User {
    constructor() {
        this.name = "Abhishek";
    }
};
User = __decorate([
    Logger
], User);
/* ===============================
   CLASS DECORATOR MODIFYING CLASS
================================ */
function AddRole(role) {
    return function (constructor) {
        constructor.prototype.role = role;
    };
}
let AdminUser = class AdminUser {
    constructor() {
        this.name = "Admin";
    }
};
AdminUser = __decorate([
    AddRole("admin")
], AdminUser);
const admin = new AdminUser();
console.log(admin.role);
/* ===============================
   METHOD DECORATOR
================================ */
function LogMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${propertyKey} with`, args);
        return originalMethod.apply(this, args);
    };
}
class Calculator {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    LogMethod
], Calculator.prototype, "add", null);
console.log(new Calculator().add(2, 3));
/* ===============================
   PROPERTY DECORATOR (FIXED)
================================ */
function Readonly(target, propertyKey) {
    let value;
    Object.defineProperty(target, propertyKey, {
        get() {
            return value;
        },
        set(newValue) {
            if (value !== undefined) {
                throw new Error(`Cannot modify readonly property ${propertyKey}`);
            }
            value = newValue;
        }
    });
}
class Config {
    constructor() {
        this.apiUrl = "https://api.example.com";
    }
}
__decorate([
    Readonly
], Config.prototype, "apiUrl", void 0);
const config = new Config();
// config.apiUrl = "changed"; // ❌ throws custom error
/* ===============================
   PARAMETER DECORATOR
================================ */
function LogParam(target, propertyKey, parameterIndex) {
    console.log(`Parameter ${parameterIndex} in ${propertyKey}`);
}
class Service {
    save(data) {
        console.log("Saving:", data);
    }
}
__decorate([
    __param(0, LogParam)
], Service.prototype, "save", null);
new Service().save("File");
/* ===============================
   VALIDATION DECORATOR
================================ */
function Validate(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (value) {
        if (value < 0) {
            throw new Error("Invalid value");
        }
        return original.call(this, value);
    };
}
class BankAccount {
    constructor() {
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
    }
}
__decorate([
    Validate
], BankAccount.prototype, "deposit", null);
const account = new BankAccount();
account.deposit(100);
// account.deposit(-50); // ❌ throws error
