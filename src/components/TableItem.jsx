const TableItem = ({
  nama,
  nilai_pekanan,
  nilai_bulanan,
  nilai_akhir,
  kehadiran
}) => {

  // Logika kelulusan
  let statusKelulusan;

  if (nilai_akhir >= 75 && kehadiran >= 80) {
    statusKelulusan = "Lulus";
  } else {
    statusKelulusan = "Tidak Lulus";
  }

  return (
    <tr>
      <td>{nama}</td>
      <td>{nilai_pekanan}</td>
      <td>{nilai_bulanan}</td>
      <td>{nilai_akhir}</td>
      <td>{kehadiran}%</td>
      <td>{statusKelulusan}</td>
    </tr>
  );
};

export default TableItem;
