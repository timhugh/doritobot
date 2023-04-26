#!/usr/bin/env bash

source "$(git rev-parse --show-toplevel)/.env"
curl -s -XGET \
    "https://games.bisecthosting.com/api/client/servers/${BISECT_SERVER_ID}/resources" \
    -H "Authorization: Bearer ${BISECT_API_TOKEN}" \
    -H "Accept: application/json" \
    | jq
