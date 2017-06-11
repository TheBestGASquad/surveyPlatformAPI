API="http://localhost:4741"
URL_PATH="/edit-question"
ID="593cc21add958c741b52b980"
TOKEN="n0Itq4w6FgGTVOvzTjY7gyXEHnbs6D50hcIefN2ErcY=--W7oj+gK2msAYZt1Jh/T2h5dlGK9U/etBRGYPglPzC9I="
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
