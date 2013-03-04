describe("Phonelist", function(){
  var scope, ctrl;

  beforeEach(function(){
    scope = {};
    ctrl = new PhonelistCtrl(scope);
  });

  it("should create phone model with 3 phones", function(){
    expect(scope.phones.length).toBe(3);
  });

  it("should set the order to id", function(){
    expect(scope.order).toBe("id");
  });
});
