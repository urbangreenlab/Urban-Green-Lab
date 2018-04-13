angular
  .module('Urban')
  .factory("ContactFactory", function ($http, API) {
    return Object.create(null, {
        //GET ALL ContactS
        "getContacts": {
            value: function () {

                return $http({
                    "url": `${API.URL}/GetContactInfo`,
                    "method": "GET"
                }).then(response => {
                    const data = response.data
                    return data
                    console.log("Contact all response: ", JSON.stringify(data))
                })
            }
        },
        //GET SINGLE Contact
        "getContact": {
            value: function (id) {

                return $http({
                    "url": `${API.URL}/GetContactById?ContactID=${id}`,
                    "method": "GET"
                }).then(response => {
                    const data = response.data
                    return data
                    console.log("Contact single response: ", JSON.stringify(data))
                })
            }
        },
        //CREATE NEW OR EDIT EXISTING Contact
        "editContact": {
            //pass in the object you want to replace the existing Contact object with
            //if you wish to create a new Contact object then do not include the id
            value: function (contact) { //<- this Contact needs to be an object

                return $http({
                    "url": `${API.URL}/CreateContact`,
                    "data": contact,
                    "method": "PUT"
                }).then(response => {
                    const data = response.data
                    return data
                    console.log("Contact edit response: ", JSON.stringify(data))
                })
            }
        },
    })
})