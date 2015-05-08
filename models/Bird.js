module.exports = {
	name: { type: String, lowercase: true },
		order: { type: String, lowercase: true, maxlength: 20 },
		status: {
		    type: String,
		    lowercase: true,
		    enum: [
		    	'extinct',
		        'extinct in the wild',
		        'critically endangered',
		        'endangered',
		        'vulnerable',
		        'near threatened',
		        'conservation dependent',
		        'least concern'
		    ]
		}
}; // End module.exports