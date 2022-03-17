import Image from "next/image";
import Link from "next/link";
import errorImage from "../../../public/assets/error-500.svg";
import nairobiLogo from "../../../public/assets/nairobi-logo.svg";
import { Button } from "../../components/Button";
import * as S from "./style";

const Erro500 = () => {
  return (
    <S.Container>
      <S.Content>
        <Image priority src={errorImage} layout="responsive" alt="500 image" />
        <S.TextContainer>
          <S.Title>Oops! This Page is Not Working.</S.Title>
          <S.Description>The requested is Internal Server Error.</S.Description>

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

export default Erro500;
