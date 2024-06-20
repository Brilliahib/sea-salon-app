// components/Register.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../button/button";
import Input from "../input/input";
import { register } from "@/lib/auth/auth"; // Assuming this is correctly imported from your auth file
import { AlertDestructive } from "../alert/alert-error";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [registrationSuccess, setRegistrationSuccess] =
    useState<boolean>(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await register(fullName, email, password);
      setRegistrationSuccess(true);
    } catch (error: any) {
      setError(error.message as string); // Asserting 'error' as string
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full justify-center h-screen">
      <h1 className="md:text-3xl text-xl font-bold mb-4">
        Register for SEA Salon
      </h1>
      <form
        onSubmit={handleRegister}
        className="flex flex-col gap-y-4 w-full max-w-sm mb-4"
      >
        {error && <AlertDestructive>{error}</AlertDestructive>}
        {registrationSuccess ? (
          <p className="text-green-500">
            Registration successful! Redirecting to login...
          </p>
        ) : (
          <>
            <Input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
            />
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <Button
              type="submit"
              className="justify-center font-bold rounded-lg py-2"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </Button>
          </>
        )}
      </form>
      <p className="text-muted-foreground text-sm">
        Already have an account?{" "}
        <a href="/login" className="underline font-semibold">
          Sign In
        </a>
      </p>
    </div>
  );
};

export default Register;
