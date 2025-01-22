import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Header = () => {
  return (
    <header className="border-b border-substack-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold">Search</h1>
          <div className="relative flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-substack-gray-400" />
            <Input
              className="pl-10 w-[400px] bg-substack-gray-100 border-none"
              placeholder="Search Substack"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-substack-text">
            Sign in
          </Button>
          <Button className="bg-substack-orange hover:bg-substack-orange/90 text-white">
            Create account
          </Button>
        </div>
      </div>
    </header>
  );
};