import {

  CircularProgress,
  Container,
  FormHelperText,
  Typography,
} from "@mui/material";
import { RegisterForm } from "../../components/redisterForm/RegisterForm";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { API } from "../../api/apiUrl";


interface ISignForm {
  name: string;
  email: string;
  key: string;
  secret: string;
}
function Register() {
  const { handleSubmit, control } = useForm<ISignForm>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [isOk, setIsOk] = useState<boolean>(false)

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    setLoading(true);
    return fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Key: data.key,
        Sign: data.secret,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.ok ? navigate("/login") : setIsOk(true);
      
        response.json();
      })
      .then((e) => {
        setLoading(false);

        console.log(e);
      })
      .catch((e) => {
        console.log("error 46");

        setLoading(false);
        
      });
  });

  return (
    <Container
      style={{
        maxWidth: "600px",

        borderRadius: "20px",
        marginTop: "60px",
        backgroundColor: "white",
        padding: "10px",
      }}
      sx={{ boxShadow: 3 }}
    >
      
      <div className='form_wrap'>
        {loading && (
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <CircularProgress />
          </div>
        )}
        {
          isOk && (
            <FormHelperText
              style={{ textAlign: "center" }}
              error={true}
              children='Incorrect username or password'
            />
        )}
        <Typography variant='h4' gutterBottom={true} align='center'>
          Sign up
        </Typography>

        <RegisterForm control={control} onSubmit={onSubmit} />
        <Typography variant='h5' align='center'>
          Already have an account? <Link to='/login'>Sign in</Link>
        </Typography>
      </div>
    </Container>
  );
}

export default Register;
