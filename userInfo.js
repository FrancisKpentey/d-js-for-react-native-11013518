function createUserProfiles(names, modifiedNames) {
    let profiles = [];

    for (let i = 0; i < names.length; i++) {
        profiles.push({
            initialName: names[i],
            modifiedName: modifiedNames[i],
            id: i + 1 // Auto-incremented id starting from 1
        });
    }

    return profiles;
}

module.exports = {
    createUserProfiles
};