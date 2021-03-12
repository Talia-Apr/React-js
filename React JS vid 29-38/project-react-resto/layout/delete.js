import {link} from './link.js';

export function hapus() {
    let id = 4;
    link.delete('/pelanggan/'+id).then(res=>{

        console.log(res);

        let tampil = `<h2>${res.data.pesan}</h2>`;

        document.querySelector('#out').innerHTML = tampil;
    });
}