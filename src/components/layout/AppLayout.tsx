
import { ReactNode } from "react";
import { AppSidebar } from "./AppSidebar";
import { UserHeader } from "./UserHeader";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="h-screen overflow-hidden flex">
      <AppSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <UserHeader />
        <main className="flex-1 overflow-y-auto px-6 py-4 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}
