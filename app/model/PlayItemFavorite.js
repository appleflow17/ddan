Ext.define('DDANDDALA.model.PlayItemFavorite',{
	extend: 'Ext.data.Model',
	xtype : 'playitemfavorite',
	config : {
		identifier: {
            type: 'uuid'
        },
        
		fields: [
		   {
			   name: 'vid'
		    },
		    {
		    	name: 'title'
		    },
		    {   
		    	name: 'thumbnail'
		    }
		]
	}
});