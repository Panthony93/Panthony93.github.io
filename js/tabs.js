jQuery(document).ready(function() {
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});

jQuery(document).ready(function() {
    jQuery('.quotediv .circle-quotes a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.qoutediv ' + currentAttrValue).fadeIn(400).siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('circle_active').siblings().removeClass('circle_active');
 
        e.preventDefault();
    });
});




