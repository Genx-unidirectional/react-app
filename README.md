# Project Products

#### build with

- [Next.js](https://nextjs.org)
- [React.js](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Shandcn](https://ui.shadcn.com)

# Mini Projects

### 1 Form made with react-hook-form and zod

- Steps

  1. import FieldError and UseFormRegister.

  2. Create FormData type , FormFieldsProps, FormNames.

  3. Create FormField component with input tag and assign FormFieldProps to that input FormField component.
  4. Make the form with this field.
  5. Create userSchema using zod and zodType
  6. import useForm from react-hook-form
  7. import zodResolver from @hookform/resolver
  8. pass the {resolver:zodResolver(userSchema)} in useForm
