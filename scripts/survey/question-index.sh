API="http://localhost:4741"
ID="5924a70b3adcb5d3c01ea7ba"
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
