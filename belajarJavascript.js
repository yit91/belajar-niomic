// penulisan variabel pada java script ada 3 yaitu var let dan const
console.log("Materi Pertama");
var pesan = "Hello..";
let pesan2 = "Mari Belajar ";
const pesan3 = "Coding !!!";

console.log(pesan)
console.log(pesan2);
console.log(pesan3);
console.log(pesan + pesan2 + pesan3);

//Mengenal Perbedaan Variabel var let dan const
console.log("Materi Kedua");
pesan = "Rubah Pesan1 ";
pesan2 = "Rubah Pesan2";
//variabel const tidak bisa diubah karena akan eror saat diubah (cons merupakan variabel constanta dimana variabel nilainya tidak bisa diubah)
//pesan3 = "Rubah Pesan3"
console.log(pesan + pesan2);
console.log(pesan2);
if (true) {
  var pesan = 1;
  let pesan2 = 2;
  console.log(pesan2);
}
console.log(pesan);
console.log(pesan2);// pesan2 tidak akan berubah menjadi 2 karena hanya berlaku didalam kurung tsb
