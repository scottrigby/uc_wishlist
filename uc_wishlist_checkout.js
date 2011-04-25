/**
 * @file
 * Small helper JS for the wish list cart form.
 */

/**
 * Behavior for our custom address checkbox.
 *
 * @todo add comments.
 */
Drupal.behaviors.myModuleBehavior = function (context) {
  cb = $("#edit-panes-delivery-copy-address");
  ap = $("#delivery-pane div.address-pane-table");
  bcaw = $("#edit-panes-billing-copy-address-wrapper");
  bca = $("#edit-panes-billing-copy-address");
  if (!cb.is(':checked')) { ap.hide();bcaw.hide(); }
  cb.click(function() {
    if ($(this).is(':checked')) {
      ap.slideDown();bcaw.fadeIn();
    }
    else {
      ap.slideUp();
      $("#delivery-pane div.address-pane-table input").each(function(){ $(this).attr({value:''}); });
      $("#delivery-pane div.address-pane-table select").not("#edit-panes-delivery-delivery-country").each(function(){ $(this).val($('option:first', this).val()); });      
      if (bca.is(':checked')) {
        bca.attr({checked: ''});
        $("#billing-pane div.address-pane-table").slideDown();
      }
      bcaw.fadeOut();
    }
  });
}