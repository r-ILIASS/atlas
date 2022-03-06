import { useRouter } from "next/router";
import { format } from "date-fns";
// components
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import MapContainer from "../components/Map";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM");
  const formattedEndDate = format(new Date(endDate), "dd MMMM");
  const range = `${formattedStartDate} to ${formattedEndDate}`;

  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guests`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ options <span className="text-red-400">from {range}</span> for{" "}
            {numberOfGuests} guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden md:inline-flex space-x-2 mb-4 text-gray-800 whitespace-nowrap">
            <p className="pill">Cancellation Flexibility</p>
            <p className="pill">Type of Place</p>
            <p className="pill">Price</p>
            <p className="pill">Rooms</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                title={item.title}
                location={item.location}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>

        {/* Map */}
        <div className="hidden xl:inline-flex xl:min-w-[600px]">
          <MapContainer searchResults={searchResults} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
