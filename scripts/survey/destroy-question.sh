API="http://localhost:4741"
URL_PATH="/questions"

ID="592617ae853d3d331f1f567e"
TOKEN="s3gVr1f9bxK690S+1arKeqEfqUVmZrhLeNtzkrdHX5E=--hnjkCGX6GSNXY5qCXlJsaf7DTE+R8h8Xu1flxFa1hZI="


curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
