Ext.define('DDANDDALA.store.PlayItemsBallad', {
	extend : 'Ext.data.Store',
	requires : ['Ext.data.proxy.JsonP',
	            'DDANDDALA.model.PlayItem'],
	config : {
		storeId		: 'playitemsballad',
		model 		: 'DDANDDALA.model.PlayItem',
		autoLoad 	: true,
		proxy : {
			type	: 'jsonp',
		    url 	: 'https://gdata.youtube.com/feeds/api/playlists/PLkGDn7uejrUa7GkpVor6QrTK4qspTpRCM?alt=json&fields=entry(title,link,media:group(media:thumbnail))',
		    reader: {
		    	type			: 'json',
		    	rootProperty 	: 'feed.entry'
		    }
		}
	}
});