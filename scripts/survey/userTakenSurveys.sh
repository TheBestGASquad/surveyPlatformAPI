ID="5922efcfcbfc26252473f520"
API="http://localhost:4741"
URL_PATH="/user-surveys"
TOKEN="rQCmAZgxqhHqBZR1sqJrWAZCI1v6tWMTgBUGnoYyGqA=--7kPf0G4PrOndbbD4Pt0wS3TFb57lqHS+FcCwffPh0ao="

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "survey": {
      "id": "'"${ID}"'"
    }
  }'

echo
