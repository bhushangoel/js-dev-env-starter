import {getData} from './api/userApi';
import './index.css';

getData('products').then(result => {
    let tableData = '';

    result.forEach(product => {
        tableData += `<tr>
                    <td>${product.name}</td>
                    <td>${product.category}</td>
                    <td>${product.desc}</td>
                    <td>${product.price}</td>
                    <td>${product.quantity}</td>
                    </tr>`
    });

    document.getElementById('products').innerHTML = tableData;
});