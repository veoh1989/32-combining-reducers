# Lab 32 - Budget Tracker Continued

**Author**: Liza Oh

## Overview
Budget Tracker using React and Redux

#### Configuration
* `package.json`
* `.eslintrc`
* `.gitignore`
* `.babelrc`

##### Components
Create the following components and structure them according to the following diagram.
```
App
  Provider
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categories
        [CategoryItem] -- list of CategoryItems
           CategoryForm  -- for updating categories
           ExpenseForm -- for creating expenses
           [ExpenseItem]  -- list of ExpenseItems
              ExpenseForm -- for updating an expense
```

## Built With
* [Javascript](https://www.javascript.com/)
* [React](https://reactjs.org/)
* [WebPack](https://webpack.js.org/)
* [Redux](https://redux.js.org/)
