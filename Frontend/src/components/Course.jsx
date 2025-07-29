import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Course() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const query = "india";
        const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
        const data = await res.json();

        const filtered = (data.docs || []).filter((book) => {
          const title = book.title?.toLowerCase() || "";
          const subjects = (book.subject || []).join(" ").toLowerCase();
          const author = (book.author_name || []).join(" ").toLowerCase();

          const blockWords = ["romance", "sex", "adult", "erotica"];
          const isBlocked = blockWords.some((word) =>
            title.includes(word) || subjects.includes(word) || author.includes(word)
          );

          return !isBlocked;
        });

        const paidBooks = filtered.map((book) => ({
          id: book.key,
          name: book.title,
          title: book.author_name?.join(", ") || "Unknown Author",
          price: Math.floor(Math.random() * 300) + 100,
          category: "paid",
          image: book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : "https://via.placeholder.com/150x220?text=No+Cover",
          link: `https://openlibrary.org${book.key}`,
        }));

        setBooks(paidBooks);
      } catch (error) {
        console.error("Error fetching paid Indian books:", error);
      }
    };

    getBooks();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          Explore <span className="text-pink-500">Indian-Origin</span> Paid Books
        </h1>
        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
          These curated books highlight Indian culture, literature, and education. Displayed with sample prices.
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>

      <div className="mt-12">
        {books.length > 0 ? (
          <Slider {...settings}>
            {books.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-600 mt-8">No suitable books found.</p>
        )}
      </div>
    </div>
  );
}

export default Course;
