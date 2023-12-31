import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]  flex justify-between items-center ">
      {/* box */}
      <div
        className="h-full max-w-4xl mx-auto shadow-2xl rounded-md
        flex flex-col md:flex-row md:h-[70%] md:w-full"
      >
        {/* image container */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt="" fill className="object-cover" />
        </div>
        {/* form container */}
        <div className="p-10 md:h-full md:w-1/2 flex flex-col gap-8">
          <h1 className="text-xl font-bold xl:text-3xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Signin with Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Signin with Facebook</span>
          </button>

          <p className="text-sm">
            Have a problem?
            <Link className="underline" href="/">
              {" "}
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
