API="http://localhost:4741"
URL_PATH="/questions"
ID="59244f50810a4f24084a2543"
TOKEN="cj9jt8u7+UGRFfJGYFCj1yNuahz+hDR8gNzo8IebFIM=--hd/zk96AlHn/dUBYL1Sj921qJuB1sIaTpUFXPeIaP/c="

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "question": {
      "results":[{
        "response":true
      }]
    }
  }'

echo
