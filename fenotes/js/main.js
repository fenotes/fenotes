require.config({
	paths: {
		"jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
		'modules': 'modules/modules'
	}
});

require(['jquery', 'modules'], function ($, md) {
	md();
});