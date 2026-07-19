import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";

export async function Navbar() {
  const user = await getCurrentUser();

  return (
    <nav className="border-b border-border/10 bg-card shadow-sm">
      <div className="flex h-16 items-center justify-between px-6">
        <Link href="/dashboard" className="font-semibold text-lg">
          📊 Inventory System
        </Link>
        <div className="flex items-center gap-4">
          {user && (
            <span className="text-sm text-muted-foreground">
              {user.name} • {user.role}
            </span>
          )}
          <UserButton />
        </div>
      </div>
    </nav>
  );
}
