// src/components/TableItem.jsx

const TableItem = ({
  nama,
  nilai_pekanan,
  nilai_bulanan,
  nilai_akhir,
  kehadiran,
}) => {
  // 🎯 Logika Kelulusan (clean & readable)
  let statusKelulusan;

  if (nilai_akhir >= 75 && kehadiran >= 80) {
    statusKelulusan = "Lulus";
  } else {
    statusKelulusan = "Tidak Lulus";
  }

  // 🎨 Styling sederhana berbasis status
  const statusStyle = {
    color: statusKelulusan === "Lulus" ? "limegreen" : "red",
    fontWeight: "bold",
  };

  return (
    <tr>
      <td>{nama}</td>
      <td>{nilai_pekanan}</td>
      <td>{nilai_bulanan}</td>
      <td>{nilai_akhir}</td>
      <td>{kehadiran}%</td>
      <td style={statusStyle}>{statusKelulusan}</td>
    </tr>
  );
};

export default TableItem;