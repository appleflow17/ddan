Ext.define("DDANDDALA.view.Main", {
    extend	: 'Ext.tab.Panel',
    xtype 	: 'main', 
    id		: 'main',
    
    config: {
        tabBarPosition: 'bottom',
        
        items: [
            {
            	layout : 'fit',
            	title: '신나는 노래',
            	items : [
            		{xtype:'titlebar',
            		 title : '신나는 노래',
            		 docked : 'top'},
            		{xtype : 'playlistdance'}
            	]
            },
            {
                layout : 'fit',
                title: '서정적 노래',
                items : [
                	{xtype:'titlebar',
                	 title : '서정적 노래',
                	 docked : 'top'},
                	{xtype : 'playlistballad'}
                ]
            },
            {
            	title: '재생',
            	html : '재생'
        
            },
            {
                layout : 'fit',
                title: '최신 노래',
                items : [
                	{xtype:'titlebar',
                	 title : '최신 노래',
                	 docked : 'top'},
                	{xtype : 'playlistnew'}
                ]
            },
            {
            	xtype : 'favorite'
            }
        ]
    }
});
