export default function Events() {
  // Placeholder data for events
  const events = [
    {
      id: 1,
      title: "Coping with Cancer: Strategies for Patients and Caregivers",
      date: "March 15, 2024",
      time: "2:00 PM - 3:30 PM",
      description:
        "An interactive webinar providing coping strategies for cancer patients and their caregivers.",
      link: "/events/coping-with-cancer",
    },
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
  ];

  return (
    <section className="py-12 bg-gray-50 ">
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