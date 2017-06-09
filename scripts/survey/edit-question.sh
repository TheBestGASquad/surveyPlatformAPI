API="http://localhost:4741"
URL_PATH="/edit-question"
ID="593b1c8171578924fdbec53c"
TOKEN="94hiJOSv1K5xd2jOtwhawjYd+yVGBRc/aAEnfYL3Xt8=--bWqD/+qWm4SS1Arz5rNncdoCWm8kEpKLQv+M2KHU46c="
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
