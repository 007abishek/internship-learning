# Branch & Edge-Case Testing (Jest)

This project demonstrates **branch testing** and **edge-case testing** using **Jest** with pure JavaScript functions.

branch-edge-jest
│
├─ src
│  └─ discount.js
│
├─ tests
│  └─ discount.test.js
│
├─ package.json
└─ README.md

---

## 🧠 What is Tested

### Branch Testing
- Student discount
- Senior discount
- Default discount

### Edge-Case Testing
- Price = 0
- Negative price

---

## 🧪 Example Logic

The `calculateDiscount` function applies different discounts based on user type and safely handles invalid prices.

---

## ▶️ Run Tests

```bash
npm install
npm test
