export default function PatientStories() {
  // Placeholder data for patient stories
  const stories = [
    {
      id: 1,
      name: "Sloan K Review",
      diagnosis: "Breast Cancer",
      story:
        "Dr Troso is a kind warm and experienced doctor. She treated me with stage 3 breast cancer . I owe her my life. I am a cancer survivor of 6 wonderful years I highly recommend. Dr Troso",
    },
    {
      id: 2,
      name: "Frazer B",
      story:
        "II will forever be grateful to Dr. Troso-Sandoval, she was the first person my wife and I met with after she was diagnosed. She genuinely cares for my wife and all of her patients. She is accessible to answer any questions or concerns we  have.",
    },
    {
      id: 3,
      name: "MaryAnn D",

      story:
        "Dr Tiffany Troso from MSK is my oncologist. She is an excellent doctor and person. Her professionalism shines. I highly recommend her. She is always looking for ways to improve my quality of life. Thank you Dr Troso and your Staff.",
    },
  ];

  return (
    <section
      style={{
        background:
          "linear-gradient(to right, rgba(225, 0, 172, 0.1), rgba(0, 242, 224, 0.1))",
        borderBottom: "3px solid rgb(0, 242, 223, .08)",
      }}
      className="py-12 bg-one"
    >
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
