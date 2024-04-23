export default function filtering(array, key, searchFilter) {
    const resultArray = array.filter((item) =>
        Boolean(
            item[key].filter((subItem) =>
                Boolean(searchFilter.filter((searchMem) => (searchMem != "" ? new RegExp(searchMem.toLowerCase(), "i").test(subItem) : false)).length)
            ).length
        )
    );
    return resultArray;
}
