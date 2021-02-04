import {useState} from 'react';
import Tabel from './Tabel.js';

function Menu() {
  const title = "Daftar Menu Restoran";
  const [menus, setMenu] = useState(
    [
      {idmenu : 28, idkategori : 31,  menu : "Apel", gambar : "apel.jpg", harga : 17000},
      {idmenu : 46, idkategori : 29,  menu : "Ayam Bakar", gambar : "ayambakar.jpg", harga : 10000},
      {idmenu : 37, idkategori : 29,  menu : "Bakso", gambar : "bakso.jpg", harga : 15000},
      {idmenu : 34, idkategori : 32,  menu : "Cireng Rujak", gambar : "cireng.jpg", harga : 10000},
      {idmenu : 45, idkategori : 30,  menu : "Es Degan Ori", gambar : "esdegan.jpg", harga : 7000},
    ]
  );
    return (
      <div className="App">
        <h1>{title}</h1>
          <Tabel menu={menus} title={title}/>
      </div>
    );
}
  
export default Menu;