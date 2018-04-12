	var popoverTimeOut;
	var popoverLeaveTimeOut;

;(function() {
	var app = angular.module('angular-popover', [])

	app.directive('angularPopover', [function() {
		return {
			restrict: 'A',
			transclude: true,
			scope: true,
			template: '<div class="angular-popover-container"><div class="angular-popover hide-popover-element"><div ng-if="isTemplateUrl()" ng-include="getContentPopover()""></div><div ng-if="!isTemplateUrl()" class="angular-popover-template"></div></div><div class="angular-popover-triangle hide-popover-element" ng-class="getTriangleClass()"></div></div><ng-transclude></ng-transclude>',
			link: function(scope, element, attrs) {

				//the root div of the popup template
				var popover_container = element[0].querySelector('.angular-popover-container'), 
					popover, //the popover element
					parent_height, //height of the element to which the directive is attached
					parent_width, //width of the element to which the directive is attached
					popover_height, //height of the popover
					popover_width, //width of the popover
					triangle, //the small triangle attached with the popover
					triangle_height, //vertical height of the triangle
					triangle_diagonal, //base of the triangle
					triangle_div_side = 15, //side of the triangle
					triangle_rect_div_side = 30; //the div which has been rotated to make a triangle using the after pseudo class

				triangle_height = Math.sqrt(triangle_div_side * triangle_div_side / 2);
				triangle_diagonal = Math.sqrt(triangle_div_side * triangle_div_side * 2);
				var mode = attrs.mode || 'click';
				var closeOnClick = attrs.closeOnClick === undefined ?
								   		(mode == 'click' ? true : false) :
								   		(attrs.closeOnClick === 'true');

				var closeOnMouseleave = attrs.closeOnMouseleave === undefined ? 
											(mode == 'mouseover' ? true : false) : 
											(attrs.closeOnMouseleave === 'true');

				//return the path of the popover template
				scope.getContentPopover = function() {
					return attrs.templateUrl;	
				}

				scope.isTemplateUrl = function() {
					if(attrs.templateUrl) {
						return true;
					}
					return false;
				}

				//depending upon the direction specified, attached the appropriate class to the popover 
				scope.getTriangleClass = function() {
					return 'angular-popover-triangle-' + attrs.direction;
				}


				// if(closeOnMouseleave) {
					// element.parent()[0].addEventListener('mouseleave', function() {
// //					element[0].addEventListener('mouseleave', function() {
						// //popoverLeaveTimeOut = setTimeout(function(){
						// popover.classList.add('hide-popover-element');
						// triangle.classList.add('hide-popover-element');
						// //if(popoverTimeOut < 500){
						// clearTimeout(popoverTimeOut);
						// //}, 300);
						
						// //}
	// //					$(".angular-popover:not('.hide-popover-element')").addClass('hide-popover-element');
// //						$('.angular-popover').addClass('hide-popover-element');
					// });
				// }

				if(mode != 'click' && closeOnClick) {
					//element[0].addEventListener('click', function() {
					element.parent()[0].addEventListener('click', function() {
						popover.classList.add('hide-popover-element');
						triangle.classList.add('hide-popover-element');
					});
				}

				//listen for click on the directive element
				//element[0].addEventListener(mode, function() {
				element.parent()[0].addEventListener(mode, function() {
									if(closeOnMouseleave) {
					element.parent()[0].addEventListener('mouseleave', function() {
//					element[0].addEventListener('mouseleave', function() {
						popover.classList.add('hide-popover-element');
						triangle.classList.add('hide-popover-element');
						clearTimeout(popoverTimeOut);
					});
				}
					var duration;
					if(mode == 'mouseover'){
						duration = 500;
					}
					else{
						duration = 500;
					}
					parent_height = element[0].clientHeight;

					//move the popover container to the bottom of the directive element
					//popover_container.style.top = $(element[0]).offset().top +35 + 'px';
					parent_width = element[0].clientWidth;
					popover = element[0].querySelector('.angular-popover');
					triangle = element[0].querySelector('.angular-popover-triangle');
//					$('.angular-popover').addClass('hide-popover-element');
					//clearTimeout(popoverLeaveTimeOut);
					popoverTimeOut = setTimeout(function(){
						$(".angular-popover:not('.hide-popover-element')").addClass('hide-popover-element');
					if(mode == 'click' && closeOnClick) {
						popover.classList.toggle('hide-popover-element');
						triangle.classList.toggle('hide-popover-element');
						popover_container.classList.toggle('popover-animation');
						//popover_container.classList.toggle('popover-floating-animation-' + attrs.direction);
					}

					else if(mode == 'click' && !closeOnClick) {
						popover.classList.remove('hide-popover-element');
						triangle.classList.remove('hide-popover-element');
						popover_container.classList.add('popover-animation');
						//popover_container.classList.add('popover-floating-animation-' + attrs.direction);	
					}

					//'mouseover' mode
					else if(popover.classList.contains('hide-popover-element')) {
						popover.classList.remove('hide-popover-element');
						triangle.classList.remove('hide-popover-element');
						popover_container.classList.add('popover-animation');
						//popover_container.classList.add('popover-floating-animation-' + attrs.direction);
					}

					//if the template is supplied instead of templateUrl, set the popover innerHTML to the string passed in the 'template' attribute
					if(attrs.template) {
						var templateElement = element[0].querySelector('.angular-popover-template');
						templateElement.innerHTML = attrs.template;
					}

					popover_height = popover.clientHeight;
					popover_width = popover.clientWidth;

					//check direction and calculate position for appending popover and triangle
					switch(attrs.direction) {
						case 'top' :
									// popover.style.top = ($(element[0]).position().top - popover_height) + 'px';
									// popover.style.left = ($(element[0]).position().left ) + 'px';// - popover_width)) + 'px';
									// triangle.style.left = ($(popover).position().left + popover_width/2 - triangle_rect_div_side/2) + 'px';
									// triangle.style.top = ($(element[0]).position().top - triangle_height - parent_height) + 'px';//(-parent_height - triangle_height) + 'px';
									triangle.style.display = "none";
									//triangle.style.left = ($(element[0]).position().left + parent_width/2) + 'px';//((parent_width - triangle_rect_div_side)/2) + 'px';

						
									popover.style.top = ($(element[0]).position().top - popover_height) + 'px';
									//popover.style.left = (-(parent_width)/2) - popover_width + 'px';
									triangle.style.top = (-parent_height - triangle_height) + 'px';
									triangle.style.left = ((parent_width - triangle_rect_div_side)/2) + 'px';
									
									break; 

						case 'bottom': 
									popover.style.top = triangle_height + 'px';
									popover.style.left = ((parent_width - popover_width)/2) + 'px';
									triangle.style.top = -(triangle_rect_div_side - triangle_height) + 'px';
									triangle.style.left = ((parent_width - triangle_rect_div_side)/2) + 'px';
									break;

						case 'right': 
									popover.style.top = '-2px'// ($(element[0]).position().top -(parent_height - popover_height)/2 - parent_height) + 'px';
									//popover.style.left = $(element[0]).position().left + parent_width + triangle_height/2 + 'px';
									popover.style.left = /*$(element[0]).position().left +*/ (parent_width * .6) + 'px';
									//triangle.style.top = $(element[0]).position().left
									//triangle.style.top = ((parent_height - triangle_rect_div_side)/2 - parent_height) + 'px';
									//triangle.style.left = (parent_width - (triangle_rect_div_side - triangle_height)) + 'px';
									//triangle.style.backgroundColor = yellow;
									triangle.style.top = -(popover_height) - 15 + 'px';
									triangle.style.left = (parent_width/2)+ 'px';
									//triangle.style.left = $(element[0]).position().left + (parent_width) - (triangle_height*2) + 'px';
									break;

						case 'left': 
									popover.style.top = '-2px'// ($(element[0]).position().top -(parent_height - popover_height)/2 - parent_height) + 'px';
//									popover.style.top = ((parent_height - popover_height)/2 - parent_height) + 'px';
//									popover.style.right = triangle_height + 'px';
									popover.style.right = (parent_width * 1.1) + 400 + 'px';
									triangle.style.top = ((parent_height - triangle_rect_div_side)/2 - parent_height) + 'px';
									triangle.style.left = -triangle_height + 'px'; 
									break;
					}
				}, duration)
				})
				
			}
		}
	}])
})();