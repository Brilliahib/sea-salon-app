import Image from "next/image";
import Form from "@/components/form/form";

export default function Login() {
  return (
    <>
      <section className="md:flex md:grid md:grid-cols-2">
        <div className="hidden md:block relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Salon"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div>
          <Form />
        </div>
      </section>
    </>
  );
}
