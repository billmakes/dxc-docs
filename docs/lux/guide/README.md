# LUX Basics

LUX is an application. You can find the repo [here](https://github.com/Intelladon-LLC/cs_ux_main).

## Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

## Recommendations

- VS Code

  - Vetur
  - ESLint
  - Prettier

- [Vue DevTools Chrome Extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)

## Installation

```bash
$ git clone https://github.com/Intelladon-LLC/cs_ux_main.git
$ cd cs_ux_main
$ git checkout dev
$ git pull
$ yarn
```

## Development

### Set up environment files

The LUX application supports multiple vendor themes and files. On the root of the project directory you will find a `.env` file and within you will want to configure your intended environment variables.

#### .env Example

```
PORT=4000
NODE_PROTOCOL=http
SUBDOMAIN=localhost

# VUE_APP_VENDOR=pwc-vantage
# API_CONFIG_KEY=localhost

VUE_APP_VENDOR=dxc
API_CONFIG_KEY=localhost-dxc
```

To switch the vendor to PWC for example, just uncomment the corresponding `VUE_APP_VENDOR` and `API_CONFIG_KEY` properties and comment out the currently used vendor properties.

#### Create your .env.local file

On the root of the project directory, create a `.env.local` file and designate your credentials for the properties `API_SECRET_KEY` and `API_GATEWAY_KEY` respectfully.

```
API_SECRET_KEY="yoursecretkeyhere"
API_GATEWAY_KEY=yourgatewaykeyhere
```

Your `API_SECRET_KEY` will be a string surrounded with double quotes.

### Git

Create a branch from dev for feature development/hotfixes. Use the corresponding Jira ticket number as the branch name (if a ticket exists) [Read more about Developer Workflow here](../dev-workflow/README.md)

#### Example

```bash
$ git checkout -b CS-#####
```

### Local Development

To run your local development server, run the following command.

```bash
yarn serve
```

If you run into any issues with this, reach out to a team lead for assistance.

## Code Linting

### Install the following plugins for VS Code

- Vetur
- ESLint
- Prettier

### Linting on the command line

```bash
yarn lint ./path/to/dir # check for errors
yarn lint ./path/to/dir --fix # lint and fix
```

### Lint on save

Add the following lines to your VS Code User Settings:

```json
{
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true
}
```

Note: If you have any conflicting user settings for prettier or eslint, this may not work as intended

### Example VS Code User Settings

```
{
 "eslint.validate": [
 {
 "language": "vue",
 "autoFix": true
 },
 {
 "language": "javascript",
 "autoFix": true
 },
 {
 "language": "javascriptreact",
 "autoFix": true
 }
 ],
 "eslint.autoFixOnSave": true,
 "editor.formatOnSave": false,
 "vetur.validation.template": false
}
```
