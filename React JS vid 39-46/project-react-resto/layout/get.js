import {link} from './link.js';

export function get() {
    link.get('/pelanggan').then(res=>{

        console.log(res);

        let tampil = `<table class="table">
            <tr>
                <th>Id</th>
                <th>Pelanggan</th>
                <th>Alamat</th>
                <th>Telpon</th>
            </tr>
        `;
    
        res.data.forEach(el => {
            tampil += `<tr>
                    <td>${el.idpelanggan}</td>
                    <td>${el.pelanggan}</td>
                    <td>${el.alamat}</td>
                    <td>${el.telp}</td>
            </tr>`;
        });

        tampil += `</table>`;

        document.querySelector('#out').innerHTML = tampil;

    });

}