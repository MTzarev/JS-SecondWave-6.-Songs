function songs(arr) {
    let numOfSongs = arr.shift()
    let type = arr.pop();
    let finalList = [];
    for (let i = 0; i < arr.length; i++) {
        let curType = arr[i].split(`_`)[0];
        let curName = arr[i].split(`_`)[1];
        if (curType === type) {
            finalList.push(curName);
        }
        if (type === "all"){
            finalList.push(curName)
        }
    }
    console.log(finalList.join(`\n`));
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'all']);
