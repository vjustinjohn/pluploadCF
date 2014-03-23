<!--- 
	Author 			: Aswin Prasanth S M
	Date Created	: 23 March 2014
	Date Updated	: 

 --->
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="lib/assets/css/styles.css">
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js" charset="UTF-8"></script>

	</head>
	<body>
		<div id="container">
			<div id="header">
				PLUPLoad to server
			</div>
			<div id="body">
				<div id="uploader">
					<a href="javascript:void(0);" id="pickFiles">choose file</a>
				</div>
			</div>
			<div id="footer">
				<p>Footer</p>
			</div>
		</div>

		<script type="text/javascript" src="lib/vendor/plupload/js/plupload.full.min.js" charset="UTF-8"></script>
		<script type="text/javascript" src="lib/assets/js/FileUploader.js"></script>
		<script type="text/javascript">
			uploader1 = new FileUploader({
				upload_url		: "fileUpload.cfm",
				handle			: "pickFiles",
				drop_element	: "uploader",
				file_types		: [{title: "Image Files",extensions:"jpg,gif,png"}],
				max_file_size	: '3mb'
			});
		</script>
	</body>
</html>