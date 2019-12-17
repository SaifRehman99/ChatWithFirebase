class UI {
    constructor(list) {
        this.list = list
    }

    clearList() {
        this.list.innerHTML = '';
    }

    renderList(data) {

        let html;
        let timestamp = moment(data.created_at.toDate()).fromNow();

        html = `<li class="list-group-item">
      <span class="font-weight-bold">${data.username}:</span> ${data.message}
      <div class="font-weight-light">${timestamp}</div>
      </li>
      `;

        this.list.innerHTML += html;
    }
}