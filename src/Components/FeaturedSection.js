import Link from "next/link";

export default function FeaturedArticles() {
  const articles = [
    {
      id: 1,
      title: "Navigating Your Treatment Options",
      summary: "Coming Soon...",
      imageUrl: "/doctor.jpeg",
      link: "/blog/treatment-options",
    },
    {
      id: 2,
      title: "Understanding Emotional Support Resources",
      summary: "Coming Soon...",
      imageUrl: "/emo.jpeg",
      link: "/blog/emotional-support",
    },
    {
      id: 3,
      title: "Empowerment Through Knowledge",
      summary: "Coming Soon...",
      imageUrl: "/team.jpeg",
      link: "/blog/empowerment-knowledge",
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
        <h2 className="text-3xl font-light text-center">Featured Articles</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
