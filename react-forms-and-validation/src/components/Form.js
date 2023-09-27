import "./Form.css";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";


export const Form = () => {
    // making the shape of the object to map with registers in input tags
    const schema = yup.object().shape({

        fullName: yup.string()
        .required("Your Full Name is Required!"),

        email: yup.string().email()
        .required("Your Email is Required!"),

        // sets the age to be a positive whole number and >= 18
        age: yup.number().positive().integer().min(18)
        .required(),

        // password must be a string with (characters >= 4 && characters <= 20)
        password: yup.string().min(4).max(20)
        .required(),

        // oneOf() takes an array that tells it to be the same as one of
        // the elements in the array. Use yup.ref() to refer it to a
        // field of the same object (password field in this case)
        confirmPassword: yup.string()
        .oneOf([yup.ref("password"), "Passwords Don't Match"])
        .required(),

    });

    // submitHandler takes a function as argument and applies to a form
    // register takes an identifier which is then saved as a field for an object
    // used resolver to map the objects to the defined schema
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    // this function will be passed in "handleSubmit" hook, which will
    // pass it the "data" argument by getting it form "register" and
    // form an object from all the inputs in which register is used
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}> 
            <input type="text" placeholder="Full Name..." 
            {...register("fullName")} />
            <p>{errors.fullName?.message}</p>

            <input type="text" placeholder="Email..." 
            {...register("email")} />
            <p>{errors.email?.message}</p>
            
            <input type="number" placeholder="Age..." 
            {...register("age")} />
            <p>{errors.age?.message}</p>
            
            <input type="password" placeholder="Password..." 
            {...register("password")} />
            <p>{errors.password?.message}</p>
            
            <input type="Password" placeholder="Confirm Password..." 
            {...register("confirmPassword")}/>
            <p>{errors.confirmPassword?.message}</p>
            
            <input className="submitButton" type="submit" />
        </form>
    );
}