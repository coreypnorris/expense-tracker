var Purchase = {
  create: function(desc, amount) {
    if (desc !== "" && amount !== "") {
      var purchase = Object.create(Purchase);
      purchase.initialize(desc, amount);
      return purchase;
    } else {
      alert("Cannot leave blank!")
    }
  },
  initialize: function(desc, amount) {
    this.desc = desc;  
    this.amount = amount;
  }
};

var convertToDollar = function(amount) {
  if (isNaN(amount)) {
    alert("Only enter numbers in the amount input field!");
    return false;
  };
  return parseFloat(amount);
};

$(document).ready(function() {
  $("form#new-purchase").submit(function(event) {
    event.preventDefault();

    var newPurchase = Purchase.create($("input#new-purchase-desc").val(), 
                                      $("input#new-purchase-amount").val());
    $("tbody#purchases").append("<tr><td>" + newPurchase.desc + "</td>" + 
                             "<td class='money'>$" + convertToDollar(newPurchase.amount).toFixed(2) + "</td></tr>");
 this.reset();    
 });
});
