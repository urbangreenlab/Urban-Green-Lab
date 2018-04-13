angular
  .module('Urban')
  .factory("ProgramRelationFactory", function ($http, API) {
    return Object.create(null, {
        //GET ALL Program Relation
        "GetProgramRelations": {
            value: function () {
                return $http({
                    "url": `${API.URL}/GetProgramRelation`,
                    "method": "GET"
                }).then(response => {
                    const data = response.data
                    return data
                    console.log("Program Relation all response: ", JSON.stringify(data))
                })
            }
        }
    })
})