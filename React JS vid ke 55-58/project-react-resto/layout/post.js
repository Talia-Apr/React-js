import {link} from './link.js';

export function post() {
    let data = {
        pelanggan : 'Pelanggan Axios export',
        alamat : 'Alamat Axios',
        telp : '098475884'
    }

    link.post('/pelanggan', data).then(res=>{

        console.log(res);

        let tampil = `<h2>${res.data.pesan}</h2>`;

        document.querySelector('#out').innerHTML = tampil;
    });
}