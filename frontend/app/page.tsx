import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import UserList from "@/components/users/UserList";

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6">
      <header className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
            <p className="text-muted-foreground mt-1">
              Create, view, edit, and delete users in the system
            </p>
          </div>
          <Link href="/users/new">
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Add User</span>
            </Button>
          </Link>
        </div>
      </header>
      
      <main>
        <UserList />
      </main>
    </div>
  );
}