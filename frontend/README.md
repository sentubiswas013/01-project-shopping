# Libary

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/nx-api/js?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

##  Backend URL details:
- http://localhost:8080/swagger-ui.html

## Generate a library

```sh
npx nx g @nx/js:lib packages/pkg1 --publishable --importPath=@my-org/pkg1
```

## clear 
- npm cache clean --force
- rm -rf node_modules package-lock.json
- npm install


## Intitialize the nx in local
```sh
npm install -g nx
```

## Create defailt nx workspace with libary name
```sh
npx create-nx-workspace@latest libary 
```

## Install react in nx
```sh
npm install --save-dev @nrwl/react
```

## Reset nx workspace
```sh
npx nx reset
```

## Create the Application in apps folder
```sh
npx nx generate @nrwl/react:application store --directory=apps
npx nx generate @nrwl/react:application library --directory=apps
npx nx generate @nrwl/react:application admin --directory=apps
```

## Run the library Application
```sh
npx nx run admin:serve
npx nx run backend:serve
npx nx run library:serve
npx nx run store:serve
```

## Used Packages

```sh
npm install bootstrap --legacy-peer-deps
npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps
npm install @mui/icons-material --legacy-peer-deps
npm install react-bootstrap bootstrap --legacy-peer-deps
npx sb init 

npm install --save @fortawesome/fontawesome-svg-core --legacy-peer-deps
npm install --save @fortawesome/free-solid-svg-icons --legacy-peer-deps
npm install --save @fortawesome/react-fontawesome --legacy-peer-deps
npm install --save @fortawesome/free-brands-svg-icons
npm install --save react-owl-carousel2 owl.carousel --legacy-peer-deps
npm install --save jquery --legacy-peer-deps
npm install --save  npm install swiper --legacy-peer-deps
npm install --save  react-router-dom --legacy-peer-deps
npm install --save npm install @fortawesome/free-brands-svg-icons --legacy-peer-deps


npm install --save @fortawesome/fontawesome-svg-core \ @fortawesome/free-solid-svg-icons \ @fortawesome/free-regular-svg-icons \ @fortawesome/free-brands-svg-icons \ @fortawesome/react-fontawesome --legacy-peer-deps

npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons --legacy-peer-deps

``` 

To run any task with Nx use:

```sh
npx nx <target> <project-name>
i.e : npx nx run library:serve
```

### Example Structure for a Large App
Here's a more concrete example of how the structure could look:

```
src/
  ├── app/
  │    ├── core/            # Core services, models, etc.
  │    │    ├── services/    # Core services
  │    │    ├── interceptors/ # HTTP interceptors
  │    │    └── models/       # Models used across the app
  │    ├── shared/          # Shared components, pipes, directives, etc.
  │    │    ├── components/ # Reusable UI components
  │    │    ├── pipes/      # Reusable pipes
  │    │    ├── directives/ # Reusable directives
  │    │    └── modules/    # Shared modules that can be imported across the app
  │    ├── features/        # Feature-specific modules
  │    │    ├── dashboard/  # Dashboard feature module
  │    │    ├── user/       # User management feature module
  │    │    └── auth/       # Authentication feature module
  │    ├── app.component.ts # Main app component
  │    ├── app.module.ts    # Root module
  │    └── app-routing.module.ts # App routing module
  ├── assets/               # Static assets (images, icons, etc.)
  │      ├── images/
  │      ├── fonts/
  │      └── icons/
  ├── environments/         # Environment settings
  │      ├── environment.ts         # Development environment settings
  │      ├── environment.prod.ts    # Production environment settings
  └── index.html            # Main HTML file
```

## Versioning and releasing

To version and release the library use

```
npx nx release
```

Pass `--dry-run` to see what would happen without actually releasing the library.

[Learn more about Nx release &raquo;](hhttps://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Keep TypeScript project references up to date

Nx automatically updates TypeScript [project references](https://www.typescriptlang.org/docs/handbook/project-references.html) in `tsconfig.json` files to ensure they remain accurate based on your project dependencies (`import` or `require` statements). This sync is automatically done when running tasks such as `build` or `typecheck`, which require updated references to function correctly.

To manually trigger the process to sync the project graph dependencies information to the TypeScript project references, run the following command:

```sh
npx nx sync
```

You can enforce that the TypeScript project references are always in the correct state when running in CI by adding a step to your CI job configuration that runs the following command:

```sh
npx nx sync:check
```

[Learn more about nx sync](https://nx.dev/reference/nx-commands#sync)

## Set up CI!

### Step 1

To connect to Nx Cloud, run the following command:

```sh
npx nx connect
```

Connecting to Nx Cloud ensures a [fast and scalable CI](https://nx.dev/ci/intro/why-nx-cloud?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) pipeline. It includes features such as:

- [Remote caching](https://nx.dev/ci/features/remote-cache?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task distribution across multiple machines](https://nx.dev/ci/features/distribute-task-execution?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Automated e2e test splitting](https://nx.dev/ci/features/split-e2e-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Task flakiness detection and rerunning](https://nx.dev/ci/features/flaky-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### Step 2

Use the following command to configure a CI workflow for your workspace:

```sh
npx nx g ci-workflow
```

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/js?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
