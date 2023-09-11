import { Link } from "react-router-dom";
import image from "../../assets/others/authentication2.png";
import bgImg from "../../assets/others/authentication.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const SignUp = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const {createUser} = useContext(AuthContext);

  const onSubmit = data => {
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log("loggedUser", loggedUser);
    })
  };

  return (
    <>
      <Helmet>
        <title>Savor Bistro | SignUP</title>
      </Helmet>

    <div  className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(${bgImg})` }}>
  <div className="hero-content flex-col lg:flex-row-reverse  my-[50px]">
    <div className="md:w-1/2  md:ml-20">
      <img src={image} alt="" />
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <h1 className="text-2xl font-bold m-auto mt-4">Sign Up Now!</h1>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name", { required: true })} name="name" placeholder="Full Name" className="input input-bordered" />
          {errors.name && <span className="text-red-600">Name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", {required: true})} name="email" placeholder="Email" className="input input-bordered" />
          {errors.email && <span className="text-red-600">Email Address is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password", { 
            required: true, 
            minLength:8, 
            maxLength: 20,
            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
            })} name="password" placeholder="Password" className="input input-bordered" />

          {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
          {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 8 characters</span>}
          {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be 8 characters</span>}
          {errors.password?.type === 'pattern' && <span className="text-red-600">Password must be one Capital latter, one small latter, one number and one spacial character</span>}

          <p className="m-auto my-4 text-orange-500"><small>Already have an account? <Link className="font-bold" to="/login"> Login</Link></small></p>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Sign Up" />
        </div>
      </div>
    </form>
    
  </div>
</div>
    </>
    
  );
};

export default SignUp;