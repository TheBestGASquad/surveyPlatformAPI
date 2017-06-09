API="http://localhost:4741"
ID="59306d4b94b68f270cdc0fcc"
URL_PATH="/questions"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --data '{
    "question": {
      "_survey": "'"${ID}"'"
    }
  }'

echo
