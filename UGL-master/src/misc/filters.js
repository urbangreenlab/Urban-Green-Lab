App.filter('orderObjectBy', function () {
    return function (input, attribute) {
      if (!angular.isObject(input)) return input;
  
      var array = [];
      for (var objectKey in input) {
        array.push(input[objectKey]);
      }
  
      array.sort(function (a, b) {
        a = parseInt(a[attribute]);
        b = parseInt(b[attribute]);
        return a - b;
      });
      return array;
    }
  })
  .filter('unique', function () {
  
    return function (items, filterOn) {
  
      if (filterOn === false) {
        return items;
      }
  
      if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
        var hashCheck = {}, newItems = [];
  
        var extractValueToCompare = function (item) {
          if (angular.isObject(item) && angular.isString(filterOn)) {
            return item[filterOn];
          } else {
            return item;
          }
        };
  
        angular.forEach(items, function (item) {
          var valueToCheck, isDuplicate = false;
  
          for (var i = 0; i < newItems.length; i++) {
            if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
              isDuplicate = true;
              break;
            }
          }
          if (!isDuplicate) {
            newItems.push(item);
          }
  
        });
        items = newItems;
      }
      return items;
    };
  });
  App.filter('percentage', ['$filter', function ($filter) {
    return function (input, decimals) {
      if (input >= 0) {
        return $filter('number')(input * 100, decimals) + '%';
      }
      else {
        var negPercent = '(' + $filter('number')(Math.abs(input) * 100, decimals) + '%)'
        return negPercent;
      }
    };
  }]);
  App.filter('currencyNew', ['$filter', function ($filter) {
    return function (input, decimals) {
      if (input >= 0) {
        return '$' + $filter('number')(input, decimals);
      }
      else {
        var negativeNum = $filter('number')(Math.abs(input), decimals)
        return '($' + negativeNum + ')';
      }
    };
  }]);
  App.filter('split', function () {
    return function (input, splitChar) {
      // do some bounds checking here to ensure it has that index
      if (input) {
        if (input.indexOf(splitChar) > -1) {
          return input.split(splitChar);
        } else { return [input]; }
      }else {return "";}
    }
  });
  App.filter('replace', function () {
    return function (input) {
      // do some bounds checking here to ensure it has that index
      if (input) {
        return input.replace(/\\n/g, ''); 
      }else {
        return "";
      }
    }
  });
  App.filter('makePositive', function () {
    return function (num) {
      // do some bounds checking here to ensure it has that index
      return Math.abs(num);
    }
  });
//   var app = angular.module('plunker', []);
  
//   app.controller('MainCtrl', function($scope) {
//     $scope.list=[
//     {name:'Jack Bauer'},
//     {name:'Chuck Norris'},
//     {name:'Superman'},
//     {name:'Batman'},
//     {name:'Spiderman'},
//     {name:'Hulk'}
//   ];
//   });
  
  
  App.filter('filterWithOr', function ($filter) {
        var comparator = function (actual, expected) {
          expected = $.map(expected,function(c){
            return c.id;
          })
          if (angular.isUndefined(actual)) {
            // No substring matching against `undefined`
            return false;
          }
          if ((actual === null) || (expected === null)) {
            // No substring matching against `null`; only match against `null`
            return actual === expected;
          }
          if ((angular.isObject(expected) && !angular.isArray(expected)) || (angular.isObject(actual) && !hasCustomToString(actual))) {
            // Should not compare primitives against objects, unless they have custom `toString` method
            return false;
          }
  
          actual = angular.lowercase('' + actual);
          if (angular.isArray(expected)) {
            var match = false;
            expected.forEach(function (e) {
              e = angular.lowercase('' + e);
              if (actual.indexOf(e) !== -1) {
                match = true;
              }
            });
            return match;
          } else {
            expected = angular.lowercase('' + expected);
            return actual.indexOf(expected) !== -1;
          }
        };
        return function (campaigns, filters) {
          return $filter('filter')(campaigns, filters, comparator);
        };
      })
      .filter("emptyToEnd", function () {
        return function (array, key) {
            if(!angular.isArray(array)) return;
            var present = array.filter(function (item) {
              if(item[key] != -2 || item[key] != -1){
                return item[key];
              }
            });
            var empty = array.filter(function (item) {
                return !item[key] || (item[key] == -2);
            });
            return present.concat(empty);
        };
    })
    .filter("portReplace", function(){
      return function(text){
        if(text){
       return text.replace('Parallon BPG ', '').replace('BPG ', '');}
       else{return ""};
      };
    })
  
  