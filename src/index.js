import numeral from 'numeral';
import './index.css';

const numValue = numeral(1000).format('0,00,000.00');
console.log(`value is ${numValue}`);