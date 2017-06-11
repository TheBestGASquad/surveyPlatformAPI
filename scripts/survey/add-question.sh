API="http://localhost:4741"
URL_PATH="/questions"

ID="593cc8a339649b875556c908"
TOKEN="7/J0pEuHd4VtrkxextTM+fJYLIo8KfdAiv3Ru63vibU=--IRdfJwWUCEcCfI2HkZyNXsEUntUH89LJCOREPuMAjZ8="
TEXT="add another new question to survey"

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
