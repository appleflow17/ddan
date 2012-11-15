Ext.define('DDANDDALA.store.PlayItemsNew', {
	extend : 'Ext.data.Store',
	requires : ['Ext.data.proxy.JsonP',
	            'DDANDDALA.model.PlayItem'],
	config : {
		storeId		: 'playitemsnew',
		model 		: 'DDANDDALA.model.PlayItem',
		autoLoad 	: true,
		proxy : {
			type	: 'jsonp',
		    url 	: 'https://gdata.youtube.com/feeds/api/users/UCMXRSAdaY0jGjF2EE_-qs3w/favorites?alt=json&fields=entry(title,link,media:group(media:thumbnail))',
		    reader: {
		    	type			: 'json',
		    	rootProperty 	: 'feed.entry'
		    }
	    }
	}
});