Steps to reproduce:

1. Add `local.candidco.com` to your /etc/hosts file for 127.0.0.1
2. Run `yarn` to install packages
3. Open a tab and run `yarn dev` to start the server.
4. Run `yarn cypress:open` to see problem, then compare with `yarn cypress:run` which has no issues.