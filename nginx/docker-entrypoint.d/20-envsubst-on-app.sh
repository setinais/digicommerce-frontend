#!/bin/sh

set -e

auto_envsubst() {
    local file_in="${1}"
    local file_out="${2}"
    local file_tmp="/tmp/env.tmp"
    if [ -f "${file_in}" ]
    then
        local environment_variables="$(printf '${%s}' $(env | grep -v -e "^AMS_" -e "^ELASTICSEARCH_" -e "^KAFKA_" -e "^KUBERNETES_" -e "^REDIS_" -e "^INGRESS_" | cut -d= -f1))"
        (envsubst "$environment_variables" < "${file_in}" > "${file_tmp}" && mv "${file_tmp}" "${file_out}") || (rm -f "${file_tmp}"; exit 1)
    else
        echo "$(basename ${0}): missing file '${file_in}'"
        exit 1
    fi
}

auto_envsubst "/app/env.js" "/app/env.js"
