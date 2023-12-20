import * as Yup from "yup";

export const schema = Yup.object().shape({
  todo: Yup.string().required("Please enter your todo."),
});
