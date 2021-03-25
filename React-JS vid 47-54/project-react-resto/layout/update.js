import {link} from './link.js';

export function ubah() {
    let id = 1;

    let data = {
        pelanggan : 'Update pelanggan baru',
        alamat : 'Update alamat baru',
        telp : '09874857378'
    };

    link.put('/pelanggan/'+id, data).then(res=>{

        console.log(res);

        let tampil = `<h2>${res.data.pesan}</h2>`;

        document.querySelector('#out').innerHTML = tampil;
    });
}