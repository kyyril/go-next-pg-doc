"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserForm from "@/components/users/UserForm";
import { fetchUserById } from "@/lib/api";
import { User } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

type Params = {
  id: string;
};

export default function EditUserPage() {
  const params = useParams();
  const userId = Number(params.id);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await fetchUserById(userId);
        setUser(data);
      } catch (err) {
        setError("Failed to load user. The user may not exist.");
        toast({
          title: "Error",
          description: "Failed to load user. The user may not exist.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, [userId, toast]);

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
          <h1 className="text-2xl font-bold tracking-tight">Edit User</h1>
        </div>
      </header>
      
      <main className="max-w-2xl mx-auto">
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center p-6 border rounded-lg">
            <p className="text-destructive mb-4">{error}</p>
            <Link href="/">
              <Button>Return to User List</Button>
            </Link>
          </div>
        ) : user ? (
          <UserForm user={user} isEditMode />
        ) : null}
      </main>
    </div>
  );
}