import * as React from 'react';

type EmojiProps = {
  label: string,
  symbol: string
}

const Emoji: React.FC<EmojiProps> = ({label, symbol}) => (
  <span role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
);

export default Emoji;