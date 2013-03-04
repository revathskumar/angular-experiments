function PhonelistCtrl($scope){
  $scope.phones = [
    {
      "name": "Nexus", "id":1
    },
    {
      "name": "iPhone", "id":2
    },
    {
      "name": "Samsung", "id":3
    }
  ];

  $scope.order = "id";
}
