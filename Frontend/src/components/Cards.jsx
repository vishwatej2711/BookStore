
import PropTypes from "prop-types";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="card w-72 h-[500px] bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border flex flex-col">
          <figure className="h-60 w-full overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover object-center"
            />
          </figure>
          <div className="card-body flex flex-col justify-between px-4 py-2">
            <div>
              <h2 className="card-title text-lg font-semibold truncate">
                {item.name}
              </h2>
              <div className="badge badge-secondary mb-2">{item.category}</div>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                {item.title}
              </p>
            </div>
            <div className="card-actions mt-4 justify-between items-end">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-3 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Read More
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

Cards.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default Cards;
