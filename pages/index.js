import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Main from "../components/Main";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <Main>
        {/* Explore Section */}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.location}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>

        {/* Live Anywhere Section */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          {cardsData.map((item) => (
            <h1>{item.title}</h1>
          ))}
        </section>
      </Main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
