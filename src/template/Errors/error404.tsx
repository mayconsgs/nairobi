import Image from "next/image";
import Link from "next/link";
import nairobiLogo from "../../../public/assets/nairobi-logo.svg";
import errorImage from "../../../public/img/error-404second.png";
import { Button } from "../../components/Button";
import * as S from "./style";

const Error404 = () => {
  return (
    <S.Container>
      <S.Content>
        <Image priority src={errorImage} layout="responsive" alt="404 image" />
        <S.TextContainer>
          <S.Title>Oops! This Page is Not Found.</S.Title>
          <S.Description>The requested page dose not exist.</S.Description>

          <Link href="/">
            <Button as="a">Back to Home</Button>
          </Link>
        </S.TextContainer>
      </S.Content>

      <S.LogoContainer>
        <Image src={nairobiLogo} alt="Nairobi logo" layout="responsive" />
      </S.LogoContainer>
    </S.Container>
  );
};

export default Error404;
