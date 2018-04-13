angular
  .module('Urban')
  .factory("ContactTypeFactory", function ($http, API) {
    return Object.create(null, {
        //GET ALL CONTACT TYPES
        "getContactTypes": {
            value: function () {
                return $http({
                    "url": `${API.URL}/GetContactType`,
                    "method": "GET"
                }).then(response => {
                    const data = response.data
                    return data
                    console.log("Contact Type all response: ", JSON.stringify(data))
                })
            }
        }
    })
})