function kirimData(event) {
    event.preventDefault();

    var nama = document.getElementById("nama").value;
    var tanggal = document.getElementById("tanggal").value;
    var mySelect = document.getElementById("mySelect").value;
    var tiketRadio = document.querySelector('input[name="tiket"]:checked');
    var tiket = tiketRadio ? tiketRadio.value : "";
    var harga = document.getElementById("harga").value;
    var total = document.getElementById("total").value;

    alert("Data Tiket Konser - Last Child :\n\n" +
        "Nama: " + nama + "\n" +
        "Tanggal Lahir: " + tanggal + "\n" +
        "Jumlah Tiket: " + mySelect + "\n" +
        "Jenis Tiket: " + tiket + "\n" +
        "Harga Tiket: " + harga + "\n" +
        "Total Harga Tiket: " + total);
}

var form = document.getElementById("ticketForm");
form.addEventListener("submit", kirimData);

video.addEventListener("click", function video(){
    alert("It's a Clip of Video from Last Child Group")
});

audio.addEventListener("click", function audio(){
    alert("It's a Clip of Audio from Last Child Group")
});

foto.addEventListener("click", function foto(){
    alert("It's a Clip of Photos from Last Child Group")
});

