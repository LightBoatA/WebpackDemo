import sum from './sum'
import './index.css'
console.log(sum(1, 2))
const ul = document.createElement('ul');
ul.className = 'my-ul';
for (let index = 0; index < 10; index++) {
    const element = document.createElement('li');
    element.innerText = '我是第'+ index + '个元素';
    ul.appendChild(element);
}
document.body.appendChild(ul);
const arr = ['第一', '第二', '第三'];

arr.forEach(item => console.log(item))