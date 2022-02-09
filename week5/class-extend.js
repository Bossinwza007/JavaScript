class media{
    constructor(info){
        this.publicData = info.publicData;
        this.name = info.name;
    }

}

class song extends media{
    constructor(songdata){
        super(songdata);
        this.artist = songdata.artist;
    }
}
const mysong = new song({
    artist: "Queen",
    name : "Bohmian Rhapsody",
    publicData:1975,
});

console.log(mysong);