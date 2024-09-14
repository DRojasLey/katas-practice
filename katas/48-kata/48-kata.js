function groupAnagrams(strs) {
    const keyIndexRelations = {};
    strs.forEach((element, index) => {
        let sortedWord = element.split('').sort().join('');
        if (!keyIndexRelations[sortedWord]) {
            keyIndexRelations[sortedWord] = [index];
        } else {
            keyIndexRelations[sortedWord].push(index);
        }
    });
    console.log(Object.values(keyIndexRelations))
    const result = Object.values(keyIndexRelations).map(indexes => {
        return indexes.map(index => strs[index]);
    });

    return result;
};