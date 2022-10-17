import AuthorData from "./AuthorData.js";
let authordata = new AuthorData()

let show = function () {
    console.log(authordata)
    authordata.getProfile().then(data => {
        authordata.showProfile(data);
        authordata.leftright(data);
    }).catch(e => console.log(e));
}
show();

//leftrightlimit
