Gather qualitative feedback from users on your new or existing features. 

# Feature survey app

## Installation

1. Make sure you have enabled `opt_in_site_apps: true` in your posthog-js config.
2. Install this app from PostHog's app repository.
3. Enable and configure the app for your site.

## Local development

If you wish to develop on this locally, clone the repo and run the following:

```bash
npx @posthog/app-dev-server
```

or

```bash
pnpm install
pnpm start
```

Then browse to [http://localhost:3040/](http://localhost:3040/), open `site.ts` in an editor, and hack away. 

## Events

The following events can be used to trigger actions when a survey is shown/completed/dismissed. This can be useful if the survey overlaps with another widget.

```javascript
window.addEventListener('PHSurveyShown', function (e) {
   ..
});

window.addEventListener('PHSurveyClosed', function (e) {
   ..
});
```
