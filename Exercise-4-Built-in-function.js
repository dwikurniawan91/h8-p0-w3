var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2() {
    input.splice(1,1,"Roman Alamsyah Elsharawy");
    input.splice(2,1,"Provinsi Bandar Lampung");
    input.push("Pria", "SMA Internasional Metro");
    //split
    var tanggal = input[3];
    var split = tanggal.split('/');
    var splitFirst = tanggal.split('/');
    
    var hasilSplit = split[1];
    
    switch (hasilSplit) {
        case '01': 
            console.log('January');
            break;
        case '02': 
            console.log('January');
            break;
        case '03': 
            console.log('February');
            break;
        case '04': 
            console.log('January');
            break;
        case '05': 
            console.log('January');
            break;
        case '06': 
            console.log('January');
            break;
        case '07': 
            console.log('January');
            break;
        case '08': 
            console.log('January');
            break;
        case '09': 
            console.log('January');
            break;
        case '10': 
            console.log('January');
            break;
        case '11': 
            console.log('January');
            break;
        case '12': 
            console.log('January');
            break;
    
        default:
            break;
    }
    //reverse
    var reverse = split.sort(function(a, b){return b - a});
    console.log(reverse);
    var join = splitFirst.join('-');
    console.log(join);
    //slice
    var nama = input[1];
    var slice = nama.slice(0,15);
    console.log(slice);
    return input;
}

console.log(dataHandling2());
