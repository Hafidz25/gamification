export default function Login() {
  return (
    <div class="min-h-screen flex justify-center items-center">
      <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
        <div className="grid justify-items-center">
          <img className="w-20 h-20" src="/favicon.png" />
          <h1 class="text-3xl font-bold text-slate-700 text-center mb-4">
            Login Account
          </h1>
        </div>
        <div class="space-y-4 mt-8">
          <input
            type="text"
            placeholder="Username"
            class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
          <input
            type="text"
            placeholder="Password"
            class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
        </div>
        <div class="text-center mt-6">
          <button class="py-3 px-0 w-64 text-xl font-medium text-orange-400 outline outline-1 outline-orange-400 hover:text-white hover:bg-orange-400 transition duration-200 rounded-xl">
            Sign In
          </button>
          <p class="mt-4 text-sm">
            Dont Have An Account?{" "}
            <span class="underline cursor-pointer text-slate-700">
              {" "}
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
