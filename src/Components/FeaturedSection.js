import Link from "next/link";

export default function FeaturedArticles() {
  const articles = [
    {
      id: 1,
      title: "Book A Discovery Call",
      summary: "Click here to schedule a personalized one on one call",
      imageUrl: "/doctor.jpeg",
      link: "https://calendly.com/drtiffanytrososandoval",
    },
    {
      id: 2,
      title: "Cancer Coaching and Concierge Services",
      summary: "Coming Soon...",
      imageUrl: "/emo.jpeg",
      link: "/",
    },

    {
      id: 3,
      title: "Media Showcase",
      summary: "Our latest media updates",
      imageUrl: "/media.jpeg",
      link: "/media", // Update this to point to the new page
    },
    {
      id: 4,
      title: "Events",
      summary: "Upcoming Events and Conferences",
      imageUrl: "/forest.jpeg",
      link: "https://somedocs.teachable.com/p/empowering-women-in-the-face-of-cancer?affcode=335065_brjymo9b",
    },
  ];

  return (
    <section
      className="py-12 bg-white mt-24 "
      style={{
        borderBottom: "3px solid rgb(225, 0, 172, 0.08)",
      }}
    >
      <div className="max-w-6xl mb-24 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-center">Featured</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className="flex-shrink-0 h-56 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${article.imageUrl})` }}
              >
                {" "}
                {/* CSS background image */}
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <Link href={article.link} className="block mt-2">
                    <p className="text-xl font-light text-gray-900">{article.title}</p>
                    <p className="mt-3 text-base font-light text-gray-500">
                      {article.summary}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
