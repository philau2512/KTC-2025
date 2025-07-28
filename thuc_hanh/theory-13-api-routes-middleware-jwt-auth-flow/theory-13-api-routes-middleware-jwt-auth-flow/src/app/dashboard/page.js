"use client";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <h1>Welcome to Dashboard (Protected)</h1>
      <Link href="/articles">
        <button style={{ marginTop: "16px" }}>Go to Articles</button>
      </Link>
    </div>
  );
}
