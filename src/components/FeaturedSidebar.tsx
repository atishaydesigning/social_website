import { Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const featuredPublications = [
  {
    name: "The Free Press",
    author: "Bari Weiss",
    icon: "/placeholder.svg",
  },
  {
    name: "Dan Harris",
    author: "Dan Harris",
    icon: "/placeholder.svg",
  },
  {
    name: "Hung Up",
    author: "Hunter Harris",
    icon: "/placeholder.svg",
  },
  {
    name: "What To Cook When You Don't Feel Like Cooking",
    author: "Caroline Chambers",
    icon: "/placeholder.svg",
  },
  {
    name: "Kareem Abdul-Jabbar",
    author: "Kareem Abdul-Jabbar",
    icon: "/placeholder.svg",
  },
  {
    name: "Story Club with George Saunders",
    author: "George Saunders",
    icon: "/placeholder.svg",
  },
];

export const FeaturedSidebar = () => {
  return (
    <aside className="w-[300px] flex-shrink-0">
      <h2 className="text-xl font-bold mb-4">Featured</h2>
      <div className="space-y-4">
        {featuredPublications.map((pub) => (
          <div key={pub.name} className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={pub.icon} />
              <AvatarFallback>{pub.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-medium">{pub.name}</h3>
              <p className="text-sm text-substack-gray-400">By {pub.author}</p>
            </div>
            <Button size="icon" variant="ghost" className="text-substack-orange">
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        ))}
      </div>
    </aside>
  );
};