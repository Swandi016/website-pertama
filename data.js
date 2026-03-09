const nama = "swandi apriano sagala"
let usia = 30;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if(usia > 10 && usia < 18) {
        // INI ADALAH KONSISI PERTAMA
        generasi = "generasi remaja";
    }
     else if(usia > 18 && usia < 30) {
        generasi ="generasi dewasa";
    } 
    else if(usia >= 30) {
        generasi = "generasi orang tua";
    }
    else if(usia > 1 && usia < 10) {
        generasi = "generasi anak anak";
    }
    else {
        // INI ADALAH JIKA KONDISI PERTAMA TIDAK TERPENUHI
        console.log('kamu siapa????')
    }
    return biodata.innerHTML = generasi;
}



console.log(nama);
console.log(usia);

generateBiodata();