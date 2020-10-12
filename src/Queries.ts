import { gql } from "@apollo/client";

export const WELCOME_MESSAGE_QUERY = gql`
  query GetWelcomeMessage {
    welcome_message {
      content
    }
  }
`;
