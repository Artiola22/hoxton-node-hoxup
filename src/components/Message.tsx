import { MessageProps } from "../Types/MessageProps"

function Message ({ message, outgoing }: MessageProps) {
  return (
    <li className={outgoing ? 'outgoing' : 'incoming'}>
      <p>{message.messageText}</p>
    </li>
  )
}

export default Message
