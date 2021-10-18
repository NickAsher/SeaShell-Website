echo "trying to uploading to s3"
set AWS_PROFILE=DeveloperShampy

aws s3 cp "./../src/html/production/home.html" "s3://www.seashellresorts/src/home.html" --acl public-read
aws s3 cp "./../src/html/production/gallery.html" "s3://www.seashellresorts/src/gallery.html" --acl public-read
aws s3 cp "./../src/html/production/about-us.html" "s3://www.seashellresorts/src/about-us.html" --acl public-read
aws s3 cp "./../src/html/production/pelican.html" "s3://www.seashellresorts/src/pelican.html" --acl public-read


aws s3 cp "./../src/public/css/mystyle.scss" "s3://www.seashellresorts/src/public/css/mystyle.scss" --acl public-read
aws s3 cp "./../src/public/css/mystyle.css" "s3://www.seashellresorts/src/public/css/mystyle.css" --acl public-read
aws s3 cp "./../src/public/css/mystyle.css.map" "s3://www.seashellresorts/src/public/css/mystyle.css.map" --acl public-read
aws s3 cp "./../src/public/css/gallery.scss" "s3://www.seashellresorts/src/public/css/gallery.scss" --acl public-read
aws s3 cp "./../src/public/css/gallery.css" "s3://www.seashellresorts/src/public/css/gallery.css" --acl public-read
aws s3 cp "./../src/public/css/gallery.css.map" "s3://www.seashellresorts/src/public/css/gallery.css.map" --acl public-read
aws s3 cp "./../src/public/css/myfonts.scss" "s3://www.seashellresorts/src/public/css/myfonts.scss" --acl public-read
aws s3 cp "./../src/public/css/myfonts.css" "s3://www.seashellresorts/src/public/css/myfonts.css" --acl public-read
aws s3 cp "./../src/public/css/myfonts.css.map" "s3://www.seashellresorts/src/public/css/myfonts.css.map" --acl public-read
aws s3 cp "./../src/public/css/theme.css" "s3://www.seashellresorts/src/public/css/theme.css" --acl public-read
