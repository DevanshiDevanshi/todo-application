import { useState } from "react";
import { TodoType } from "../type/TodoType";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateTodo } from "../apis/TodoApi";

type todoItemType = {
  todoItem: TodoType;
  onUpdate: (e: any) => void;
  onStatusUpdate: (e: any) => void;
  onDelete: (e: any) => void;
};

export const TodoItem = ({
  todoItem,
  onUpdate,
  onStatusUpdate,
  onDelete,
}: todoItemType) => {
  const { id, task, status } = todoItem;
  const [edit, setEdit] = useState<boolean>(true);
  const [todoUpdateTask, setTodoUpdateTask] = useState<string>(todoItem.task);

  const formik = useFormik({
    initialValues: { ...todoItem },
    validationSchema: Yup.object({
      task: Yup.string()
        .min(3, "Must be 3 characters or more")
        .max(30, "Must be 30 characters or less")
        .required(),
    }),
    onSubmit: async (values) => {
      console.log(`values:: ${values}`);
      console.log(status);
      try {
        const res = await updateTodo(values.id, values);
        console.log(res);
      } catch (err) {
        console.log(`error updating todo`);
      }
    },
  });

  // input value change event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoUpdateTask(e.target.value);
  };

  // // update
  // const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (todoUpdateTask.trim().length === 0) {
  //     window.alert("Please enter your details");
  //     return;
  //   }
  //   onUpdate({ ...todoItem, task: todoUpdateTask });
  //   setEdit(false);
  // };

  // const handleStatusUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const status = e.target.checked ? "completed" : "active";
  //   onStatusUpdate({ ...todoItem, status });
  // };

  // delete
  const handleDelete = () => onDelete(todoItem);

  return (
    <li
      key={id}
      className="flex text-lg leading-10 border-b border-gray-700 items-center p-2"
    >
      {edit ? (
        <form
          className="flex gap-2 flex-auto shrink-0"
          onSubmit={formik.handleSubmit}
        >
          <input
            type="text"
            placeholder={todoUpdateTask}
            value={todoUpdateTask}
            onChange={handleChange}
            className="py-2 px-3 block w-full rounded-lg border-gray-200 bg-gray-100"
          />
          <div className="flex gap-2">
            <button className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
              Update
            </button>
            <button
              onClick={() => setEdit(false)}
              className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            >
              Close
            </button>
          </div>
        </form>
      ) : (
        <>
          <label
            htmlFor={id}
            className="flex-auto shrink-0 pl-2 checked:line-through peer-checked/checked:text-slate-300 peer-checked/checked:line-through"
          >
            {task}
          </label>
          <div className={`flex gap-2 ${edit ? `hidden` : `flex`} `}>
            <button
              onClick={handleDelete}
              className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};
