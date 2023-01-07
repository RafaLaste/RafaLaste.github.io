$(function() {
	$('.form__select').select2({
		// width: '100%',
		language: 'pt-BR',
		width: '100%',
		minimumResultsForSearch: 10
	})
	.one('select2:open', function(e) {
		$('input.select2-search__field').prop('placeholder', 'Pesquisar...');
	});
});