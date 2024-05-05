import BrandLogo from "@/components/Brand-logo";
import LoginForm from "@/components/dashcraft/login-form";

export default function LoginPage() {
  return (
    <main className="flex bg-transparent h-screen overflow-hidden z-30 items-center relative justify-center md:h-screen">
      <div className="absolute w-full h-full top-0 left-0 z-20">
        <img
          src="/images/dash_craft_hero.jpg"
          alt="backimage"
          className="object-cover z-10 w-full"
        />
      </div>
      <div className="relative mx-auto z-40 flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-black p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <BrandLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
