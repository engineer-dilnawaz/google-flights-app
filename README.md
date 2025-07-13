# Google Flights App (React Native + Expo)

A modern, full-featured flight search and booking app inspired by Google Flights, built with React Native, Expo, and React Native Paper. This app demonstrates best practices in cross-platform mobile development, state management, theming, and UI/UX design.

---

## ✈️ Features

- **Flight Search:**
  - Search for flights between cities/airports with flexible date selection (one-way or return).
  - Filter by direct flights, cabin class, and number of travelers (adults, children, infants).
  - View a list of available flights with details, stops, and prices.
- **Authentication:**
  - Sign up and log in with email/phone and password (local storage-based for demo).
  - Delete account and log out functionality.
  - Privacy policy and terms acceptance during sign-up.
- **User Profile:**
  - View and edit user information.
  - Switch between light and dark mode (persistent theme preference).
  - Change language (UI only, i18n placeholder).
- **Saved/Favourite Flights:**
  - Save and view favourite flights (UI placeholder).
- **Modern UI/UX:**
  - Built with React Native Paper for a consistent Material Design look.
  - Smooth navigation with bottom tabs and stack navigation.
  - Lottie animations for splash/loading screens.
  - Responsive layouts and custom components.
- **Developer Experience:**
  - Modular, scalable codebase with hooks, stores, and reusable UI components.
  - TypeScript for type safety.
  - ESLint for code quality.

---

## 📦 Project Structure

```
/ (root)
├── assets/           # Images, icons, fonts, Lottie animations
├── constants/        # Design tokens, static data
├── mock/             # Mock API responses for development
├── scripts/          # Utility scripts (e.g., reset-project)
├── src/
│   ├── App.tsx       # App entry point
│   ├── components/   # UI and collection components
│   ├── hooks/        # Custom React hooks
│   ├── navigation/   # Navigation stacks and tabs
│   ├── screens/      # App screens (Auth, Main, Others)
│   ├── services/     # API clients and service logic
│   ├── store/        # Zustand stores and context providers
│   ├── types/        # TypeScript type definitions
│   └── utils/        # Utility functions
├── package.json      # Project metadata and dependencies
└── README.md         # This file
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Yarn](https://yarnpkg.com/) or npm
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd google-flights-app
   ```
2. **Install dependencies:**
   ```bash
   yarn install
   # or
   npm install
   ```
3. **Start the Expo development server:**
   ```bash
   yarn start
   # or
   npm start
   # or
   npx expo start
   ```
4. **Run on your device/emulator:**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan the QR code with [Expo Go](https://expo.dev/go) on your device

### Resetting the Project

To reset the project to a clean state:

```bash
npm run reset-project
```

---

## 🛠️ Main Libraries & Tools

- **[Expo](https://expo.dev/):** App scaffolding, build, and development tools
- **[React Native](https://reactnative.dev/):** Core framework
- **[React Native Paper](https://callstack.github.io/react-native-paper/):** Material Design UI components and theming
- **[React Navigation](https://reactnavigation.org/):** Navigation (stack, tab)
- **[Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction):** State management (flight search, places, auth, etc.)
- **[Lottie React Native](https://github.com/lottie-react-native/lottie-react-native):** Animations (splash, loading)
- **[Axios](https://axios-http.com/):** HTTP client for API requests
- **[Date-fns](https://date-fns.org/):** Date formatting and manipulation
- **[@gorhom/bottom-sheet](https://github.com/gorhom/react-native-bottom-sheet):** Bottom sheet UI
- **[AsyncStorage](https://react-native-async-storage.github.io/async-storage/):** Local storage for user data
- **[TypeScript](https://www.typescriptlang.org/):** Type safety
- **[ESLint](https://eslint.org/):** Linting and code quality

---

## 🎨 Theming & UI

- **Material Design:** All screens and components use React Native Paper for a modern, accessible look.
- **Custom Theme Support:** Light and dark mode toggle, with persistent user preference.
- **Reusable Components:** Custom inputs, buttons, loaders, snackbars, bottom sheets, and more.
- **Responsive Design:** Utility functions for scaling and spacing.

---

## 🔄 State Management

- **Zustand:** Used for flight search state, places selection, and suggested places.
- **React Context:** Used for authentication and theme management.
- **Persistent Storage:** User and theme preferences are saved using AsyncStorage.

---

## 🖼️ Animations

- **Lottie Animations:**
  - Splash screen and loading indicators use Lottie for smooth, engaging animations.
  - Easily extendable for more animated UI elements.

---

## 🔐 Authentication

- **Local Auth:**
  - Sign up and log in with email/phone and password (credentials stored in AsyncStorage for demo purposes).
  - Delete account and log out.
  - Privacy policy and terms acceptance required for sign-up.
- **Social Login (UI only):**
  - Facebook and Google login buttons are present for demonstration, but not connected to real OAuth providers.

---

## 📚 Development Notes

- **Mock Data:**
  - The app uses mock API responses for flight search and airport data. Integrate with a real backend for production use.
- **TypeScript:**
  - All business logic and components are strongly typed.
- **Code Quality:**
  - ESLint and Prettier are recommended for consistent code style.
- **Testing:**
  - Add your own tests as needed (not included by default).

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or new features.

---

## 📄 License

This project is for educational/demo purposes. Please check the repository for license details.
