# 🚀 Playwright Automation Framework (JavaScript)

![Playwright](https://img.shields.io/badge/Playwright-Automation-green)
![Node.js](https://img.shields.io/badge/Node.js-JavaScript-yellow)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

---

## 📌 Overview

This project is an **End-to-End UI Automation Framework** built using **Playwright with JavaScript**.
It follows the **Page Object Model (POM)** design pattern to ensure clean, reusable, and scalable automation.

The framework covers multiple modules like **Booking, Contact, Gym, Portfolio, and Services**, simulating real user workflows.

---

## 🛠️ Tech Stack

* 🎭 Playwright
* 🟨 JavaScript (Node.js)
* 🧱 Page Object Model (POM)

---

## 📂 Project Structure

```id="c9h0a7"
MATEFILE/
│
├── pages/                  # Page Object Models
│   ├── BookService.js
│   ├── ContactPage.js
│   ├── FoodService.js
│   ├── GymService.js
│   ├── Portfolio.js
│   ├── ServicePage.js
│   └── StartPage.js
│
├── tests/
│   └── Start/              # Test files
│       ├── book.spec.js
│       ├── contact.spec.js
│       ├── gym.spec.js
│       ├── portfolio.spec.js
│       ├── services.spec.js
│       ├── start.spec.js
│       └── example.spec.js
│
├── playwright-report/      # HTML reports
├── test-results/           # Execution results
├── playwright.config.js
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Install Dependencies

```id="2qb1jg"
npm install
```

### 2️⃣ Install Browsers

```id="tahwrh"
npx playwright install
```

---

## ▶️ Running Tests

### Run all tests

```id="3gfg1v"
npx playwright test
```

### Run specific module

```id="c0v8bq"
npx playwright test tests/Start/services.spec.js
```

### Run in headed mode

```id="p89id9"
npx playwright test --headed
```

### Debug mode

```id="4h9h8k"
npx playwright test --debug
```

---

## 📊 Reports

```id="8tfhdv"
npx playwright show-report
```

---

## ✨ Features

* ✅ Page Object Model (POM) implementation
* ✅ Modular and reusable code structure
* ✅ Multiple module coverage (Booking, Gym, Services, etc.)
* ✅ Cross-browser support
* ✅ Automated UI validation

---

## 🧠 Best Practices

* Separation of test logic and page objects
* Minimal use of hard waits
* Use of Playwright locators and assertions
* Maintainable and scalable folder structure

---

## 🔄 Sample Workflow

* Launch application
* Navigate through sections
* Perform actions (click, hover, form handling)
* Validate UI elements

---

## 🚀 Future Enhancements

* CI/CD integration (GitHub Actions)
* Data-driven testing
* Advanced reporting (Allure)
* API + UI integration

---

## 👨‍💻 Author

**Satyendra Kumar Namdeo**

---

## ⭐ Support

If you find this project useful, consider giving it a ⭐ on GitHub!
