
// 1) За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за
// допомоги document.createElement. Вставити цей блок на сторінку.
//
//
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
// for (let i = 0; i < users.length; i++) {
//     const userDiv = document.createElement('div');
//
//     userDiv.style.backgroundColor = '#cdffff';
//     userDiv.style.color = '#000000';
//     userDiv.style.height = '100px';
//     userDiv.style.width = '300px';
//
//     userDiv.style.margin = '50px';
//     userDiv.style.padding = '30px';
//     userDiv.style.borderRadius = '5px';
//     userDiv.style.border = 'solid';
//     userDiv.style.borderColor = 'blue';
//
//     userDiv.innerHTML = `
//    Hello my name is ${users[i].name} <br>
//    I am ${users[i].age} years old <br>
//    Marriage status is ${users[i].status} <br>
//    I live in ${users[i].address.city}<br>
//    I am from ${users[i].address.country}<br>
// `;
//     document.body.appendChild(userDiv);
// }



// 2)  За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги
//    document.createElement. Блок з адресою зробити окремим блоком, з блоками для кожної
//    властивості
//
//
// const users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
//
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     const div = document.createElement('div');
//     const name = document.createElement('h3');
//     const age = document.createElement('p');
//     const status = document.createElement('p');
//     const address = document.createElement('div');
//
//     for (const item in user.address) {
//         const temp = document.createElement('div');
//         temp.innerHTML = user.address[item];
//         address.appendChild(temp);
//
//         address.style.backgroundColor = '#96eeff';
//         address.style.color = '#001d9b';
//         address.style.width = '300px';
//         address.style.height = '80px';
//         address.style.borderRadius = '10px';
//         address.style.margin = '10px 10px 50px 10px';
//         address.style.padding = '10px';
//         address.style.border = 'dotted';
//         address.style.borderColor = '#001d9b';
//
//         status.style.backgroundColor = '#e887ff';
//         status.style.color = '#001d9b';
//         status.style.width = '300px';
//         status.style.height = '50px';
//         status.style.borderRadius = '10px';
//         status.style.margin = '10px';
//         status.style.padding = '10px';
//         status.style.border = 'dotted';
//         status.style.borderColor = '#001d9b';
//
//         name.style.backgroundColor = '#fffa96';
//         name.style.color = '#001d9b';
//         name.style.width = '300px';
//         name.style.height = '50px';
//         name.style.borderRadius = '10px';
//         name.style.margin = '10px';
//         name.style.padding = '10px';
//         name.style.border = 'dotted';
//         name.style.borderColor = '#001d9b';
//
//         age.style.backgroundColor = '#ffbda8';
//         age.style.color = '#001d9b';
//         age.style.width = '300px';
//         age.style.height = '50px';
//         age.style.borderRadius = '10px';
//         age.style.margin = '10px';
//         age.style.padding = '10px';
//         age.style.border = 'dotted';
//         age.style.borderColor = '#001d9b';
//     }
//
//     name.innerText = user.name;
//     age.innerText = user.age;
//     status.innerText = user.status;
//
//     div.appendChild(name);
//     div.appendChild(age);
//     div.appendChild(status);
//     div.appendChild(address);
//
//     document.body.appendChild(div);
// }



// 3) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }
// ];
//
// document.write('<hr>');
// document.write('<hr>');
//
// const h1 = document.createElement('h1');
// h1.innerText = 'Правила бойцовского клуба';
// document.body.appendChild(h1);
//
// const wrap = document.createElement('div');
// wrap.id = 'wrap';
// document.body.appendChild(wrap);
// let i = 1;
// for (let item of rules) {
//     let rule = document.createElement('div');
//     rule.classList.add('rules', 'rule' + i);
//     rule.innerHTML = `<h3>${i}</h3><h2>${item.title}</h2> <p>${item.body}</p><br>`;
//     rule.style.backgroundColor = '#aef1f1';
//     wrap.appendChild(rule);
//     i++;
// }
//




