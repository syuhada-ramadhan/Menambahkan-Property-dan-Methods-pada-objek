// objek mobil
const mobil = {
  warna: "silver",
  mundur() {
    console.log("R");
  },
};

// tambahkan Property bahan bakar
mobil.bahanBakar = "bensin";

// tambahkan Methods maju
mobil.maju = function () {
  console.log("D");
};

// cetak objek
console.log(mobil);
