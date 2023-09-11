import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import image from "../../assets/others/authentication2.png";
import bgImg from "../../assets/others/authentication.png";
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';




const Login = () => {


  const [disabled, setDisabled] = useState(true);

  const {signIn} = useContext(AuthContext);

  useEffect( () => {
    loadCaptchaEnginge(6);
  } , [])

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Account Log In Successfully',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if(validateCaptcha(user_captcha_value)){
      setDisabled(false);
    }
    else{
      setDisabled(true);
    }
  }


  return (
    <>
      <Helmet>
        <title>Savor Bistro | Login</title>
      </Helmet>

    <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${bgImg})` }}>
  <div className="hero-content flex-col lg:flex-row-reverse my-[50px]">
    
    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-2xl font-bold m-auto mt-4">Login Now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the captcha above" className="input input-bordered" />
          <p className="m-auto my-4 text-orange-500"><small>New Here? <Link className="font-bold" to="/signup">Create an account</Link></small></p>
        </div>
        <div className="form-control mt-6">
          <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      
    </div>

    <div className="md:w-1/2 md:mr-20">
      <img src={image} alt="" />
    </div>

  </div>
</div>
    </>
    
  );
};

export default Login;