$(function()
{
	$('input[type="checkbox"]:checked, input[type="radio"]:checked').addClass('checked');
	
	$('.velvethut-form').on('change', 'input[type="radio"]', function()
	{
		$(this).closest('.swappsi-form').find('input[name="' + $(this).attr('name') + '"]').removeClass('checked');
		$(this).addClass('checked');
	});
	
	$('.velvethut-form').on('change', 'input[type="checkbox"]', function()
	{
		$(this).toggleClass('checked');
	});
});