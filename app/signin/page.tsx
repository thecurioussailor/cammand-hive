import Image from "next/image";
import Link from "next/link";

const SigninPage = () => {
  return (
    <main className="w-full">
      <div className="pt-[122px] flex items-center justify-center">
        <div className="w-full max-w-[390px] p-8 text-center">
          <div className="mb-6">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
              <Image src="/logo.svg" alt="Command Hive" width={24} height={24} />
            </div>
            <h1 className="text-[28px] font-semibold text-[#14110E]">Sign In</h1>
            <p className="mt-2 text-sm text-[#667085]">
              Sign in to your account to continue with CommandHive
            </p>
          </div>

          <div className="space-y-3 text-left">
            <input
              type="email"
              placeholder="Your Email"
              className="h-12 w-full rounded-md border border-gray-300 px-3 text-base bg-white"
            />
            <input
              type="text"
              placeholder="Your Name (Optional)"
              className="h-12 w-full rounded-md border border-gray-300 px-3 text-base bg-white"
            />
            <button className="h-12 w-full rounded-md bg-slate-900 text-white font-medium hover:bg-slate-800">
              Send Sign In Link
            </button>
          </div>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs text-gray-500">Or</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="space-y-3">
            <button className="h-12 w-full rounded-md border border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-3">
              <span className="h-5 w-5 rounded-full bg-white border border-gray-300 flex items-center justify-center text-xs">G</span>
              <span className="text-sm font-medium text-gray-800">Continue With Google</span>
            </button>
            <button className="h-12 w-full rounded-md border border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-3">
              <span className="h-5 w-5 rounded-full bg-white border border-gray-300 flex items-center justify-center text-xs">GH</span>
              <span className="text-sm font-medium text-gray-800">Continue With Github</span>
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-slate-900 font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SigninPage;