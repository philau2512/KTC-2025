"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/authService";

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(form);
      router.refresh();
      setTimeout(() => {
        router.push("/dashboard");
      }, 200);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login form</h2>
      <input
        name="username"
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <br />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
