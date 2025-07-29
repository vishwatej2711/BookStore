import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from "./Cards";
import { useSearch } from "../context/SearchContext";

function Freebook() {
  const [books, setBooks] = useState([]);
  const { searchTerm } = useSearch();

  useEffect(() => {
    const getBooks = async () => {
      try {
        const query = searchTerm ? searchTerm : "india";
        const res = await fetch(
          `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
        );
        const data = await res.json();

        const filtered = (data.docs || []).filter((book) => {
          const title = book.title?.toLowerCase() || "";
          const subjects = (book.subject || []).join(" ").toLowerCase();
          const author = (book.author_name || []).join(" ").toLowerCase();

          const blockWords = ["romance", "sex", "adult"];
          const isBlocked = blockWords.some((word) =>
            title.includes(word) ||
            subjects.includes(word) ||
            author.includes(word)
          );

          return !isBlocked;
        });

        setBooks(filtered);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };

    getBooks();
  }, [searchTerm]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Books</h1>
        <p>Browse free books sourced from Open Library.</p>
      </div>

      <div className="mt-6">
        {books.length > 0 ? (
          <Slider {...settings}>
            {books.map((item) => (
              <Cards
                key={item.key}
                item={{
                  id: item.key,
                  name: item.title,
                  title: item.author_name?.join(", ") || "Unknown Author",
                  price: 0,
                  category: "free",
                  image: item.cover_i
                    ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
                    : "https://via.placeholder.com/150x220?text=No+Cover",
                  link: `https://openlibrary.org${item.key}`,
                }}
              />
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-600 mt-8">
            No books found for "{searchTerm}"
          </p>
        )}
      </div>
    </div>
  );
}

export default Freebook;
