let urlParams = new URLSearchParams(window.location.search);

let namaValue = urlParams.get("nama");
let emailValue = urlParams.get("email");
let asalValue = urlParams.get("asal");
let jenisKelaminValue = urlParams.get("jenis_kelamin");
let hobiValue = urlParams.getAll("hobi");
let komentarValue = urlParams.get("komentar");

// Menampilkan nilai data inputan ke dalam halaman
document.getElementById("namaValue").textContent = namaValue;
document.getElementById("emailValue").textContent = emailValue;
document.getElementById("asalValue").textContent = asalValue;
document.getElementById("jenisKelaminValue").textContent = jenisKelaminValue;
document.getElementById("komentarValue").textContent = komentarValue;

if (hobiValue.length > 0) {
    var hobiText = hobiValue.join(", ");
    document.getElementById("hobiValue").textContent = hobiText;
} else {
    document.getElementById("hobiValue").textContent = "Tidak ada hobi yang dipilih";
}
// tombol kembali dan mereset semua 
function kembali() {
    window.history.back();
}