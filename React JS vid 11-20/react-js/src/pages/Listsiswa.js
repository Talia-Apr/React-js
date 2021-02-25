function Listsiswa(props) {
    const siswa = props.judul.map((item, a) => 
        <li key={a}> {item} </li>
        )
    return (
      <div className="App">
        {/* <p>{props.nama[2]}</p> */}
        <ul>
            {siswa}
        </ul>
      </div>
    );
  }
  
export default Listsiswa;