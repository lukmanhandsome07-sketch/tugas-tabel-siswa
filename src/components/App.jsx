import TableItem from "./TableItem";

function App() {
  const dataSiswa = [
    { nama: "Ahmad", nilai_pekanan: 80, nilai_bulanan: 85, nilai_akhir: 82, kehadiran: 90 },
    { nama: "Siti", nilai_pekanan: 70, nilai_bulanan: 65, nilai_akhir: 68, kehadiran: 85 },
    { nama: "Umar", nilai_pekanan: 90, nilai_bulanan: 92, nilai_akhir: 91, kehadiran: 75 },
    { nama: "Fatimah", nilai_pekanan: 88, nilai_bulanan: 85, nilai_akhir: 86, kehadiran: 100 }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Tabel Nilai Siswa</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Nilai Pekanan</th>
            <th>Nilai Bulanan</th>
            <th>Nilai Akhir</th>
            <th>Kehadiran</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {dataSiswa.map((siswa, index) => (
            <TableItem
              key={index}
              nama={siswa.nama}
              nilai_pekanan={siswa.nilai_pekanan}
              nilai_bulanan={siswa.nilai_bulanan}
              nilai_akhir={siswa.nilai_akhir}
              kehadiran={siswa.kehadiran}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
