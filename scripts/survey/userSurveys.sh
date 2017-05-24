ID="592438d7d8edc3533c02f9fb"
API="http://localhost:4741"
URL_PATH="/user-surveys"
TOKEN="cj9jt8u7+UGRFfJGYFCj1yNuahz+hDR8gNzo8IebFIM=--hd/zk96AlHn/dUBYL1Sj921qJuB1sIaTpUFXPeIaP/c="
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "survey": {
      "id": "'"${ID}"'"
    }
  }'

echo
