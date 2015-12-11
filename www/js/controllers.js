angular.module('app.controllers', [])

.controller('loginCtrl', function($scope) {

})

.controller('homeCtrl', function($scope) {

})

.controller('findACafeCtrl', function($scope) {

})

.controller('find0Ctrl', function($scope) {

})

.controller('findCtrl', function($scope) {

})

.controller('find2Ctrl', function($scope) {

})

.controller('cafeXCtrl', function($scope) {

})

.controller('cafeX2Ctrl', function($scope) {

})

.controller('cafeX3Ctrl', function($scope) {

})

.controller('inviteCtrl', function($scope) {

})

.controller('invite2Ctrl', function($scope) {

})

.controller('alreadyThere?Ctrl', function($scope) {

})

.controller('partyCtrl', function($scope) {

})

.controller('party2Ctrl', function($scope) {

})

.controller('individualCtrl', function($scope) {

})

.controller('payLahCtrl',['$scope','$http',function($scope, $http) {
    $scope.submit = function(){

        //var strMoney = stringify(dbsMoney)
        //var link = 'https://118.201.8.226/middleware/sandbox/jsp/P2BS4003.jsp';

        function getRandomArbitrary(min, max) {
          return Math.random()*(max-min)+min;
        }

        var id="IDM"+getRandomArbitrary(110,999);

        var merchReqPost = {
          merchantSecretAPIKey : "3815128197802690638397880438055880758999",
          merchantCode : "168700800012",
          merchantTxnReferenceNumber : id,
          pGTxnReferenceNumber : id,
          txnSource: "Web",
          merchantTxnType : "P",
          currencyCode : "SGD",
          transactionAmount : "12.90",
          designatedPaylahMobile : "91400000",
          payeeShippingAddressNeeded : "NA"
        };

        var merchantRequest1 = JSON.stringify(merchReqPost);
        var postData = {
          serviceID:"P2BS4003",
          appID:"DBSP2BPG",
          channel : "IDM",
          merchantRequest : merchantRequest1,
          encrypt:"false",
          clientRandomKey:"1234"
        };

        //var link2 ='https://118.201.8.226/middleware/sandbox?serviceID=P2BS4003&appID=DBSP2BPG&channel=IDM&merchantRequest='+merchantRequest1+'&encrypt=false';
        var link2 ='https://118.201.8.226/middleware/sandbox/DBSMerchantServlet?serviceID=P2BS4003&appID=DBSP2BPG&channel=IDM&merchantRequest='+merchantRequest1+'&clientRandomKey=1234&encrypt=false';
        //console.log(link2);
        /*
        $http.post(link2,postData).then(function (res){
            window.open('https://www.google.com', '_system', 'location=yes'); //return false;
            $scope.response = res.data;

            var bankUrl = 'dbspaylah://com.dbs.paylah/?txnrefld=<'+res.data.bankResponse.bankTnxReferenceNumberRes+'>';
            window.open(bankUrl, '_system', 'location=yes'); //return false;
        });*/

        //console.log($http.post(link,postData));
        $http.defaults.headers.post["Content-Type"]='application/x-www-form-urlencoded; charset=UTF-8';
        $http.post(link2,postData).then(function (res){
            $scope.response = res.data;
            console.log(res.data);
            //bankTxnReferenceNumberRes
            var bankUrl = 'dbspaylah://com.dbs.paylah/?txnrefld=<'+$scope.response.bankTxnReferenceNumberRes+'>';
            // window.open(bankUrl, '_system', 'location=yes'); //return false;

        });
    };
}])

.controller('party4Ctrl', function($scope) {

})

.controller('menuCtrl', function($scope) {

})

.controller('foodCtrl', function($scope) {

})
