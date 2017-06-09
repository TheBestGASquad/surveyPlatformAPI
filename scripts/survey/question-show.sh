API="http://localhost:4741"
ID="593b1c8171578924fdbec53c"
URL_PATH="/questions"
curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json"

echo
