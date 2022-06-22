<h1>Alameda Ecommerce - Clon of [Alameda](https://alameda-demo-es.squarespace.com/?nochrome=true)</h1>

This is a solution to help me improve my coding skills by building challenging projects. In this case, an ecommerce clone of Alameda, **inspired by SquareSpace.**

## Table of contents

- [Table of contents](#table-of-contents)
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Notes and Warnings](#notes-and-warnings)

## Overview

<!--
  Pegar la foto de la pag
-->

### The challenge

Users should be able to:

- View the products in the store in a grid view
- See hover states for all interactive elements on the page
- Add products to the cart
- Update the quantity of products in the cart
- Delete products from the cart
- Select the correct size for the product

### Screenshot

![image](https://user-images.githubusercontent.com/67031243/175165445-42db7271-748d-4b99-9765-cb2ea58eeb4a.png)

### Links

- Live Preview URL: [Alameda Ecommerce](https://alameda-khaki.vercel.app/)
- Repository URL: [Repository](https://github.com/Leninner/alameda-ecommerce)

## My process

### Built with

- [TypeScript](https://www.typescriptlang.org/) JS Superset
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [ReduxJs](https://redux.js.org/) - For state management

### What I learned

I learned how to use [TypeScript](https://www.typescriptlang.org/) to write performant, maintainable and powerful JS c ode. Using TypeScript I was able to write code that was more readable, more testable and more efficient.

Using interfaces, types and more.

Also, I learned good practices for writing code in React like compounding components, using hooks and using the [React Router](https://reacttraining.com/react-router/web/guides/quick-start) to create a single page application.

This is a example of an interface in TypeScript:

```ts
interface ProductInterface {
  id: string
  name: string
  description: string
  price: number
  image: string
  sizes: string[]
}
```

This is an example to compound components:

```tsx
const FirstComponent = ({ WrapperComponent, children }) => {
  return (
    <div>
      <h1>First Component</h1>
    </div>
  )
}

const SecondComponent = () => {
  return (
    <FirstComponent>
      <h2>Second Component</h2>
    </FirstComponent>
  )
}
```

### Continued development

Some features of React that I would like to use in the future:

- Compound components
- Use more custom hooks
- Use more typescript
- Learn about Next.js or Node.js

## Author

- Website - [Lenin Mazabanda](https://leninner.vercel.app/)
- Twitter - [@\_leninner](https://twitter.com/_leninner)

## Notes and Warnings

- You cannot use a `form` element inside of an another `form` element. [Read more about this issue](https://github.com/facebook/react/issues/12318)
- The `trigger` function is useful to manually triggers form or input validation. [Trigger](https://react-hook-form.com/api/useform/trigger)
