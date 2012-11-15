Ext.define('DDANDDALA.controller.FavoriteListController', {
	extend : "Ext.app.Controller",
	
	config : {
		refs : {
			playListFavorite 	: {
				selector 		: '#playlistfavorite',
				xtype 			: 'playlistfavorite',
				autoCreate 		: true
			}
		},
		control : {
			'playlistfavorite' : 
			{
				itemtap		: 'itemTapEventHandler'
			},
			'favorite' : 
			{
				activate 	: 'activateEventHandler'
			}
		
		}
	},
	
	map : {},
	
	isModify : false,
	
	itemTapEventHandler : function() {
		console.log('itemTapEventHandler');
	},
	
	activateEventHandler : function() {
		if(this.isModify) {
			this._loadPlayList();
		}
	},
	
	init : function() {
		this._loadFavorite();
	},
	
	initLoad : function() {
		this._loadPlayList();
	},
	
	addFavorite : function(record) {
		var store = Ext.getStore('playitemsfavorite');
		var model = Ext.create('DDANDDALA.model.PlayItemFavorite');
		model.data = record.data;
		store.insert("0", model);
		store.sync();
		this.isModify = true;
		this._loadFavorite();
	},
	
	removeFavorite : function(record) {
		var store = Ext.getStore('playitemsfavorite');
		var model = Ext.create('DDANDDALA.model.PlayItemFavorite');
		model.data = record.data;
		store.removeAt(store.indexOf(model));
		store.sync();
		this.isModify = true;
		this._loadFavorite();
	},
	
	getFavorite : function(vid) {
		return this.map[vid];
	},
	
	_loadFavorite : function() {
		var favoriteStore = Ext.getStore('playitemsfavorite');
		this.map = {};
		
		favoriteStore.load({
		    callback: function(records, operation, success) {
		        // the operation object contains all of the details of the load operation
		    	for(var i=0; i<records.length; i++) {
		    		this.map[records[i].data.vid] = records[i].data;
		    	}
		    },
		    scope: this
		});
	},
	
	getListItemTpl : function() {
		var template = new Ext.XTemplate(
	        	'<ul>',
	        		'<li>',
						'<section class="musicsctn">',
							'<dl class="musiclst">',
								'<dt class="musicthm"><img src="{thumbnail}" alt=""></dt>',
								'<dd>{title}</dd>',
							'</dl>',
							'<div class="btnitem btndelete" />',
						'</section>',
						'</li>',
					'</ul>');
		return template; 
	},
	
	_loadPlayList : function(type) {
		var platlistFavorite = this.getPlayListFavorite();
		platlistFavorite.setItemTpl(this.getListItemTpl());
		platlistFavorite.setStore(Ext.getStore('playitemsfavorite'));
	}
});