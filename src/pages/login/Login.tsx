import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Typography,
  CircularProgress,
  FormHelperText,
  Container,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import MD5 from "crypto-js/md5";

import {
  AuthSuccessAction,
  AuthErrorAction,
} from "../../redax/actions/auth";
import fetchAuth from "../../api/fetchAuth";
import { LoginForm } from "../../components/LoginForm/LoginForm";

interface ISignForm {
  key: string;
  secret: string;
}

const Login: React.FC = () => {
  const { handleSubmit, control } = useForm<ISignForm>();
  const [loading, setLoading] = useState<Boolean>(false);
  const [isAuth, setIsAuth] = useState<Boolean>(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    const url = "/myself";
    const md5 = MD5(`GET${url}${data.secret}`);
    setLoading(true);

    fetchAuth({ key: data.key, secret: data.secret }, url)
      .then((res) => {
        if (res.isOk) {
          dispatch(
            AuthSuccessAction({
              token: md5.toString(),
              email: res.data.email,
              key: res.data.key,
              secret: res.data.secret,
            }),
          );
          navigate("/");
        } else setIsAuth(false);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        dispatch(AuthErrorAction("Failed to fetch."));
        console.log(e);
      });
  });

  return (
    <Container
      style={{
        maxWidth: "600px",
        // border: "1px solid #1565C0",
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
        {!isAuth && (
          <FormHelperText
            style={{ textAlign: "center" }}
            error={true}
            children='Incorrect username or password'
          />
        )}
        <Typography variant='h4' gutterBottom={true} align='center'>
          Sign in
        </Typography>

        <LoginForm control={control} onSubmit={onSubmit} />
        <Typography variant='h5' align='center'>
          or <Link to='/register'>Sign up</Link>
        </Typography>
      </div>
    </Container>
  );
};

export default Login;
