function reverseString (string)  {
  let reversed = '';

  for(let i = string.length - 1; i >= 0; i--)
  {
    reversed += string[i];
  }
  if(string === "")
  {
    return null;
  }
  if(reversed === string)
  {
  	return true
  }
  else
  {
    return reversed;
  }
}