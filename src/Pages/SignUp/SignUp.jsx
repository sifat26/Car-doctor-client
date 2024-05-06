import { Link } from 'react-router-dom';
import img from'../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
    

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name, email, password);
        createUser(name,email,password)
        .then(result=>
            {
                const user=result.user;
                console.log("User",user);

            }
        )
        .catch(error=>console.error(error))
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center  w-1/2 mr-12">
            <img src={img} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="text-3xl font-bold text-center">SignUp</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Your name"
                  name='name'
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name='email'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name='password'
                  className="input input-bordered"
                  required
                />
                <label className="label text-center mt-4">
                  <p className="text-sm ">
                    Already have an account? {" "}
                    <Link className="text-[#FF3811]" to="/login">
                      Log In
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6 ">
                <input
                  className="btn bg-[#FF3811] text-white"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
