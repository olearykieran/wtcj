export default function PatientStories() {
  // Placeholder data for patient stories
  const stories = [
    {
      id: 1,
      name: "Jordan Doe",
      diagnosis: "Breast Cancer",
      story:
        "My journey with breast cancer was challenging, but with the right support and care, I've been able to reclaim my health and joy. The guidance I received made all the difference in my treatment and recovery process.",
    },
    {
      id: 2,
      name: "Alex Smith",
      diagnosis: "Ovarian Cancer",
      story:
        "Facing ovarian cancer was the toughest phase of my life. The support system and the resources provided by Winning the Cancer Journey helped me navigate through the toughest times with hope and courage.",
    },
    {
      id: 3,
      name: "Casey Johnson",
      diagnosis: "Cervical Cancer",
      story:
        "Dealing with cervical cancer brought a lot of fear and uncertainty. The educational resources and emotional support I found here were invaluable in my fight against cancer.",
    },
  ];

  return (
    <section className="py-12 bg-one">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-12">Patient Stories</h2>
        <div className="flex justify-center items-center flex-wrap gap-10">
          {stories.slice(0, 2).map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-full shadow-lg p-6 flex flex-col items-center text-center"
              style={{
                width: "400px",
                height: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
              }}
            >
              <h3 className="text-xl font-light">{story.name}</h3>
              <p className="text-sm text-gray-500 my-2">{story.diagnosis}</p>
              <p className="text-gray-600 font-light">{story.story}</p>
            </div>
          ))}
          <div className="w-full flex justify-center">
            {stories.slice(2).map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-full shadow-lg p-6 flex flex-col items-center text-center"
                style={{
                  width: "400px",
                  height: "400px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                }}
              >
                <h3 className="text-xl font-light">{story.name}</h3>
                <p className="text-sm text-gray-500 my-2">{story.diagnosis}</p>
                <p className="text-gray-600 font-light">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
