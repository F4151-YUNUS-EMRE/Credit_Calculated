const krediSec = document.querySelector(".krediSec")
const inputVade = document.querySelector(".inputVade")
const tutar = document.querySelector(".tutar")
const hesapla = document.querySelector(".hesapla")
const sonuclar = document.querySelector(".sonuclar")
let faiz = 0

let faizOranı = 0

let taksitTutarı = 0

hesapla.addEventListener("click", (e) => {
  e.preventDefault();

  if (!krediSec.value || !inputVade.value || !tutar.value) {
    alert(`Lütfen istenen bilgileri giriniz.`)
  }


  if (krediSec.value === "Konut Kredisi") {
    faizOranı = 1.29
  } else if (krediSec.value === "Ihtiyac Kredisi") {
    faizOranı = 1.99
  } else if (krediSec.value === "Arac Kredisi") {
    faizOranı = 1.79
  }

  faiz = faizOranı / 100

  taksitTutarı = tutar.value * (faiz * ((1 + faiz) ** inputVade.value)) / ((1 + faiz) ** inputVade.value - 1)

  sonuclar.innerHTML = `
    <h2 class="mt-3 text-warning">Kredi Bilgileri</h2>
    <table class="table table-bordered border-warning mt-4">
     <tr>
    <th>Kredi Miktari</th>
    <td>${tutar.value} ₺</td>
    <th>Kredi Tipi</th>
    <td>${krediSec.value}</td>
  </tr>
  <tr>
    <th>Vade</th>
    <td>${inputVade.value}</td>
    <th>Faiz Orani</th>
    <td>${faizOranı}</td>
  </tr>
  <tr>
    <th>Toplam Tutar</th>
    <td>${(taksitTutarı * inputVade.value).toFixed(2)} ₺</td>
    <th>Taksit Tutari</th>
    <td>${taksitTutarı.toFixed(2)} ₺</td>
  </tr>
 </table>`



})