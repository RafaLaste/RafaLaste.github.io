$(function() {
	ScrollReveal({
		distance: 0,
		duration: 0,
	});

	ScrollReveal().reveal(".card--reveal", {
		origin: "top",
		interval: 100,
		afterReveal: function (el) {
    		el.classList.add('swiped--card');
		}
	}, 1500);
});