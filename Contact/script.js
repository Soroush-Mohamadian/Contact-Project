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

let contacts = [
    {
        id: '1',
        Name: 'Soroush',
        Surname: 'Mohamadian',
        Phone: '09219652265',
        Email: 'soroushmdn@gmail.com',
        Address: 'Tehran',
        birthday: '78/1/27',
        Details: 'Me'

    }, {
        id: '113',
        Name: 'Sina',
        Surname: 'Mohamadian',
        Phone: '09219652265',
        Email: 'sina@gmail.com',
        Address: 'Tehran',
        birthday: '78/1/27',
        Details: 'Brother'
    }
]
function renderTable() {
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${$('#id_id_number').innerText()}</td>
    <td>${contact.Name}</td>
    <td>${contact.Surname}</td>
    <td>${contact.phone}</td>
    <td>${contact.Email}</td>
    <td>${contact.Address}</td>
    <td>${contact.birthday}</td>
    <td>${contact.Details}</td>
    <td class="buttons"> 
    <button type="button" 
    onclick="deletItem(${contact.id})" class="btn btn-danger"><i
  class="fa fa-trash" aria-hidden="true"></i></button>
<button type="button" onclick="edit(${contact.id})" class="btn btn-primary"><i
  class="fa fa-pencil-square" aria-hidden="true"></i></button> </td>`;
    return $('tbody').append(tr);
  });


