import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import { FC } from "react";
const { fontFamily } = require("tailwindcss/defaultTheme");

interface EmailTemplatePorps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: FC<EmailTemplatePorps> = ({
  name,
  email,
  message,
}) => (
  <Tailwind
    config={{
      theme: {
        extend: {
          colors: {
            colors: {
              ownbg: "#fffef4",
            },
          },
        },
      },
    }}
  >
    <Html>
      <Head>
        <Body className="bg-ownbg font-gt text-slate-900">
          <Container>
            <Section>
              <p className="p-4 text-lg">{"<vignesh />"}</p>
              <hr className="my-[10px] border-[2px] border-slate-400" />
              <Text className="text-base ">{message}</Text>
              <hr className="my-[10px] border-[2px] border-slate-400" />
              <Text className="text-sm">Mail from:{email}</Text>
            </Section>
          </Container>
        </Body>
      </Head>
    </Html>
  </Tailwind>
);

export default EmailTemplate;
