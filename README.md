# 🍬 Project Products

#### build with

- [Next.js](https://nextjs.org)
- [React.js](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)

### Hooks and Api in use

- useReducer
- CreateContext Api

# 🍬 Project Scrolla with redux-toolkit

#### Build With

- [Next.js](https://nextjs.org)
- [React.js](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Redux-react](https://redux.js.org/)
- [RTK(ReduxToolKit)](https://redux-toolkit.js.org/)
- [Shadcn](https://ui.shadcn.com/)

### Hooks in use

- useState
  -useEffect

### Making the reducer in redux using redux-toolkit

- Making the product reducer using createSlice then extracting the actions from it and reducer
- Adding the productSliceReducer into the rootReducer using the `combineReducers` function from redux
- Using 'configureStore`from`@redux/toolkit`

### Type Safety

- Importing the `useDispatch` and `useSelector` as useAppDispatch and useAppSelector from redux-react
- Importing `TypedUseSelectorHook` for making the type safe useSelector for getting the state out of it.
- Setting up type for `useDispatch` and `useSelector` using below code.
- ```
  type AppDispatch = typeof store.dispatch;
  type RootState = ReturnTypeOf<typeof rootReducer>;
  const useSelector :TypedSelectorHook<RootState>=useAppSelector;
  const useDispatch  = ()=>useDispatch<AppDispatch>();
  ```

# 🍬 Dashcraft Project

- [Next.js](https://nextjs.org)
- [React.js](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn](https://ui.shadcn.com/)
- [NextAuth](https://next-auth.js.org/)

### Build with

# 🍬 Mini Projects

### 1 Simple form

### 2 Controlled form

Form made with useState having object as a state and input field are controlled and have on changing function which changes properties of state object

### 3 Form made with react-hook-form and zod

- Steps

  1. import FieldError and UseFormRegister.

  2. Create FormData type , FormFieldsProps, FormNames.

  3. Create FormField component with input tag and assign FormFieldProps to that input FormField component.
  4. Make the form with this field.
  5. Create userSchema using zod and zodType
  6. import useForm from react-hook-form
  7. import zodResolver from @hookform/resolver
  8. pass the {resolver:zodResolver(userSchema)} in useForm
  9. create route for and use zod schema for server side validation and send response as success or error json based on submitted information.

### 4 Accordion

- Accordion which open and close based on clicking it's label.
- Is has button named openMultiple and OpenSingle based on that button Accordion behaves.

### 5 Tic-Tac-Toe game

- Using useState to make tic tac toe
- Making history state which is array having history stored based on each user interaction when they click on the 9\*9 grid O or X blocks

- Making the state immutable
- Also adding functionality to hop on the previous moves and then you can playing game from that instance.

### 6 Search-Auto-Complete

- Search Auto complete component with controlled input which onchange trigger custom useFetch function in Suggestion component
- Suggestion component is lazy load component which showed up when query.length > 0
- By clicking on the suggestion the text inside it get copied to input search field and that suggestion component disappears

### 7 Tabs

- Switching tabs and based on those tabs switching contents.

### 8 Modal

- Making modal using html dialog tag.
- Putting form inside it with method="modal".
- two button one is cancel and another is confirm both with type = "submit" but cancel button .with formMethod = "dialog" so that when it click the text in the input field persist.
- Also using add event listener on dialog with getBoundingClientRect() on the dialog in oder to close the model when user click outside of the model.
- Using showModal method when click button clicked so that dialog act as a modal.

### 9 Image Slider

- Here we made image slider using external api for getting images
- We made left and right arrow to manipulate image slider
- We have created dotted button which on click navigate to respected image based on change in index by those dotted button

### 10 Star rating

- Here the star rating made in this code the most important thing is conditioning the number in order to set the background color for stars
- using two useState and using short circuiting to giving background color.

### 11 Auto Text

- The promise based delay in add text and remove text function is made
- The loop through the sentences array in order to display them in the screen one by one with loop
- Using use effect and return the cleaning function such that function continuously getting called would removed when page changes.
