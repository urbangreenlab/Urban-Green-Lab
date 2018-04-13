angular
  .module('Urban')
  .factory("EventFactory", function ($http, API) {
    return Object.create(null, {
        "cache": {
            value: null,
            writable: true
        },
        "getEvents": {
            value: function () {

                return $http({
                    "url": `${API.URL}/GetEventInfo`,
                    "method": "GET"
                }).then(response => {
                    const data = response.data
                    return data
                    console.log("Event all response: ", JSON.stringify(data))
                })
            }
        },
        "getEvent": {
            value: function (id) {

                return $http({
                    "url": `${API.URL}/GetEventByID?EventID=${id}`,
                    "method": "GET"
                }).then(response => {
                    const data = response.data
                    return data
                    console.log("Event single response: ", JSON.stringify(data))
                })
            }
        },
        "getEventType": {
            value: function (id) {

                return $http({
                    "url": `${API.URL}/GetEventType?TypeID=${id}`,
                    "method": "GET"
                }).then(response => {
                    const data = response.data
                    return data
                    console.log("Event single response: ", JSON.stringify(data))
                })
            }
        },
        "editEvent": {
            value: function (id, a, b, c, d) {

                return $http({
                    "url": `${API.URL}/CreateEvent/${id}`,
                    "data": a, b, c, d,
                    "method": "PUT"
                }).then(response => {
                    const data = response.data
                    return data
                    console.log("Event edit response: ", JSON.stringify(data))
                })
            }
        },
    })
})