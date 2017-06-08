API="http://localhost:4741"
URL_PATH="/edit-question"
ID="592617ae853d3d331f1f567e"
TOKEN="s3gVr1f9bxK690S+1arKeqEfqUVmZrhLeNtzkrdHX5E=--hnjkCGX6GSNXY5qCXlJsaf7DTE+R8h8Xu1flxFa1hZI="
TEXT="Another Update"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "question": {
      "prompt": "'"${TEXT}"'"
      },
    }
  }'

echo
