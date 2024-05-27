import { TextField, Button } from "@mui/material";
import { Controller, Control, useFormState } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  key: string;
  secret: string;
};

type Props = {
  control: Control<FormValues>;
  onSubmit: () => void;
};

export const RegisterForm = ({ control, onSubmit }: Props) => {
  const { errors } = useFormState({ control });
  console.log(errors);
  

  return (
    <form onSubmit={onSubmit}>
      <Controller
        control={control}
        name='name'
        rules={{ required: "Required field!" }}
        render={({ field }) => (
          <TextField
            required
            label='Your name'
            type='text'
            margin='normal'
            name='name'
            fullWidth={true}
            onChange={(e) => field.onChange(e)}
            value={field.value}
            error={!!errors.secret?.message}
            helperText={errors.key?.message}
          />
        )}
      />
      <Controller
        control={control}
        name='email'
        rules={{ required: "Required field!" }}
        render={({ field }) => (
          <TextField
            required
            label='Email'
            type='email'
            margin='normal'
            name='email'
            fullWidth={true}
            onChange={(e) => field.onChange(e)}
            value={field.value}
            error={!!errors.secret?.message}
            helperText={errors.key?.message}
          />
        )}
      />
      <Controller
        control={control}
        name='key'
        rules={{ required: "Required field!" }}
        render={({ field }) => (
          <TextField
            label='Username'
            type='text'
            margin='normal'
            name='key'
            fullWidth={true}
            onChange={(e) => field.onChange(e)}
            value={field.value}
            error={!!errors.secret?.message}
            helperText={errors.key?.message}
          />
        )}
      />
      <Controller
        control={control}
        name='secret'
        rules={{ required: "Required field!" }}
        render={({ field }) => (
          <TextField
            label='Password'
            type='password'
            margin='normal'
            name='secret'
            fullWidth={true}
            onChange={(e) => field.onChange(e)}
            value={field.value}
            error={!!errors.secret?.message}
            helperText={errors.secret?.message}
          />
        )}
      />
      <Button
        type='submit'
        variant='contained'
        sx={{ my: 2 }}
        fullWidth={true}
      >
        Sign up
      </Button>
    </form>
  );
};
