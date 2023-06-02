setTimeout(function() { $('.widg_offer[data-offer-title="Donation"] input:visible').trigger('input'); }, 100);

$(document).ready(function()
{
	$(".slterm").text("1 Year");
	$("#sslseal, #sslseal a").css("display", "none !important");
	var checked_sale = $(".offer_presentation .form-check-input:checked:visible");
	var default_price = checked_sale.data("price");
	var default_desc = checked_sale.parents('.offer_selector_control').data('desc');
	
	$(".slprice").text(default_price);
	jQuery('.summary_line .summary_service_level').text(default_desc);
	
	$(".other_value_input .form-control").on("input", function()	{
		var current_value = $(this).val();

		$(".don_summary").text(" and a donation for $" + current_value);
		
		if(($(this).val() == 0) || ($(this).val() == ""))
		{
			$(".don_summary").text("");
		}
	});
	
		jQuery('.widg_offer img').click(function(e) {
			jQuery(this).parent().parent().find('input').click();
		}); 
	
		jQuery('input[type="radio"]').change(function() {
			var $this = jQuery(this);
			var offer_control = $this.parents('.offer_selector_control');
			setTimeout(function() {
			  if ( offer_control.data('sel') === 'Y' ) { 
					jQuery('.summary_line .summary_service_level').text(
							 offer_control.data('desc')
						);
						jQuery(".summary_line .slprice").text(
							offer_control.data('price')	
						);

		     }
			}, 0);
		});

		var pp_button = jQuery('#sfg_paypal_select_button').parent();
		var cc = jQuery('#sfg_cards_accepted');
	  var pp = jQuery('#sfg_paypal_select_button');
		var cc_fields = jQuery('#sfg_cardcvv_div, #sfg_cardno_div, #sfg_expire_div');
		var toggling = false;
	  var next_button = jQuery('.next_button_control button');
		cc_fields.hide();
	  next_button.hide();
	  pp.addClass('untouched');
	jQuery(document).ready(function() {
		pp_button.appendTo(cc.parent());
		pp_button.removeClass('col-sm-8');
	});

		
		cc.click(function() {
			if ( cc.hasClass('disabled') && !pp.hasClass('disabled') ) {
				toggling = true;
				pp.click();
				toggling = false;
			}
			pp.addClass('disabled');
			cc.removeClass('disabled');
			cc_fields.show();
			next_button.show();
			move_disclaimer();
		});
	
		pp.click(function() {
			if (toggling) { return; }
			if ( !pp.hasClass('disabled') && !pp.hasClass('untouched') ) {
				pp.addClass('disabled')
				pp.click();
				return;
		  }
			cc_fields.hide()
			cc.addClass('disabled');
			pp.removeClass('disabled').removeClass('untouched');
			next_button.show();
			move_disclaimer();
		});
    
    var move_disclaimer = function() {
      var disclaimer = $('#disclaimer-text');
			disclaimer.remove();
			$('.next_button_control').before(disclaimer);
			disclaimer.before( $('.summary_line').remove() );
    }
			
			jQuery('.offer_auto_trans_selector .offset-sm-3')
			.removeClass('offset-sm-3')
			.removeClass('col-sm-8')
			.css('margin', 'auto')

});
