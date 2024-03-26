export default function Events() {
  // Placeholder data for events
  const events = [
    {
      id: 1,
      title:
        "Catherine, Princess of Wales, revealed Friday she has been diagnosed with cancer and is in the early stages of treatment.",
      date: "March 23, 2024",
      time: "4 PM",
      description: "Interview on CNN",
      link: "https://app.frame.io/reviews/174fd8d9-582c-4e0d-8e61-ef5e41697647/57492cd1-c9f3-42c4-a67c-4cc4b646ef42",
    },

    {
      id: 2,
      title: "Empowering Women in the Face of Cancer: Navigating the Path Forward",
      date: "May 13-18, 2024",
      description: "Upcoming Conference",
      link: "https://somedocs.teachable.com/p/empowering-women-in-the-face-of-cancer?affcode=335065_brjymo9b",
    },

    /* 
    {
      id: 2,
      title: "Nutrition and Cancer: Eating Well During Treatment",
      date: "April 10, 2024",
      time: "11:00 AM - 12:30 PM",
      description:
        "Learn about nutrition during cancer treatment and how to manage dietary needs.",
      link: "/events/nutrition-and-cancer",
    },
      
    {
      id: 3,
      title: "Exercise for Cancer Survivors",
      date: "May 5, 2024",
      time: "10:00 AM - 11:00 AM",
      description:
        "Discover the benefits of exercise for cancer survivors and how to get started.",
      link: "/events/exercise-for-survivors",
    },  
     */
  ];

  return (
    <section
      className="py-12 bg-gray-50"
      style={{
        borderBottom: "3px solid rgb(0, 242, 223, .08)",
      }}
    >
      <div className="container mx-auto px-4 mt-24 mb-24">
        <h2 className="text-3xl font-light text-center">Events & Webinars</h2>
        <div className="mt-10">
          {events.map((event) => (
            <div key={event.id} className="mb-8 p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">{event.title}</h3>
              <p className="mt-1 text-gray-500">
                {event.date} | {event.time}
              </p>
              <p className="mt-4">{event.description}</p>
              <a
                href={event.link}
                className="mt-6 inline-block bg-purple-500 text-white rounded-lg px-6 py-3 hover:bg-one"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
