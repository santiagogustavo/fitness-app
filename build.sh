#!/usr/bin/sh
docker buildx build --platform linux/amd64,linux/arm/v7,linux/arm64/v8,linux/ppc64le,linux/s390x --push --tag fazenda/fitness-app .
