API="http://localhost:4741"
URL_PATH="/edit-question"
ID="593c7475b18406632efd07cc"
TOKEN="Y2ylk7K9kWo+5BrdJvj06aBAuLmoCRzzm2/yvY18x2w=--v82xuhdh00nE2pGIV/AwO5gOmusjK9SWJWJdCuofCxw="
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
