import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-b from-slate-50 to-slate-100 p-4">
      <div className="text-center">
        <h1 className="mb-2 text-4xl font-bold text-slate-900">
          Sales & Inventory Management
        </h1>
        <p className="mb-8 text-lg text-slate-600">
          Manage your inventory and sales orders efficiently
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/sign-in">
            <Button>Sign In</Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="outline">Sign Up</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
