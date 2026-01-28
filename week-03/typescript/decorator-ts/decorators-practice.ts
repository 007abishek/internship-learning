export {};


 //  CLASS DECORATOR


function Logger(constructor: Function) {
  console.log("Class created:", constructor.name);
}

@Logger
class User {
  name = "Abhishek";
}


 //  CLASS DECORATOR MODIFYING CLASS


function AddRole(role: string) {
  return function (constructor: Function) {
    constructor.prototype.role = role;
  };
}

@AddRole("admin")
class AdminUser {
  name = "Admin";
  role!: string;
}

const admin = new AdminUser();
console.log(admin.role);


  // METHOD DECORATOR


function LogMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with`, args);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @LogMethod
  add(a: number, b: number) {
    return a + b;
  }
}

console.log(new Calculator().add(2, 3));

 //  PROPERTY DECORATOR (FIXED)


function Readonly(target: any, propertyKey: string) {
  let value: any;

  Object.defineProperty(target, propertyKey, {
    get() {
      return value;
    },
    set(newValue: any) {
      if (value !== undefined) {
        throw new Error(`Cannot modify readonly property ${propertyKey}`);
      }
      value = newValue;
    }
  });
}

class Config {
  @Readonly
  apiUrl = "https://api.example.com";
}

const config = new Config();
// config.apiUrl = "changed"; // ❌ throws custom error


  // PARAMETER DECORATOR

function LogParam(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  console.log(`Parameter ${parameterIndex} in ${propertyKey}`);
}

class Service {
  save(@LogParam data: string) {
    console.log("Saving:", data);
  }
}

new Service().save("File");

  // VALIDATION DECORATOR


function Validate(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;

  descriptor.value = function (value: number) {
    if (value < 0) {
      throw new Error("Invalid value");
    }
    return original.call(this, value);
  };
}

class BankAccount {
  balance = 0;

  @Validate
  deposit(amount: number) {
    this.balance += amount;
  }
}

const account = new BankAccount();
account.deposit(100);
// account.deposit(-50); // ❌ throws error
