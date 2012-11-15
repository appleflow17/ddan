Ext.define('DDANDDALA.model.PlayItem',{
	extend: 'Ext.data.Model',
	xtype : 'playitem',
	config : {
		fields: [
		   {
			   name: 'vid', 
			   mapping : 'link', 	
			   convert: function(value, record) {
				   var url = value[0].href;
				   var param = url.substr(url.indexOf("?"));
				   var obj = Ext.urlDecode(param);
				   return obj.v;
		       }
		    },
		    {
		    	name: 'title', 
		    	convert: function(value, record) {
		    		return value.$t;
		    	}
		    },
		    {   
		    	name: 'thumbnail', 
		    	mapping: 'media$group', 
		    	convert : function(value, record) {
		    		return value.media$thumbnail[1].url;
		    	}
		    }
		]
	}
});