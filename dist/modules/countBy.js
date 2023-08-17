export default function countBy(array) {
    return array.reduce((acc, curr) => {
        acc[curr] ? acc[curr] += 1 : acc[curr] = 1;
        return acc;
    }, {});
}
//# sourceMappingURL=countBy.js.map