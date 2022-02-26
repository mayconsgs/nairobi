import Image from "next/image";
import { Button } from "../../components/Button";

const Error404 = () => {
  return (
    <main>
      <Image
        src="/img/error-404.png"
        width={480}
        height={480}
        alt="404 image"
      />
      <h1>Oops! This Page is Not Found.</h1>
      <span>The requested page dose not exist</span>
      <Button>Back to Home</Button>
    </main>
  );
};

export default Error404;
