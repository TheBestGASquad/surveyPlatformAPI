API="http://localhost:4741"
URL_PATH="/surveys"

ID="591f37936ff2630e372abd64"
TOKEN="cj9jt8u7+UGRFfJGYFCj1yNuahz+hDR8gNzo8IebFIM=--hd/zk96AlHn/dUBYL1Sj921qJuB1sIaTpUFXPeIaP/c="


curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
