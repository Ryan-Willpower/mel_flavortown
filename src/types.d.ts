export interface IMessage {
  content: string | undefined;
}

export interface IMessageResponse {
  welcome_message: IMessage[];
}
