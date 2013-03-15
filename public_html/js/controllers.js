'use strict';

function MainCtrl($scope) {
    $scope.header = 'html/header.html';
    $scope.alerts = 'html/alerts.html';
    $scope.items = 'html/items.html';
    $scope.footer = 'html/footer.html';
}
MainCtrl.$inject = ['$scope'];

function HeaderCtrl(ngI18nResourceBundle, ngI18nConfig, $scope) {
//    $scope.brand = 'Inner Market (IM)';
//    $scope.brandLink = '#';
//    $scope.home = 'Home';
//    $scope.homeLink = '#';
//    $scope.about = 'About';
//    $scope.aboutLink = '#';
//    $scope.help = '?';
//    $scope.helpLink = 'Home';
//    $scope.moreActions = 'More Actions';
//    $scope.contact = 'Contact';
//    $scope.signIn = 'Sign In';
    
    $scope.languages = [
           {locale:"en", name:"english"},
           {locale:"fr", name:"français"}
       ];
//
//$scope.supportedLocales = ngI18nConfig.supportedLocales;
//    $scope.defaultLocale = ngI18nConfig.defaultLocale;
//    $scope.basePath = ngI18nConfig.basePath;
//    $scope.cache = ngI18nConfig.cache;

       $scope.i18n = {language: $scope.languages[0]};

       $scope.$watch('i18n.language', function (language) {
           ngI18nResourceBundle.get({locale: language.locale, name: 'headerResource'}).success(function (resourceBundle) {
               $scope.headerResource = resourceBundle;
           });
       });
   }
   HeaderCtrl.$inject = ['ngI18nResourceBundle', 'ngI18nConfig', '$scope'];



function FooterCtrl($scope) {
    $scope.copyright = '©Innovation Projects\' Team - 2013';
}
FooterCtrl.$inject = ['$scope'];

function ItemsCtrl($scope, Item) {
    $scope.alertHeading = 'This is an Alert';
    $scope.alertMessage = 'You can talk whaterever you want to communicate with your users.';
    $scope.moreInfo = 'More Info...';
    $scope.items = Item.query();
}
ItemsCtrl.$inject = ['$scope', 'Item'];

function AlertsCtrl($scope) {
  $scope.alerts = [
    { type: 'error', msg: 'This is an example of an error message.' }, 
    { type: 'success', msg: 'This is an example of a success message.' },
    { type: '', msg: 'This is an example of a simple message.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: "Another alert!"});
  };

  $scope.closeAlert = function(pIndex) {
    $scope.alerts.splice(pIndex, 1);
  };

}
AlertsCtrl.$inject = ['$scope'];