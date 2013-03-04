describe("Phonelist", function(){
  it("should create phone model with 3 phones", function(){
    var scope = {},
      ctrl = new PhonelistCtrl(scope);
    expect(scope.phones.length).toBe(3);
  });
});
