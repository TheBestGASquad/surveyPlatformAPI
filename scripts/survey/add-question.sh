API="http://localhost:4741"
URL_PATH="/questions"

ID="593cc8a339649b875556c908"
TOKEN="HAMmVtCGoSKK4w0avZRWKoPZU9U3z2GMOJmH7nRfvj4=--QEgYijFZQZRjLUXpXOFeM8JdxgtYmmBEadqNDOGjjGk="
TEXT="add new question to survey"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "question": {
      "prompt": "'"${TEXT}"'",
      "_survey": "'"${ID}"'"
    }
  }'

echo
