#!/bin/bash
API="http://localhost:4741"
URL_PATH="/surveys"

ID="591f37936ff2630e372abd64"
TOKEN="s3gVr1f9bxK690S+1arKeqEfqUVmZrhLeNtzkrdHX5E=--hnjkCGX6GSNXY5qCXlJsaf7DTE+R8h8Xu1flxFa1hZI="
TEXT="NEW TEST"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "survey": {
      "title": "'"${TEXT}"'"
    }
  }'

echo
