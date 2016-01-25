/**
    Input direcitve
    @usage <nice-input></nice-input>
*/

(function () {
    
    "use strict";
    
    angular.module('input')
        .directive('niceInput', niceInput);
    
    
    function niceInput() {        
        
        var directive = {
            scope: {
              ngModel: '='  
            },
            templateUrl :'/templates/input.html',             
            link: function(scope,elem,attrs) {

                var input =  angular.element(elem[0].querySelectorAll('.input-nice__field'));
                var parent_input = angular.element(input.parent());

                scope.$watch('ngModel', function(n,o){
                    if(n) {
                        parent_input.addClass("input-nice--filled");
                    } else {
                        parent_input.removeClass("input-nice--filled");
                    }
                });
                
                }
            };        
    
        return directive;
    }
    
})();


    
    