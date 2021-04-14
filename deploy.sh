gcloud functions deploy helloWorld \
--runtime nodejs12 \
--timeout 540 \
--source index \

gcloud functions deploy onCreateUser \
--runtime nodejs12 \
--timeout 540 \
--source index \

gcloud functions deploy mp4ToHls \
--runtime nodejs12 \
--timeout 540 \
--source index \