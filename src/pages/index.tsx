import Image from "next/image";

const Home = () => {
  return (
    <main>
      <Image
        src="/img/error-404.png"
        width={720}
        height={720}
        alt="404 image"
      />
    </main>
  );
};

export default Home;
