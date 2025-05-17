import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserForm from "@/components/users/UserForm";

export default function NewUserPage() {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Link href="/">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">Create New User</h1>
        </div>
      </header>
      
      <main className="max-w-2xl mx-auto">
        <UserForm />
      </main>
    </div>
  );
}