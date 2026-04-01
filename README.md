# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# React Components Lab

---

## Step 1 🐘
- What we did → created a new Vite React app named `react-components-lab`
- Why we did it → this gives us a clean React project starter
- Engineering principle → `bootstrapping` → starting a project with a ready-to-use foundation

### Key words
- `Vite` → fast tool to create and run apps
- `React` → library for building UI with reusable components
- `JavaScript` → language that powers the app

---

## Step 2 🐢
- What we did → updated ESLint rules and cleaned App.jsx
- Why we did it → removed distractions and started from a clean base
- Engineering principles →

  - `KISS` → Keep It Simple, Smart  
    → start simple before adding complexity  

  - `SEF` → Small Edits First  
    → make small safe changes instead of big risky ones  

### Key words
- `ESLint` → tool that checks your code for mistakes
- `rules` → instructions ESLint follows
- `root component` → the main component that controls the app

---

## Step 3 🦒
- What we did → created component folder structure for WeatherForecast
- Why we did it → organized code so each component has its own space
- Engineering principle →

  - `SOC` → Separation of Concerns  
    → each file/folder has one responsibility  

### Key words
- `component` → a reusable UI building block
- `folder structure` → how files are organized
- `scalability` → ability to grow the app without chaos

---

## Step 4 🐬
- What we did → added weather data array into App.jsx
- Why we did it → this data will power the UI we build next
- Engineering principle →

  - `DSS` → Data Shapes Structure  
    → UI depends on how data is structured  

  - `PDP` → Parent Data Pattern  
    → parent component holds and distributes data  

### Key words
- `array` → a list of items
- `object` → a group of related data (day, weather, time)
- `data-driven UI` → UI that is generated from data

---

## Step 5 🦊
- What we did → created the WeatherForecast component template
- Why we did it → we need one reusable weather card before making it dynamic
- Engineering principle →

  - `DRY` → Don’t Repeat Yourself  
    → build once, reuse many times  

### Key words
- `reusable component` → one UI block used multiple times
- `template` → a starter structure we fill with real data later
- `JSX` → HTML-like syntax used inside React

---

## Step 6 🐻
- What we did → imported and rendered WeatherForecast in App.jsx
- Why we did it → connected the component to the UI so it appears in the browser
- Engineering principle →

  - `CRUD` → Create, Read, Update, Delete  
    → the 4 basic operations in apps  

  - `Read` → displaying data to the user  

  - `IRS` → Import → Render → See  
    → steps to display a component on screen  

### Key words
- `import` → bring a component into a file
- `render` → display something on the screen
- `component usage` → placing `<Component />` in JSX to show it

---

## Step 7 🐙
- What we did → used `.map()` to render multiple WeatherForecast components
- Why we did it → automatically create UI from data instead of repeating code
- Engineering principle →

  - `DAR` → Data Automatically Renders → UI is generated from data
  - `DRY` → Don’t Repeat Yourself → avoid manual duplication

### Key words
- `map()` → loops through an array and returns something for each item
- `dynamic rendering` → UI created from data automatically
- `key` → unique identifier React uses to track list items

### Test
- browser shows 5 weather cards
- no errors in console

---

### Props concept
- `props` → data passed from parent to child component
- `read-only` → child can use the data but cannot change it
- `UDF` → Unidirectional Data Flow → data only flows one way (parent → child)

### Mental model
- Parent owns data
- Child displays data
- Child does NOT modify data

---

## Step 8 🐝
- What we did → passed weather data into WeatherForecast as props
- Why we did it → each component now receives its own data
- Engineering principle →

  - `UDF` → Unidirectional Data Flow → parent sends data down to child
  - `PUD` → Pass → Use → Display → flow of data in components

### Key words
- `props` → data passed from parent to child component
- `arguments` → values passed into a function (props work similarly)
- `dynamic data` → data that changes per component

### Test
- still 5 cards
- still placeholder text (expected)

---

## Step 9 🐳
- What we did → used props inside WeatherForecast to display real data
- Why we did it → turned static components into dynamic UI
- Engineering principle →

  - `RO` → Read Only → props can be used but not modified
  - `ROD` → Receive → Open → Display → how components use props

### Key words
- `props` → data passed into a component
- `dynamic UI` → UI that changes based on data
- `data binding` → connecting data to UI

### Test
- 5 cards display different data
- images appear correctly
- no console errors

---

### Props (core concept)
- `props` → an object automatically passed into a component
- created by React (you do NOT initialize it manually)
- used to send data from parent → child

### Mental model
- component = function
- props = input object
- UI = output

---

## Key Takeaways

- Start clean → build better
- Small changes → safer progress
- Less noise → better focus
- Simple first → complexity later

✊🏾 Rule:
Build simple → then scale

---

## Final Outcome 🎉
- Built a React app using reusable components
- Passed data using props (parent → child)
- Rendered dynamic UI using `.map()`

---

## Key Concepts

### CRUD (Read)
- displaying data from a source (no editing yet)

### KISS (Keep It Simple, Stupid)
- build simple static UI first, then make it dynamic

### DRY (Don’t Repeat Yourself)
- reused components instead of duplicating code

### Props
- object passed automatically by React
- used to send data into components

### .map()
- loops through an array
- returns UI elements

---

## Level Up Step 1 🐢
- What we did → planned the new component tree for the refactor
- Why we did it → understand the design before changing code
- Engineering principle →
  - `SRP` → Single Responsibility Principle → each component should do one main job

### Key words
- `refactor` → improve code structure without changing what the app does
- `component tree` → the parent-child structure of components
- `SRP` → Single Responsibility Principle

---

## Level Up Step 2 🐘
- What we did → created new component files (WeatherIcon, WeatherData)
- Why we did it → prepare for breaking down the main component
- Engineering principle →

  - `SOC` → Separation of Concerns  
    → split responsibilities across components  

### Key words
- `component file` → file that defines a React component
- `modularization` → breaking code into smaller parts

---

## Level Up Step 3 🦊
- What we did → created WeatherIcon component to display only the image
- Why we did it → separate visual responsibility from data display
- Engineering principle →

  - `SRP` → Single Responsibility Principle  
    → one component = one job  

### Key words
- `presentational component` → component focused only on UI
- `props` → used to pass image data into the component

---


