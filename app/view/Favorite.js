Ext.define('DDANDDALA.view.Favorite',{
	extend 	: 'Ext.Panel',
	xtype 	: 'favorite',
	id		: 'favorite',
	config 	: {
		layout : 'fit',
        title: '즐겨찾기',
        items : [
        	{xtype:'titlebar',
        	 title : '즐겨찾기',
        	 docked : 'top'},
        	{xtype : 'playlistfavorite'}
        ]
	}
});