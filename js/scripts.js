var Category = {
  create: function(catName) {
    var category = Object.create(Category);
      category.initialize(catName);
      return category;
  },
  initialize: function(catName) {
    this.catName = catName;
    this.purchaseArray = [];
  }
};

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
  
  $("form#new-category").submit(function(event) {
    event.preventDefault();

    var newCategory = Category.create($("input#new-category-name").val());
    console.log(newCategory);
    $("ul#categories").append("<li><span class='category'>" + newCategory.catName + "<span></li>");

    $(".category").last().click(function() {
      $("#show-purchase").show();
      $(".add-title").text("Add purchase to " + newCategory.catName + ":");
      $(".title").text(newCategory.catName + ":");

      $("td.items").remove("");
      $("td.money").remove("");

      newCategory.purchaseArray.forEach(function(purchase) {
        $("tbody#purchases").append("<tr><td class='items'>" + newPurchase.desc + "</td>" + 
                                    "<td class='money'>$" + convertToDollar(newPurchase.amount).toFixed(2) + 
                                    "</td></tr>");
      });
      $("form#new-purchase").submit(function(event) {
        event.preventDefault();

        var newPurchase = Purchase.create($("input#new-purchase-desc").val(), 
                                          $("input#new-purchase-amount").val());
        newCategory.purchaseArray.push(newPurchase);
        console.log(newPurchase);
        console.log(newCategory);
        console.log(newPurchase.desc);
        $("tbody#purchases").append("<tr><td class='items'>" + newPurchase.desc + "</td>" + 
                                    "<td class='money'>$" + convertToDollar(newPurchase.amount).toFixed(2) + 
                                    "</td></tr>");
        
        this.reset();    
      });
    });
  this.reset();
  });
});
