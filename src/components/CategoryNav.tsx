import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const categories = [
  "Staff Picks",
  "Culture",
  "Technology",
  "Business",
  "U.S. Politics",
  "Finance",
  "Food & Drink",
  "Sports",
  "Art & Illustration",
  "World Politics",
  "Health Politics",
  "News",
  "Fashion & Beauty",
  "Music",
  "Faith & Spirituality",
  "Climate & Environment",
];

export const CategoryNav = () => {
  return (
    <ScrollArea className="w-full whitespace-nowrap border-b border-substack-gray-200">
      <div className="flex w-max space-x-4 p-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
              category === "Staff Picks"
                ? "bg-black text-white"
                : "bg-transparent hover:bg-substack-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};