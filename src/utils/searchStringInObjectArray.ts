export function searchStringInObjectArray<T>(
  searchObject: {
    [Key in keyof T]: T[Key];
  }[],
  searchString: string,
  limit = 20
): T[] {
  return searchObject
    .filter((object) => {
      return Object.keys(object).some((key) => {
        return `${object[key as keyof T]}`
          .replace(/\s\s*/g, " ") // Replace duplicate spaces, if there are any
          .toLowerCase() // normalize all search
          .includes(searchString.toLowerCase());
      });
    })
    .slice(0, 20);
}
