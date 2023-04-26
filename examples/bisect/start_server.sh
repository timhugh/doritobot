#!/usr/bin/env bash

source "$(git rev-parse --show-toplevel)/.env"
curl -s -XPOST \
    "https://games.bisecthosting.com/api/client/servers/${BISECT_SERVER_ID}/power" \
    -H "Authorization: Bearer ${BISECT_API_TOKEN}" \
    -H "Accept: application/json" \
    -H "Content-Type: application/json" \
    -d '{"signal": "start"}' \
    | jq
