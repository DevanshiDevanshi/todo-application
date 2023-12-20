import "./App.css";
import { useFormik } from "formik";

import { schema } from "./Validation/todoInputValidation";

const initialValues = {
  todo: "",
};
const App = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: schema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-5 text-3xl font-bold">Todo List 1</h1>
        {errors.todo && touched.todo && <p>{errors.todo}</p>}
        <form className="flex w-full max-w-2xl" onSubmit={handleSubmit}>
          <div className="flex-grow items-center border-b-2 border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none text-gray-700 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              name="todo"
              value={values.todo}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="What's on your mind?"
              aria-label="Full name"
            />
          </div>
          <button
            className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
