function toggleForm() {
    ($('#form').css('width') === '0px') ? showForm() : hideForm();
    

}

function showForm() {
    $('#form').css('width', '20%')
    $('#form').css('visibility', 'visible')
    $('#form').css('padding', '1.5rem')

}

function hideForm() {
    $('#form').css('width', '0px')
    $('#form').css('visibility', 'hidden')
    $('#form').css('padding', '0px')
}

$('#form').on('submit', function (event) {
    console.log('hello')
    event.preventDefault();

    let contacts = JSON.parse(localStorage.getItem('contacts'))
    const newContactData = new FormData(event.target)
    let newContact = {}
    for (const item of objenewContactData.entries()) {
        newContact[item[0]]=item[1]
    }
    console.log(newContact)
    contacts.push(newContact)
    localStorage.setItem('contacts' , JSON.stringify(contacts))
    hideForm()
    renderTable()
})

function renderTable() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (!contacts) {
      localStorage.setItem('contacts', JSON.stringify([]));
      return;
    }
    contacts.map(contact => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
      <td>${contact.id}</td>
      <td>${contact.name}</td>
      <td>${contact.surname}</td>
      <td>${contact.phoneNumber}</td>
      <td>${contact.email}</td>
      <td>${contact.address}</td>
      <td>${contact.birthday}</td>
      <td>${contact.details}</td>
      <td class="buttons"> 
      <button type="button" 
      onclick="deletItem(${contact.id})" class="btn btn-danger"><i
    class="fa fa-trash" aria-hidden="true"></i></button>
  <button type="button" onclick="edit(${contact.id})" class="btn btn-primary"><i
    class="fa fa-pencil-square" aria-hidden="true"></i></button> </td>`;
      return $('tbody').append(tr);
    });
  }

  $('#form_contact').on('submit', function(event) {
    event.preventDefault();
    //
    let contacts = JSON.parse(localStorage.getItem('contacts'));
    const newContactData = new FormData(event.target).entries();
    const newContact = Object.fromEntries(newContactData);
    contacts.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    renderTable();
    hideForm();
    event.target.reset();

  


