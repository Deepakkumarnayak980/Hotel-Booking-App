import { useForm } from "react-hook-form";

const useSignUpForm = () =>{
    const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  return {form}
}

export {useSignUpForm}