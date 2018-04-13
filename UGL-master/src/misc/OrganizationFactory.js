angular
  .module('Urban')
  .factory("OrganizationFactory", function ($http, API) {
    return Object.create(null, {
        "getAllOrgs": {
            value: function () {

                return $http({
                    "url": `${API.URL}/GetOrganization`,
                    "method": "GET"
                }).then(response => {
                    const data = response.data
                    return data
                    console.log("Orgs all response: ", JSON.stringify(data))
                })
            }
        },
        "getSingleOrg": {
            value: function (id) {

                return $http({
                    "url": `${API.URL}/GetOrganizationById?orgId=${id}`,
                    "method": "GET"
                }).then(response => {
                    const data = response.data
                    return data
                    console.log("Event single response: ", JSON.stringify(data))
                })
            }
        },
        "editOrg": {
            value: function (id, a, b, c, d) {

                return $http({
                    "url": `${API.URL}/CreateOrganization?orgId=${id}`,
                    "data": a, b, c, d,
                    "method": "POST"
                }).then(response => {
                    const data = response.data
                    return data
                    console.log("Event edit response: ", JSON.stringify(data))
                })
            }
        },
    })
})