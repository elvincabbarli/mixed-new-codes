import { TextField, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface formTypes {
  email: string;
  password: string;
}

const Material = () => {
  const form = useForm<formTypes>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = (data: formTypes) => {
    console.log(data);
  };
  return (
    <div>
      <br />
      <Link to="/"> = Home = </Link> <br />
      <br />
      <form action="" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2} width={500}>
          <TextField
            type="email"
            label="Email"
            {...register("email", {
              required: "You need to write email",
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            type="password"
            label="Password"
            {...register("password", {
              required: "You need to write password",
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Material;
