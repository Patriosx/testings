export const canReconfigure = (from, to) => {
  //   if (!from) throw new Error("1st parameter is required");
  if (typeof from !== "string") throw new Error("1st parameter must be a string");
  if (typeof to !== "string") throw new Error("2nd parameter must be a string");

  if (from.length !== to.length) return false;

  const hadUniqueSameLetters = new Set(from).size === new Set(to).size
  if (!hadUniqueSameLetters) return false;

  //letters transformation
  const transformations = {}

  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i];
    const toLetter = to[i];

    const storedLetter = transformations[fromLetter]
    if (storedLetter && storedLetter !== toLetter) return false
    //guardamos las transformaciones: { X: 'X', B: 'B', O: 'O' }
    transformations[fromLetter] = toLetter
    console.log(transformations)
  }
  return true;
};
// console.log(canReconfigure("XBOX", "XOBX"))//true
// console.log(canReconfigure("XBOX", "XXBO"))//false
// console.log(canReconfigure("XBOX", "YOBY"))//true
console.log(canReconfigure("XBOXY", "YOBXX"))//false
// console.log(canReconfigure("XBRXY", "YOBXX"))//false