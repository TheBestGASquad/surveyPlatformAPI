API="http://localhost:4741"
URL_PATH="/surveys"
ID="593c183d10e9203aa2a37f32"
TOKEN="NcNMDMzIYXSDAXHcSOHwQr7Rmm0LPKx5Zzq5jgDWCRI=--6IH2m5BLxQY5hxjG+FBjiGso5esKt5eZ4FUT2XfQRkM="
TEXT="Another Update for survey"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "survey": {
      "title": "'"${TEXT}"'"
    }
  }'

echo
