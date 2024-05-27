import { TextField, Button } from "@mui/material";
import { Controller, Control, useFormState } from "react-hook-form";

type FormValues = {
  key: string;
  secret: string;
};

type Props = {
  control: Control<FormValues>;
  onSubmit: () => void;
};

export const LoginForm = ({ control, onSubmit }: Props) => {
  const { errors } = useFormState({ control });

  return (
    <form onSubmit={onSubmit}>
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
        Sign in
      </Button>
    </form>
  );
};
