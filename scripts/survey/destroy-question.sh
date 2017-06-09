API="http://localhost:4741"
URL_PATH="/questions"

ID="592601a0853d3d331f1f566f"
TOKEN="2Ntj2g1PVMr4TQ/f6rGUqDqjOy3vMzYTJTDWQnzbv9Y=--lwpNKuZMWDhWcwbsIEjsNbmMy80Ohr9qTx0mh/Kwyqk="


curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
