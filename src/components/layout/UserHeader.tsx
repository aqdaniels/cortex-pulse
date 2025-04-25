
import { Bell, HelpCircle, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

export function UserHeader() {
  const { toast } = useToast();

  const showNotificationToast = () => {
    toast({
      title: "New Deployment",
      description: "API service v2.3.1 was deployed successfully",
      variant: "default",
    });
  };

  return (
    <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-background">
      <div className="flex items-center space-x-4 w-1/3">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            className="pl-8 bg-muted border-none" 
            placeholder="Search anything..." 
            onClick={() => {
              toast({
                title: "Search Coming Soon",
                description: "Advanced search functionality is under development",
                variant: "default",
              });
            }}
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative"
          onClick={showNotificationToast}
        >
          <Bell className="h-5 w-5" />
          <Badge 
            className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-cortex-accent text-white"
          >
            3
          </Badge>
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => {
            toast({
              title: "Help Center",
              description: "The help center will be available in the next update",
              variant: "default",
            });
          }}
        >
          <HelpCircle className="h-5 w-5" />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="" alt="User" />
                <AvatarFallback className="bg-cortex-primary text-white">JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Jane Doe</p>
                <p className="text-xs leading-none text-muted-foreground">
                  jane.doe@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
