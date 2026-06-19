function Login() {
  return (
    <>
      <div className="flex-row justify-center items-center  min-h-screen border-4 border-b-blue-50">
        <p className="flex items-center text-center">
          <b>Login</b>
        </p>
        <form className="border-4 border-b-blue-50">
          <label className="text-white">email</label>
          <br />
          <input
            type="email"
            name="email"
            defaultValue="olayiwola@example.com"
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
        </form>
        <br />
      </div>
    </>
  );
}

export default Login;
