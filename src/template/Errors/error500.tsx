import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/Button";
import * as S from "./style";

const Erro500 = () => {
  return (
    <S.Container>
      <S.Content>
        <Image
          priority
          src="/assets/error-500.svg"
          width={1000.02}
          layout="responsive"
          height={404.59}
          objectFit="cover"
          alt="500 image"
        />
        <S.TextContainer>
          <S.Title>Oops! This Page is Not Working.</S.Title>
          <S.Description>The requested is Internal Server Error.</S.Description>

          <Link href="/">
            <Button as="a">Back to Home</Button>
          </Link>
        </S.TextContainer>
      </S.Content>

      <S.LogoContainer>
        <Image
          src="/assets/nairobi-logo.svg"
          layout="fill"
          objectFit="contain"
          alt="Nairobi logo"
        />
      </S.LogoContainer>
    </S.Container>
  );
};

export default Erro500;
