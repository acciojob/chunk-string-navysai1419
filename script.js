function stringChop(str, size) {
  if (!str || size <= 0) {
    return [];
  }

  const result = [];
  for (let i = 0; i < str.length; i += size) {
    const chunk = str.slice(i, i + size);
    result.push(chunk);
  }

  return result; 
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(stringChop(str, size));
