API="http://localhost:4741"
ID="59306e6e8047c327a0174fbc"
URL_PATH="/questions"
curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json"

echo
