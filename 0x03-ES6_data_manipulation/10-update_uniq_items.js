const updateUniqueItems = (map) => {
    if (!(map instanceof Map)) {
        return
    }
    const array = Array.from(map)
    map.entries().forEach((item) => {
        if (item[1] === 1) item[1] = 100
    })
}
export default updateUniqueItems
