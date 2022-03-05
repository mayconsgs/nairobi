import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/Button";
import * as S from "./style";

const Error404 = () => {
  return (
    <S.Container>
      <S.Content>
        <Image
          priority
          src="/img/error-404.png"
          width={980}
          layout="responsive"
          height={560}
          objectFit="cover"
          alt="404 image"
        />
        <S.TextContainer>
          <S.Title>Oops! This Page is Not Found.</S.Title>
          <S.Description>The requested page dose not exist.</S.Description>

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

export default Error404;
