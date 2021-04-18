gcloud functions deploy helloWorld \
--runtime nodejs12 \
--timeout 540 \
--source lib \
--trigger-http

gcloud functions deploy onCreateUser \
--runtime nodejs12 \
--timeout 540 \
--source lib \
--trigger-event providers/firebase.auth/eventTypes/user.create \
--trigger-resource tipper-303209

gcloud functions deploy mp4ToHls \
--runtime nodejs12 \
--timeout 540 \
--source lib \
--trigger-event google.storage.object.finalize \
--trigger-resource projects/tipper-303209/buckets/performances/videos