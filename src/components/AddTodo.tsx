import { useFormik } from "formik";
import * as Yup from "yup";
import { addTodo } from "../apis/TodoApi";

export default function AddTodo() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        id: "",
        task: "",
        status: "active",
      },
      validationSchema: Yup.object({
        task: Yup.string()
          .min(3, "Must be 3 characters or more")
          .max(30, "Must be 30 characters or less")
          .required(),
      }),
      onSubmit: async (values) => {
        try {
          console.log(values);
          const res = await addTodo(values);
          console.log(res);
        } catch (err) {
          console.log("error adding todo");
        }
        alert("Added");
      },
    });

  return (
    <>
      <form className="flex w-full max-w-2xl" onSubmit={handleSubmit}>
        <div className="flex-grow items-center border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none text-black-700  leading-tight focus:outline-none py-2 px-3 block w-full rounded-lg border-gray-200 bg-gray-100"
            type="text"
            id="task"
            name="task"
            value={values.task}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="What's on your mind?"
            aria-label="Full name"
          />
        </div>
        {errors.task && touched.task && (
          <p className="absolute -top-7 left-5 text-red-600">{errors.task}</p>
        )}

        <button
          className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded ml-3"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </>
  );
}
