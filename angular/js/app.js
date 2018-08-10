angular.module("lista",[]);

angular.module("lista").controller("listactrl",function($scope){
    $scope.app = "lista telefônica";
    $scope.contatos = [];
    
    $scope.contatos = [
        {nome:"Flavio",telefone:"91919191"},
        {nome:"Jaqueline",telefone:"91213564"},
        {nome:"Juliana",telefone:"91121435"}
    ];

    $scope.operadoras = [
        {nome:"Oi",codigo:"14"},
        {nome:"Vivo",codigo:"15"},
        {nome:"Tim",codigo:"16"}
    ];

    $scope.adicionar = function(contato){
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
    }
});