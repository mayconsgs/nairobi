import Image from "next/image";
import Link from "next/link";
import { ButtonStyle } from "../../components/Button";
import styles from "./styles.module.scss";

const Erro500 = () => {
  return (
    <main className={styles.error500}>
      <div>
        <Image
          src="/assets/error-500.svg"
          width={1000.02}
          layout="responsive"
          height={404.59}
          objectFit="cover"
          alt="404 image"
        />
        <div>
          <h1>Oops! This Page is Not Working.</h1>
          <span>The requested is Internal Server Error.</span>
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

export default Erro500;
