angular.module('file-upload',[])
.directive('fileField', function() {
  return {
    require:'ngModel',
    restrict: 'E',
    link: function (scope, element, attrs, ngModel) {
        //set default bootstrap class
        if(!attrs.class && !attrs.ngClass){
            element.addClass('btn');
        }

        var fileField = element.find('input');

        fileField.bind('change', function(event){
            scope.$evalAsync(function () {
              ngModel.$setViewValue(event.target.files[0]);
              if(attrs.preview){
                var reader = new FileReader();
                reader.onload = function (e) {
                    scope.$evalAsync(function(){
                        scope[attrs.preview]=e.target.result;
                    });
                };
                reader.readAsDataURL(event.target.files[0]);
              }
            });
        });
        fileField.bind('click',function(e){
            e.stopPropagation();
        });
        element.bind('click',function(e){
            e.preventDefault();
            fileField[0].click()
        });
    },
    template:'<button type="button"><ng-transclude></ng-transclude><input type="file" style="display:none"></button>',
    replace:true,
    transclude:true
  };
});