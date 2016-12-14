
#!/usr/bin/env bash
DEFAULT="deployer"
PROFILE=${AWS_PROFILE:-$DEFAULT}
BUCKET=${DESTINATION_BUCKET}
DIR=dist/
aws s3 sync $DIR s3://$BUCKET/ --profile "$PROFILE"