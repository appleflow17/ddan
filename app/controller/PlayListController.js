Ext.define('DDANDDALA.controller.PlayListController', {
	extend : "Ext.app.Controller",
	
	config : {
		refs : {
			main : {
				selector 	: '#main',
				xtype  		: 'main',
				autoCreate 	: true
				
			},
			playListDance : {
				selector 	: '#playlistdance',
				xtype 		: 'playlistdance',
				autoCreate 	: true
			},
			playListBallad : {
				selector 	: '#playlistballad',
				xtype 		: 'playlistballad',
				autoCreate 	: true
			},
			playListNew : {
				selector 	: '#playlistnew',
				xtype 		: 'playlistnew',
				autoCreate 	: true
			}
		},
		control : {
			'playlistdance' : 
			{
				itemtap: 'itemTapEventHandler'
			},
			'playlistballad' : 
			{
				itemtap: 'itemTapEventHandler'
			},
			'playlistnew' : 
			{
				itemtap: 'itemTapEventHandler'
			}	
		}
	},
	
	favoriteController : {},
	
	itemTapEventHandler : function(dataview, index, target, record, evt) {
		var el = Ext.get(evt.target);
		
		if(el.hasCls('button')) {
			if(el.hasCls('btnfavoriteOn')){
				this.favoriteController.removeFavorite(record);
			}
			else {
				this.favoriteController.addFavorite(record);
			}
			el.toggleCls('btnfavoriteOn');
		}
		else {
			this.playItem();
		}
	},
	
	playItem : function() {
		console.log('play music');
	},
	
	initLoad : function() {
		Ext.fly('appLoadingIndicator').destroy();
		var main		= this.getMain();		
		this._loadPlayList(this.TYPE_DANCE);
		Ext.Viewport.add(main);
	},
	
	setFavoriteController : function(controller) {
		this.favoriteController = controller;
	},
	
	getListItemTpl : function()
	{
		var $this = this;
		var template = new Ext.XTemplate(
	        	'<ul>',
	        		'<li>',
						'<section class="musicsctn">',
							'<dl class="musiclst">',
								'<dt class="musicthm"><img src="{thumbnail}" alt=""></dt>',
								'<dd>{title}</dd>',
							'</dl>',
							'<div class="btnitem btnfavoriteOff ',
								'<tpl if="this.isExistFavorite(vid)">',
									'btnfavoriteOn',
								'</tpl>',
								' button" />',
						'</section>',
						'</li>',
					'</ul>',
				{
					isExistFavorite : function(vid) {
						return $this.favoriteController.getFavorite(vid);
					}
				});
		return template; 
	},
	
	_loadPlayList : function(type) {
		var playlistDance	= this.getPlayListDance();
		playlistDance.setItemTpl(this.getListItemTpl());
		playlistDance.setStore(Ext.getStore('playitemsdance'));
		
		var platlistBallad = this.getPlayListBallad();
		platlistBallad.setItemTpl(this.getListItemTpl());
		platlistBallad.setStore(Ext.getStore('playitemsballad'));
		
		var platlistNew = this.getPlayListNew();
		platlistNew.setItemTpl(this.getListItemTpl());
		platlistNew.setStore(Ext.getStore('playitemsnew'));
	}
});