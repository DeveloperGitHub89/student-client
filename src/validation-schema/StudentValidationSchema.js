import * as Yup from "yup";

export const StudentRegistrationSchema = Yup.object().shape({
    roll:Yup.number("Roll must be a number").required("Roll is required"),
    name: Yup.string().min(3,"Minimum 3 characters required").max(12,"Max lenght can be 12").required("Name is required"),
    marks:Yup.number("Marks must be a number").required("Marks is required"),
    gender: Yup.string().required("Gender is required"),
  });