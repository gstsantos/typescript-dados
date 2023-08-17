
export interface CountList {
  [key: string]: number;
}

export default function countBy(array: (string | number)[]) {
  return array.reduce((acc: CountList, curr) => {
    acc[curr] ? acc[curr] += 1 : acc[curr] = 1;
    return acc;
  }, {})
}