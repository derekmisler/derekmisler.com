#!/bin/sh
set -e
exec pnpm --package=@playwright/test@1.56.1 dlx sh -c 'NODE_PATH="$(dirname "$(dirname "$(command -v playwright)")")" exec playwright test "$@"' visual "$@"
