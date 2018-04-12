// .directive('p-details',function(){
//     return{
//         restrict: 'EA',
//         scope: {
//             project: '=project',
//             //maybe use ng-switch based on mode edit/read/detailed/summary....???
//             mode: '=mode'
//         },
//         transclude: true,
//         link: function(scope, element, attrs, ctrl, transclude){
//             transclude(scope, function(clone, scope){
//                 element.append(clone);
//             });
//         },
//         templateUrl: '../SiteAssets/PDR/src/templates/project-details.html'
//     }
// })
// .directive('p-summary',function(){
//     return{
//         restrict: 'EA',
//         scope: {
//             project: '=project',
//             //maybe use ng-switch based on mode edit/read/detailed/summary....???
//             mode: '=mode'
//         },
//         transclude: true,
//         link: function(scope, element, attrs, ctrl, transclude){
//             transclude(scope, function(clone, scope){
//                 element.append(clone);
//             });
//         },
//         templateUrl: '../SiteAssets/PDR/src/templates/project-summary.html'
//     }
// })
