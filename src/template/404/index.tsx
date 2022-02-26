import Image from "next/image";
import Link from "next/link";
import { ButtonStyle } from "../../components/Button";
import styles from "./styles.module.scss";

const Error404 = () => {
  return (
    <main className={styles.error404}>
      <div>
        <Image
          priority
          src="/img/error-404.png"
          width={980}
          layout="responsive"
          height={560}
          objectFit="cover"
          alt="404 image"
        />
        <div>
          <h1>Oops! This Page is Not Found.</h1>
          <span>The requested page dose not exist.</span>

          <Link href="/">
            <a className={ButtonStyle.raised}>Back to Home</a>
          </Link>
        </div>
      </div>

      <figure>
        <Image
          className={styles.logo}
          src="/assets/nairobi-logo.svg"
          layout="fill"
          objectFit="contain"
          alt="Nairobi logo"
        />
      </figure>
    </main>
  );
};

export default Error404;
