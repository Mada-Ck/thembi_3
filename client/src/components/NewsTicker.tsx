import { useLatestStories } from "../hooks/useCmsData";
import { Skeleton } from "./ui/skeleton";

export default function NewsTicker() {
  const { data: stories, isLoading } = useLatestStories(5, 'Thembi');

  if (isLoading) return <Skeleton className="h-10 w-full" />;
  if (!stories || stories.length === 0) return null;

  return (
    <div className="bg-primary/10 border-y border-primary/20 py-2 overflow-hidden whitespace-nowrap">
      <div className="container flex items-center">
        <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded mr-4 uppercase">Thembi News</span>
        <div className="animate-marquee inline-block">
          {stories.map((story: any) => (
            <span key={story.id} className="text-sm font-medium mx-8 text-primary hover:underline cursor-pointer">
              {story.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
