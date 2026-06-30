function Login() {
  return (
    <>
      <div className="flex flex-row justify-center items-center  min-h-screen gap-4">
        <form className="">
                  <h1 className="flex text-white text-3xl font-bold tracking-wide justify-center items-center">
          <b>Login</b>
        </h1>
        <br />
          <label className="text-white">email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-h bg-white/5 border border-white/10 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white px-4 py-2 transition-all"
          ></input>
          <br />
          <label className="text-white">password</label>
          <br />
          <input
            type="password"
            name="password"
            className="w-h bg-white/5 border border-white/10 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white px-4 py-2 transition-all"
          ></input>
          <br />
        <button className="w-h bg-blue-500 text-white px-21 py-2 my-2 rounded-md hover:bg-blue-600">Sign In</button>
        </form>
      </div>
    </>
  );
}

export default Login;
