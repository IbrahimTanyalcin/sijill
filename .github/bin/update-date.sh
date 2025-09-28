#!/bin/bash

set -e

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <path_to_json> <field_with_content_key_to_append_date>"
    exit 1
fi

json_file="$1"
json_field="$2"

curr_date=$(date -u)
jq --arg date "$curr_date" \
    "(.[\"$json_field\"].content |= sub(\"\\\\. [^\\\"]*$\"; \".\") + \" Updated at \(\$date)\")" \
    "$json_file" > "$json_file.tmp" && mv "$json_file.tmp" "$json_file"

echo "Updated $json_field in $json_file with date $curr_date"