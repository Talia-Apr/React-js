import Listsiswa from './Listsiswa.js';

function Siswa() {
    // const siswa = "Radin";
    const nama = ['Jane', 'Hugo', 'Vyn'];

    return (
      <div className="App">
        <h1>Siswa Page</h1>
        {/* <Listsiswa nama="Lucy" /> */}
        {/* <Listsiswa nama={siswa} /> */}
        <Listsiswa judul={nama} />
      </div>
    );
  }
  
export default Siswa;