API="http://localhost:4741"
URL_PATH="/edit-question"
ID="593c7475b18406632efd07cc"
TOKEN="8peqHL6yXj16sft46NcXpXYu8n59h/vPIs2cEy2ucqE=--XKpplLKfyEB1WO2A8p7f6xb9CK6aBnb2KlikDblD22E="
TEXT="why do you not work for real"

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
