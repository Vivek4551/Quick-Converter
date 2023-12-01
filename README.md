# Getting Started with React App

This project was initiated and has been developed using Parcel bundler.

Why i have choosen Parcel ?

Reasons :->
- Dev Build
- Local Server
- HMR = Hot Module Replacement (Follows File watching algorithm)
- File Watching Algorithm - written in c++
- Caching - Faster Builds (.Parcel-cache)
- Image Optimization
- Minification
- Bundling
- Compressing

## Available Scripts

In the project directory, you can run:

first you have to do

### `npm install`
then
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:1234](http://localhost:1234) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Live Project Link

Click here to check the hosted website - [Hosted Link](https://rate-rocket.vercel.app/)

## Library Used

### React

I chose React for its component-based architecture, as it allows me to break down my project into reusable building blocks.
You make different parts(components) and put them together. It's quick because you don't repeat the same work.
This reusability not only makes development faster but also more efficient.

React's Virtual DOM and reconciliation algorithms ensure speedy updates. The Virtual DOM acts like a blueprint, optimizing changes, while reconciliation efficiently updates only what's needed. Hooks streamline state management, simplifying development. Together, these features make React a powerhouse for creating fast, responsive, and maintainable user interfaces.

And also after all these if i get stuck somewhere, React also has a smart big group of friends (community) online to help out.

### Tailwind CSS for Responsive interface

A responsive interface is a design approach that ensures a website or application can automatically adjust its layout, content, and functionality to provide an optimal viewing and interaction experience across a wide range of devices and screen sizes.

I used "Tailwind-CSS", Tailwind CSS is a utility-first CSS framework, it provides a set of utility classes that we can apply directly to HTML elements for styling purpose. Apart from that, Tailwind only includes the styles you use. This means your project's bundle size is minimal, contributing to faster loading times.

To apply styles conditionally based on screen size breakpoints in tailwind-css, we use -> sm: for small screens, md: for medium screens, lg: for large screens.

Thus this project has resulted in a responsive interface for all screen sizes which efficiently developed user interface that enhances the overall user experience

## Features Asked

The goal of this project is to create a simple currency converter react app that helps us to convert the following currencies:

1. INR <> USD
2. INR <> AED
3. INR <> GBP
4. INR <> CAD
5. INR <> SGD
6. INR <> EUR
7. INR <> JPY
8. INR <> PKR
9. INR <> ZAR
10. INR<>ALL

 ### `Here the Main plot was conversion from INR to Other Currencies But Bidirectional conversion will take place from each currencies to INR  only.  Example :->  INR to USD then USD to INR , USD cannot be converted to other currencies.`

## API USED

Click here to visit the website  :-> [live Link](https://quick-converter.vercel.app/)


### App Architecture

For creating the given sample profile, I divided my project into Four sections ->
- Assets
- Components 
  - CurrencyConverter.js (Functional Component)
- Hooks
  - CurrencyContext.js (useContext Hook)
  - useCurrencyData.js (custom Hook)
- Utils
  - Constants.js (to store constant data like API link and its Keys)

### `App.js`
- The code sets up a React app using Parcel bundler. It defines an App component that includes a CurrencyConverter component wrapped in a CurrencyProvider for managing currency-related context. The app is rendered using ReactDom.createRoot into the HTML element with the ID "root." This architecture allows for efficient management and rendering of currency conversion functionality.

### `CurrencyContext.JS`
  - This context file is crucial for managing currency-related data in our React application. It establishes a CurrencyContext that serves as a shared space for key state variables like source and target currency values. My CurrencyProvider component encapsulates this context, providing a clean way to manage and distribute currency data across the entire app. Through this useCurrencyContext hook, components can easily tap into this centralized hub to access or update currency information without the hassle of prop drilling. This approach enhances the application's organization and performance, making it more scalable and maintainable by offering a streamlined solution for handling currency-related state throughout various components.

### `UseCurrencyData.js`
- The useCurrencyData custom React hook fetches exchange rates from a currency API based on the selected source currency. It utilizes React's useState and useEffect hooks. The exchangeRates state is updated asynchronously when the sourceCurrency changes. The hook is designed for easy integration into React applications requiring real-time currency data. Considerations for loading and error handling are recommended for a more robust implementation.

### `CurrencyConverter.js`
- CurrencyConverter.js is a functional component for a currency conversion application. In this file i have used the useCurrencyData custom hook to fetch exchange rates from API, and the useCurrencyContext hook and Context file to manage currency-related state. The component features input fields for source and target currencies, conversion buttons, and a reset option. It leverages the React-Select library for currency selection, Toastify for notifications, and includes a responsive design with a dynamic rate display. The code is organized, with concise functions for currency conversion and a clean UI.

### `Constants.js`
- This file, likely named currencyApiConfig.js, contains API keys and a formatted API link for fetching live currency exchange rates. There are two API keys (apiKey_1 and apiKey_2) for redundancy. The currencyApiLink variable includes one of these keys for authentication, fetching rates for a predefined set of currencies against the Indian Rupee (INR). This setup ensures continued functionality if one API key is unavailable. It is crucial to keep API keys secure, and the API link is structured to provide exchange rates for USD, AED, GBP, CAD, SGD, EUR, JPY, PKR, ZAR, INR, and ALL. This file is integral to the currency conversion application's ability to retrieve up-to-date exchange rates


## Hosting it on public cloud

I chose to host my application on Vercel, a popular cloud hosting platform for web applications. The reason behind choosing this platfrom is that Vercel is easy to use and the deployment process is straightforward, and it's incredibly fast to get your application up and running. It allowed me to focus on delivering a great user experience.

The Link of my project is :-> [live Link](https://quick-converter.vercel.app/)

## My project images for all screen sizes.


