var sandwich = $(".sandwich");

console.log(sandwich);

var ourSandwich = $("#sandwich-cheese");

// console.log(ourSandwich.width());
// console.log(ourSandwich.height());
// console.log(sandwich.length);
// console.log(sandwich.toggleClass('cheese'));

// ourSandwich.addClass('food delicious');
// ourSandwich.removeClass('delicious');

// var $lettuce = $('.lettuce');

var lettuce = $('.lettuce');

function lettuceClicked() {
    // console.log(this); ------------ Always console.log(this) to make sure "this"
    var height = $(this).height();
    // console.log(height);
    height = height + 20;

    $(this).height(height);
}

lettuce.click(lettuceClicked);