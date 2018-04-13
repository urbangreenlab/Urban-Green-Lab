angular
  .module('Urban')
  .factory("EventFactory", function ($http, API) {
    return Object.create(null, {
        //GET ALL EVENTS
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
        //GET SINGLE EVENT
        "getEvent": {
            value: function (id) {

                return $http({
                    "url": `${API.URL}/GetEventById?eventID${id}`,
                    "method": "GET"
                }).then(response => {
                    const data = response.data
                    return data
                    console.log("Event single response: ", JSON.stringify(data))
                })
            }
        },
        //CREATE NEW OR EDIT EXISTING EVENT
        //pass in the object you want to replace the existing event object with
        //if you wish to create a new event object then do not include the id

        //Updating the EventContactRole needs an array of ojects like this...
        // "EventContactRole": [
            //     {
                //       "ContactID": 1,
                //       "EventRoleID": 2
                //     },
                //     {
                    //       "ContactID": 1,
                    //       "EventRoleID": 2
                    //     }
                    //   ],
        "editEvent": {
            value: function (event) { //<- this event needs to be an object
                return $http({
                    "url": `${API.URL}/CreateEvent`,
                    "data": event,
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