import Button from "../button/button";
import Input from "../input/input";

export default function Form() {
  return (
    <>
      <div className="flex flex-col items-center w-full justify-center h-screen">
        <h1 className="md:text-3xl text-xl font-bold mb-4">
          Sign in to SEA Salon
        </h1>
        <form className="flex flex-col gap-y-4 w-full max-w-sm mb-4">
          <Input />
          <Input />
          <Input />
          <Button className="justify-center font-bold rounded-lg py-2">
            Login
          </Button>
        </form>
        <p className="text-muted-foreground text-sm">
          Don&apos;t have an account?{" "}
          <a href="" className="underline font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </>
  );
}
