"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../button/button";
import Input from "../input/input";
import { login } from "@/lib/auth/auth"; // Sesuaikan dengan path yang benar
import bcrypt from "bcryptjs"; // Import bcrypt untuk hashing
import { AlertDestructive } from "../alert/alert-error";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [loginSuccess, setLoginSuccess] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before starting the login operation
    try {
      // Hash password using bcrypt before login
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword); // SALT_ROUNDS = 10
      const role = await login(email, hashedPassword); // Use hashed password for login
      console.log(`Logged in as ${role}`);
      setLoginSuccess(true); // Set loginSuccess to true after successful login
      router.push("/dashboard");
    } catch (error) {
      setError("Please check your email and password.");
    } finally {
      setLoading(false); // Set loading to false after login operation is complete (whether successful or failed)
    }
  };

  return (
    <div className="flex flex-col items-center w-full justify-center h-screen">
      <h1 className="md:text-3xl text-xl font-bold mb-4">
        Sign in to SEA Salon
      </h1>
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-y-4 w-full max-w-sm mb-4"
      >
        {error && <AlertDestructive>{error}</AlertDestructive>}
        {loginSuccess && (
          <p className="text-green-500">
            Sign In successful! Redirecting to login...
          </p>
        )}
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
          className="justify-center font-bold rounded-lg py-2"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </Button>
      </form>
      <p className="text-muted-foreground text-sm">
        Don&apos;t have an account?{" "}
        <a href="/register" className="underline font-semibold">
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default Login;
