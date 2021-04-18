gcloud functions deploy helloWorld \
--runtime nodejs12 \
--timeout 540 \
--source lib \
--trigger-http
