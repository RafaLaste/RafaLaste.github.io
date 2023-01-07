var started = false;

var startProgress = function() {
	if (($(document).scrollTop() + window.innerHeight) - 200 >= $('.list-status').offset().top && !started) {
		$('.progress').each(function() {
			var that = this;

			var percent = $(that).data('percent') / 10;
			var i = $('.progress').index(that);

			setTimeout(function() {
				$(that).circleProgress('value', percent);
			}, 300 * i);
		});

		started = true;
	}
}

$(function() {
	$('.progress').each(function() {
		var that = this;
		
		$(that).circleProgress({
			value: 0,
			startAngle: (-Math.PI / 2),
			fill: {
				// gradient: ['#3aeabb', '#fdd250']
				color: '#ff6d00',
			},
			emptyFill: '#dedbdb',
			thickness: 8,
			size: 100.0,
		}).on('circle-animation-progress', function(event, progress, stepValue) {
			$(this).find('.progress__label').text(parseInt(stepValue * 10));
		});
	});

	startProgress();
	$(document).on('scroll', function() {
		startProgress();
	});
});