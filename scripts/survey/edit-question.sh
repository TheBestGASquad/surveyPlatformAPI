API="http://localhost:4741"
URL_PATH="/edit-question"
ID="5922efcfcbfc26252473f520"
TOKEN="OvjrLixZNmX90ks7k65K5zIXTpdfwqFO68QklxiS4Og=--1bMLpmLYBLLBvHq9cNrxUbU66vf/G3OOjEDfLOkBehw="
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
