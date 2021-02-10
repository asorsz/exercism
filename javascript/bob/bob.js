export const hey = (message) => {
  if (!message.match(/[\w?]/g) ) return 'Fine. Be that way!'
  
  let isQuestion = message.trim().slice(-1) === '?';
  let isShout = message.match(/[A-Z]/g) && !message.match(/[a-z]/g);
  
  if (isQuestion && !isShout) return 'Sure.';
  if (!isQuestion && isShout) return 'Whoa, chill out!';
  if (isQuestion && isShout) return 'Calm down, I know what I\'m doing!';
  return 'Whatever.';  
};
