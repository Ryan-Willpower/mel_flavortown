import * as React from "react";
import Container from "./Container";
import { useQuery } from "@apollo/client";
import { WELCOME_MESSAGE_QUERY } from "./Queries";
import { IMessageResponse, IMessage } from "./types";

const getMessage = (messages: IMessage[]): string =>
  (messages && messages.reduce((message) => message).content) || "";

export default function App() {
  const { loading, error, data } = useQuery<IMessageResponse>(
    WELCOME_MESSAGE_QUERY
  );

  if (error) {
    return (
      <Container>
        <h1>Oops! something went wrong!</h1>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container>
        <h1>Loading..</h1>
      </Container>
    );
  }

  const message = getMessage(data?.welcome_message as IMessage[]);

  return (
    <Container>
      <img
        alt="BRIKL LOGO"
        src="https://assets.website-files.com/5e27e758427751a2ba77c656/5e2818a9427751370d796132_BRIKL_LOGO.svg"
      />
      <h1>{message}</h1>
      <h2>Let's build something!</h2>
    </Container>
  );
}
