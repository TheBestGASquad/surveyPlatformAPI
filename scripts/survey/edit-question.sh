API="http://localhost:4741"
URL_PATH="/edit-question"
ID="593c8ed388d35f6d0ffed371"
TOKEN="63FpQtGqpcQNdHXgm20U+o6v5RwuX7R9FkowfTJb4Ps=--y2DKjMmhqyosrrj+ubwqzYbMdID/BqWzUhmXLga8wZQ="
TEXT="why do you not work in browser"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "question": {
       "prompt": "'"${TEXT}"'"
    }
  }'

echo
