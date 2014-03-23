(function(){

	this.FileUploader = (function(){
		function FileUploader(params) {
			var _this = this;

			if(params === null) {
				params = {};
			}

			//arguments
			_this.upload_url		= params.upload_url || "";
			_this.handle			= params.handle || "";
			_this.drop_element		= params.drop_element || "";
			_this.file_types		= params.file_types || []; // Format as array of objects  [{title: "Image Files",extensions:"jpg,gif,png"},{title:"zip Files",extensions:"zip"}]			
			_this.max_file_size		= params.max_file_size || "2mb";
			_this.multipart_params	= params.multipart_params || {};

			//function variables
			_this.file_data_name	= "Filedata";
			_this.flash_swf_url		= 'lib/vendor/plupload/js/Moxie.swf';
			_this.runtimes			= 'html5,flash,html4';


			_this.file_uploader_object = new plupload.Uploader({
				runtimes			: _this.runtimes,
				url					: _this.upload_url,
				dragdrop			: true,
				flash_swf_url		: _this.flash_swf_url,
				drop_element		: _this.drop_element,
				container			: _this.drop_element,
				browse_button		: _this.handle,
				file_data_name		: _this.file_data_name,
				filters				: {
					mime_types		: _this.file_types,
					max_file_size 	: _this.max_file_size
				},
				multipart			: true,
				multipart_params	: _this.multipart_params,
				max_retries 		: 0,
				chunk_size 			: 0,
				init 				: {
					Refresh			: function(up) {
					// Called when upload shim is moved
					},
					StateChanged	: function(up) {
					// Called when the state of the queue is changed
					},
					QueueChanged	: function(up) {
					// Called when the files in queue are changed by adding/removing files
					},
					BeforeUpload 	: function(up,file){
					// Called before upload to starts
					},
					UploadProgress	: function(up, file) {
					// Called while a file is being uploaded

					},
					FilesAdded		: function(up, files) {
					// Called when files are added to queue
					},

					FilesRemoved	: function(up, files) {
					// Called when files where removed from queue
					},

					FileUploaded	: function(up, file, info) {

					},
					ChunkUploaded: function(up, file, info) {
					// Called when a file chunk has finished uploading
					},
					Error: function(up, args) {
					// Called when a error has occured
					 
					}
				}

			});

			_this.file_uploader_object.init();
		}

		return FileUploader;
	})();

}).call(this);