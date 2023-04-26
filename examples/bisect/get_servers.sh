#!/usr/bin/env bash

source "$(git rev-parse --show-toplevel)/.env"
curl -s \
    -XGET "https://games.bisecthosting.com/api/client" \
    -H "Authorization: Bearer ${BISECT_API_TOKEN}" \
    -H "Accept: application/json" \
    | jq
