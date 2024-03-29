export default function Resources() {
  return (
    <section
      className="py-12 bg-white mt-24"
      style={{ borderBottom: "3px solid rgb(225, 0, 172, 0.08)" }}
    >
      <div className="container mx-auto mb-24 px-4">
        <h2 className="text-3xl font-light text-center">Resources for Caregivers</h2>
        <p className="mt-4 text-lg font-light text-center">
          Being a caregiver for someone with cancer comes with its own set of challenges.
          Here, we offer resources designed to support you in this crucial role.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Emotional Support</h3>
            <p>Coming Soon...</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Practical Tips</h3>
            <p>Coming Soon...</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Educational Resources</h3>
            <p>Coming Soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
