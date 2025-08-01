# Playwright Test Automation Framework

A clean and minimal Playwright TypeScript test automation framework using Page Object Model pattern.

## Project Structure

```
Playwright/
├── pages/
│   └── login-page/
│       └── login-page.ts
├── specs/
│   └── login/
│       └── login.spec.ts
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Features

- **Page Object Model** - Clean separation of locators and test logic
- **TypeScript** - Type-safe test automation
- **Minimal Configuration** - Simple setup for learning and development
- **Clean Code** - No comments, focused on readability
- **Headed Mode** - Visual test execution for debugging

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Playwright
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Configuration

The project uses a minimal Playwright configuration:

- **Base URL**: https://rahulshettyacademy.com/angularpractice/
- **Browser**: Chromium (for learning purposes)
- **Retries**: 0 (for easier debugging)
- **Screenshots/Videos**: On failure only

## Running Tests

### Headed Mode (Recommended for development)
```bash
npm test
```

### Headless Mode
```bash
npx playwright test
```

### Run specific test file
```bash
npx playwright test specs/login/login.spec.ts
```

### Run with specific browser
```bash
npx playwright test --project=chromium
```

## Page Object Model

The framework follows Page Object Model pattern:

### Page Object Class Structure
```typescript
export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigation methods
  async navigateToPage(): Promise<void> {
    await this.page.goto('/');
  }

  // Locator methods
  getNameInput(): Locator {
    return this.page.locator('form input[name="name"]');
  }
}
```

### Test Structure
```typescript
test('Test Name', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToPage();
  await loginPage.getNameInput().fill('value');
});
```

## Project Standards

- **No Comments** - Clean, self-documenting code
- **Locator Functions** - Return Playwright locators
- **Compact Tests** - No extra spaces between steps
- **Descriptive Names** - Clear method and test names
- **Minimal Dependencies** - Only essential packages

## Test Reports

View HTML report:
```bash
npm run report
```

## Contributing

1. Follow the established project standards
2. Use Page Object Model for new pages
3. Keep tests compact and readable
4. No comments in code files