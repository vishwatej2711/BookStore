
function About() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6 text-center text-pink-600">
        About Us
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center max-w-3xl mx-auto">
        Welcome to our platform! We are dedicated to bringing you curated books that highlight Indian literature, culture, and educational value. Whether you're looking for free open-access books or premium content, we’ve got you covered.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-pink-500">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Our mission is to promote Indian-origin literature and knowledge through a clean, accessible, and user-friendly platform. We aim to filter out inappropriate content and provide educational resources suitable for all ages.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-pink-500">What We Offer</h2>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
            <li>Curated free books from Open Library</li>
            <li>Paid courses and premium reads</li>
            <li>Focus on Indian authors and culture</li>
            <li>Safe content filtering</li>
            <li>Simple and responsive user experience</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
