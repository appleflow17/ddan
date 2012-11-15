Ext.define('DDANDDALA.store.PlayItemsFavorite', {
	extend : 'Ext.data.Store',
	requires : ['DDANDDALA.model.PlayItem'],
	config : {
		storeId		: 'playitemsfavorite',
		model 		: 'DDANDDALA.model.PlayItemFavorite',
		autoLoad 	: true,
		proxy : {
			type	: 'localstorage',
		    reader	: {type : 'json'},
		    writer 	: {type : 'json'}
	    }
	}
});