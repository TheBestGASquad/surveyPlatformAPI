API="http://localhost:4741"
URL_PATH="/surveys"
ID="591f38a16ff2630e372abd65"
TOKEN="cj9jt8u7+UGRFfJGYFCj1yNuahz+hDR8gNzo8IebFIM=--hd/zk96AlHn/dUBYL1Sj921qJuB1sIaTpUFXPeIaP/c="
TEXT="Another Update"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "survey": {
      "title": "'"${TEXT}"'"
      },
    }
  }'

echo
