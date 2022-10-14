# Address-Book-
Add a new contact.
//Get All contact
localhost:6000/api/all_contact



Fetch the list of contacts with pagination.
//Get All contact using pagination.
localhost:6000/api/all_contact/?page=1&limit=4

//save contact  or Post contact
localhost:6000/api/add_contact
post data 
{
    "name":"abhi",
    "address":"adra,purulia",
    "email":"abhi@gmail.com",
    "phone":125896479
}

Fetch details of single contact.
//get single contact
localhost:6000/api/one_contact/id
localhost:6000/api/one_contact/634964b10a388d1fd8087f78


Update the given contact.
//Update contact
localhost:6000/api/edit_contact/:id
localhost:6000/api/one_contact/634964b10a388d1fd8087f78


Delete the given contact.
//Delete contact
localhost:6000/api/delete_contact/:id
localhost:6000/api/one_contact/634964b10a388d1fd8087f78



database momgoDB
