$(document).ready(function() {
    // تحديث الأموال عند تغيير الكمية أو السعر
    function updateAmounts() {
        var sum = 0.0;
        $('#myTable > tbody > tr').each(function() {
            var qty = parseFloat($(this).find('.qty').val()) || 0;
            var price = parseFloat($(this).find('.price').val()) || 0;
            var amount = qty * price;
            sum += amount;
            $(this).find('.amount').text('$' + amount.toFixed(2));
        });
        $('.total').text('$' + sum.toFixed(2));
    }

    // زيادة الكمية
    $('.cart-qty-plus').click(function() {
        var $qtyInput = $(this).siblings('.qty');
        var qtyValue = parseFloat($qtyInput.val()) || 0;
        $qtyInput.val(qtyValue + 1);
        updateAmounts();
    });

    // نقص الكمية
    $('.cart-qty-minus').click(function() {
        var $qtyInput = $(this).siblings('.qty');
        var qtyValue = parseFloat($qtyInput.val()) || 0;
        if (qtyValue > 0) {
            $qtyInput.val(qtyValue - 1);
        }
        updateAmounts();
    });

    // تحديث الأموال عند بدء التحميل
    updateAmounts();

    // تحديث الأموال عند تغيير القيم في الجدول
    ('.qty, .price').on('keyup keypress blur change', function(e) {
        updateAmounts();
    });
});

// في ملف script.js
// في ملف script.js

document.addEventListener('DOMContentLoaded', function () {
    // الحصول على العناصر التي تحتوي على زر "إضافة إلى عربة التسوق"
    const addToCartButtons = document.querySelectorAll('.addToCart');

    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const productId = button.closest('.card').getAttribute('data-product-id');

            
        });
    });

    function retrieveCartFromLocalStorage() {
        const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

        console.log("سلة التسوق المخزنة:", shoppingCart);
    }

    retrieveCartFromLocalStorage();
});

