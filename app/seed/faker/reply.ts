export const replies = [
  "It went ",
  "She was aware that things could go wrong. At this point, she had no idea just how wrong day the first falling star. It seemed . .",
  "Then came the night of the first falling star. It seemed She put the pen to paper  ",
  "She put the pen to paper ",
  " directly into his eyes",
  "She didn't like the food a word.",
  "Then came the night of the first falling star. It seemed .",
  "He walked down the bout to turn and be on his way when a deep chill filled his body.",
  "The leather jacked showed the scars of being his favorite for years. It wore those scars with pride, feeling that.",
  "Was it a whisper or was it the wind?.",
];

export const _replies = replies.map((reply) => {
  const hasReply = Math.floor(Math.random() * 2) + 1 === 1 ? true : false;
  return {
    reply: reply,
    hasReply,
  };
});
