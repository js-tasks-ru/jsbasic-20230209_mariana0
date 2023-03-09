/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement("TABLE");

    this.elem.innerHTML = `
      <thead>
        <tr>
          <td>Имя</td>
          <td>Возраст</td>
          <td>Зарплата</td>
          <td>Город</td>
          <td></td>
        </tr>
      </thead>
    `;
    let tableInner = rows.map(row => {
      let cellsWithData = Object.values(row).map(value => `<td>{value}</td>`).join('');

      return `
        <tr
        ${cellsWithData}
        <td><button>X</button></td>
        </tr>
      `;
    }).join('');

    this.elem.innerHTML += `
      <tbody>
      ${tableInner}
      </tbody>
    `;
    this.elem.addEventListener('click', (event) => this.onClick(event));
  }

  onClick(event) {
    if (event.target.tagName != 'BUTTON') {
      return;
    }


    let tr = event.target.closest('tr');

    tr.remove();
  }

}
