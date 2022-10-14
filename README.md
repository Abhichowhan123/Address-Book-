# Address-Book-

//Get All contact
localhost:6000/api/all_contact
.
.
.
//Get All contact using pagination.
localhost:6000/api/all_contact/?page=1&limit=4
.
.
.
//save contact  or Post contact
localhost:6000/api/add_contact
post data 
{
    "name":"abhi",
    "address":"adra,purulia",
    "email":"abhi@gmail.com",
    "phone":125896479
}
.
.
.
//get single contact
localhost:6000/api/one_contact/id
localhost:6000/api/one_contact/634964b10a388d1fd8087f78
.
.
.
//Update contact
localhost:6000/api/edit_contact/:id
localhost:6000/api/one_contact/634964b10a388d1fd8087f78
.
.
.
//Delete contact
localhost:6000/api/delete_contact/:id
localhost:6000/api/one_contact/634964b10a388d1fd8087f78
.
.
.
database momgoDB
