describe("Purchase", function() {
  describe("create", function() {
    it("creates an instance of a Purchase object", function() {
      var testPurchase = Purchase.create();
      Purchase.isPrototypeOf(testPurchase).should.equal(true);
    });
  });
  describe("initialize", function() {
    it("sets the description and amount properties", function() {
      var testPurchase = Object.create(Purchase);
      testPurchase.initialize("Pizza", "15");
      testPurchase.desc.should.equal("Pizza");
      testPurchase.amount.should.equal("15");
    });
  });
});

describe("convertToDollar", function() {
  it("converts the string to number", function() {
    convertToDollar("50.25").should.equal(50.25);
  });
  it("returns false if string cannot be turned into number", function(){
    convertToDollar("hello").should.equal(false);
  });
});
