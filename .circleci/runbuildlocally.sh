#!/usr/bin/env bash
curl --user ${CIRCLE_TOKEN}: \
    --request POST \
    --form revision=512b6edcb26926f7c1d4b48f442457c12c5c5108\
    --form config=@config.yml \
    --form notify=false \
        https://circleci.com/api/v1.1/project/github/paynow/docs/tree/master