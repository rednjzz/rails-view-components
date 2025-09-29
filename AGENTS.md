# Repository Guidelines

## Project Structure & Module Organization
- `app/` holds Rails modules (controllers, models, jobs, mailers) plus assets; place new view components under `app/components` with matching templates in `app/components/*/*.html.erb`.
- `app/javascript/` contains Stimulus controllers and component-specific JS; compiled output lands in `app/assets/builds` and should not be edited by hand.
- Tailwind sources live in `app/assets/stylesheets`; generated CSS also lands in `app/assets/builds`.
- Generators for components reside in `lib/generators/view_component`; update here if scaffold defaults need tuning. Tests mirror app structure inside `test/` (unit, system, fixtures).

## Build, Test, and Development Commands
- `bin/setup` installs gems, runs migrations, and prepares the SQLite database.
- `bin/dev` starts the Procfile.dev stack (Rails server plus JS/CSS watchers) for local development.
- `bin/rails test` runs the full Minitest suite; add paths (e.g., `bin/rails test test/controllers`) to scope runs.
- `bin/rails test:system` executes Capybara system tests in `test/system`.
- `yarn build` and `yarn build:css` produce production-ready JS and CSS bundles.
- `bundle exec rubocop` and `bundle exec brakeman --quiet` enforce style and security checks before submitting changes.

## Coding Style & Naming Conventions
- Follow `rubocop-rails-omakase`: two-space indentation, snake_case methods, frozen string literals when practical.
- Name components `SomethingComponent` and store them as `app/components/something_component.rb`; matching templates use the same stem.
- Stimulus controllers live in `app/javascript/controllers` and follow `example_controller.js`; Tailwind utility classes should be preferred over bespoke CSS.

## Testing Guidelines
- Use Minitest with `_test.rb` filenames that mirror the source path (e.g., `test/controllers/users_controller_test.rb`).
- Component tests belong in `test/components`; exercise sidecar templates and slots with rendered examples.
- Maintain fixtures in `test/fixtures` and keep system tests deterministic by using Capybara helpers and avoiding random sleeps.

## Commit & Pull Request Guidelines
- Write concise, imperative commit messages (e.g., `Add profile card component`); group related changes together.
- Ensure each PR describes motivation, summarizes functional/UI changes, and links to related issues.
- Include screenshots or previews when modifying view components; call out new migrations or configuration toggles.
- Confirm test and lint commands pass locally before requesting review.

## View Component Workflow
- Generate components via `bin/rails generate view_component Button` to create Ruby, template, and preview files.
- Add previews under `test/components/previews` so reviewers can inspect UI changes quickly.
