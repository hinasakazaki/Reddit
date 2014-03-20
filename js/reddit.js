$(document).ready( function() {
	$('.votewrap').hover( function(e) {
		$(this).find('.votecount').addClass('votecount_opaque');
		$(this).find('.info').addClass('info_opaque');
	}, function(e) {
		$(this).find('.votecount').removeClass('votecount_opaque');
		$(this).find('.info').removeClass('info_opaque');
	});


	$('a').click( function(e) {
		e.stopPropagation();
	});
	
	$('.upvote').click( function(e) {
		var wrapper = $(this).parent('.votewrap');
		if(wrapper.hasClass('upvoted')) {
			wrapper.removeClass('upvoted');
			wrapper.find('.votecount').text(
				parseInt(wrapper.find('.votecount').text())-1);
		} else {
			if(wrapper.hasClass('downvoted')) {
				wrapper.find('.votecount').text(
					parseInt(wrapper.find('.votecount').text())+1);
			}
			wrapper.find('.votecount').text(
				parseInt(wrapper.find('.votecount').text())+1);
			wrapper.addClass('upvoted');
		}
		wrapper.removeClass('downvoted');
	});
	$('.downvote').click( function(e) {
		var wrapper = $(this).parent('.votewrap');
		if(wrapper.hasClass('downvoted')) {
			wrapper.removeClass('downvoted');
			wrapper.find('.votecount').text(
				parseInt(wrapper.find('.votecount').text())+1);
		} else {
			if(wrapper.hasClass('upvoted')) {
				wrapper.find('.votecount').text(
					parseInt(wrapper.find('.votecount').text())-1);
			}
			wrapper.find('.votecount').text(
				parseInt(wrapper.find('.votecount').text())-1);
			wrapper.addClass('downvoted');
		}
		wrapper.removeClass('upvoted');
	});


});