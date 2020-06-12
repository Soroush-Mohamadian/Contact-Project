function toggleForm() {
    ($('#form').css('width') === '0px') ? showForm() : hideForm();
    

}

function showForm() {
    $('#form').css('width', '350px')
    $('#form').css('visibility', 'visible')
    $('#form').css('padding', '1.5rem')
    $('#toggle_btn').text('Cancel')

}

function hideForm() {
    $('#form').css('width', '0px')
    $('#form').css('visibility', 'hidden')
    $('#form').css('padding', '0px')
    $('#toggle_btn').text('Add New Contact')
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
});
  
// delete item
function deleteContact(id) {
    let contacts = JSON.parse(localStorage.getItem('contacts'));
    contacts = contacts.filter(item => item.id != id);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    $('tbody').html('');
    renderTable();
  }

  function deletItem(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.value) {
        deleteContact(id);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  function edit(id) {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    const editContact = contacts.find(item => item.id == id);
    $('#id_id_number').val(editContact.id);
    $('#id_name').val(editContact.name);
    $('#id_last_name').val(editContact.surname);
    $('#id_Phone_number').val(editContact.phoneNumber);
    $('#id_email').val(editContact.email);
    $('#id_address').val(editContact.address);
    $('#id_birthday').val(editContact.birthday);
    $('#id_details').val(editContact.details);
    showForm();
  }

