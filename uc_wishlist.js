
/**
 * @file
 * Small helper JS for the wish list settings form address.
 */


/**
 * Apply the selected address to the appropriate fields in the cart form.
 */
function apply_address(type, address_str) {
  if (address_str == '0') {
    return;
  }

  eval('var address = ' + address_str + ';');

  $('#edit-' + type + '-first-name').val(address.first_name).trigger('change');
  $('#edit-' + type + '-last-name').val(address.last_name).trigger('change');
  $('#edit-' + type + '-phone').val(address.phone).trigger('change');
  $('#edit-' + type + '-company').val(address.company).trigger('change');
  $('#edit-' + type + '-street1').val(address.street1).trigger('change');
  $('#edit-' + type + '-street2').val(address.street2).trigger('change');
  $('#edit-' + type + '-city').val(address.city).trigger('change');
  $('#edit-' + type + '-postal-code').val(address.postal_code).trigger('change');

  if ($('#edit-' + type + '-country').val() != address.country) {
    $('#edit-' + type + '-country').val(address.country);
    try {
      uc_update_zone_select('#edit-' + type + '-country', address.zone);
    }
    catch (err) {}
  }

  $('#edit-' + type + '-zone').val(address.zone).trigger('change');
}

/**
 * Behavior for our custom address checkbox.
 */
Drupal.behaviors.myModuleBehavior = function (context) {
	cb=$("#edit-panes-delivery-copy-address");
	ap=$("#delivery-pane div.address-pane-table");
	bcaw=$("#edit-panes-billing-copy-address-wrapper");
	bca=$("#edit-panes-billing-copy-address");
	if(!cb.is(':checked')){ ap.hide();bcaw.hide(); }
	cb.click(function(){ 
		if($(this).is(':checked')){ 
			ap.slideDown();bcaw.fadeIn(); 
		}else{ 
			ap.slideUp();
			if(bca.is(':checked')){	
				bca.attr({checked: ''});
				$("#billing-pane div.address-pane-table").slideDown();	
			}
			bcaw.fadeOut();			
		} 
	});
});
