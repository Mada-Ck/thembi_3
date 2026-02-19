import { Link } from "wouter";
import { useLatestStories } from "../hooks/useCmsData";
import { Skeleton } from "./ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export default function NewsGrid() {
  const { data: stories, isLoading, isError } = useLatestStories(3);

  if (isError) {
    return <div className="text-center py-10 text-red-500">Failed to load news stories.</div>;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Latest News</h2>
            <p className="text-gray-600">Stay updated with our community stories and impact.</p>
          </div>
          <Link href="/news" className="text-primary font-semibold hover:underline">View All Stories</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
            Array(3).fill(0).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
              </Card>
            ))
          ) : (
            stories?.map((story: any) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden bg-gray-200">
                  {story.image && (
                    <img 
                      src={`${API_URL}${story.image.sizes?.thumbnail?.url || story.image.url}`} 
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {story.excerpt || "Read the latest update from The Thembi Project..."}
                  </p>
                  <Link href={`/stories/${story.id}`} className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
