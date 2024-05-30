$(document).ready(function() {
        $('#break__detail').click(function(e) {
            e.preventDefault(); 
            parent.$('.item').show(); 
            parent.$('iframe').hide(); 
        });
})