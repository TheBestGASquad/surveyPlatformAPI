API="http://localhost:4741"
URL_PATH="/edit-question"
ID="593cc8a639649b875556c909"
TOKEN="SG4/VAhV+63/BkG80nlzX5uBUAfeJycwvgkTBYM8M4w=--5tlpIHZl5FQCqZ8H8pvUJZy5TVVTj4qI5rp31HeOjH4="
TEXT="why do you 500 error in browser"

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
