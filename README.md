This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```
vristo-next-main
├─ .editorconfig
├─ .eslintrc.json
├─ .prettierrc
├─ app
│  ├─ (auth)
│  │  ├─ auth
│  │  │  ├─ boxed-lockscreen
│  │  │  │  └─ page.tsx
│  │  │  ├─ boxed-password-reset
│  │  │  │  └─ page.tsx
│  │  │  ├─ boxed-signin
│  │  │  │  └─ page.tsx
│  │  │  ├─ boxed-signup
│  │  │  │  └─ page.tsx
│  │  │  ├─ cover-lockscreen
│  │  │  │  └─ page.tsx
│  │  │  ├─ cover-login
│  │  │  │  └─ page.tsx
│  │  │  ├─ cover-password-reset
│  │  │  │  └─ page.tsx
│  │  │  └─ cover-register
│  │  │     └─ page.tsx
│  │  ├─ layout.tsx
│  │  └─ pages
│  │     ├─ coming-soon-boxed
│  │     │  └─ page.tsx
│  │     ├─ coming-soon-cover
│  │     │  └─ page.tsx
│  │     ├─ contact-us-boxed
│  │     │  └─ page.tsx
│  │     ├─ contact-us-cover
│  │     │  └─ page.tsx
│  │     ├─ error404
│  │     │  └─ page.tsx
│  │     ├─ error500
│  │     │  └─ page.tsx
│  │     ├─ error503
│  │     │  └─ page.tsx
│  │     └─ maintenence
│  │        └─ page.tsx
│  ├─ (defaults)
│  │  ├─ analytics
│  │  │  └─ page.tsx
│  │  ├─ apps
│  │  │  ├─ calendar
│  │  │  │  └─ page.tsx
│  │  │  ├─ chat
│  │  │  │  └─ page.tsx
│  │  │  ├─ contacts
│  │  │  │  └─ page.tsx
│  │  │  ├─ invoice
│  │  │  │  ├─ add
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ edit
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ list
│  │  │  │  │  └─ page.tsx
│  │  │  │  └─ preview
│  │  │  │     └─ page.tsx
│  │  │  ├─ mailbox
│  │  │  │  └─ page.tsx
│  │  │  ├─ notes
│  │  │  │  └─ page.tsx
│  │  │  ├─ scrumboard
│  │  │  │  └─ page.tsx
│  │  │  └─ todolist
│  │  │     └─ page.tsx
│  │  ├─ charts
│  │  │  └─ page.tsx
│  │  ├─ components
│  │  │  ├─ accordions
│  │  │  │  └─ page.tsx
│  │  │  ├─ cards
│  │  │  │  └─ page.tsx
│  │  │  ├─ carousel
│  │  │  │  └─ page.tsx
│  │  │  ├─ countdown
│  │  │  │  └─ page.tsx
│  │  │  ├─ counter
│  │  │  │  └─ page.tsx
│  │  │  ├─ lightbox
│  │  │  │  └─ page.tsx
│  │  │  ├─ list-group
│  │  │  │  └─ page.tsx
│  │  │  ├─ media-object
│  │  │  │  └─ page.tsx
│  │  │  ├─ modals
│  │  │  │  └─ page.tsx
│  │  │  ├─ notifications
│  │  │  │  └─ page.tsx
│  │  │  ├─ pricing-table
│  │  │  │  └─ page.tsx
│  │  │  ├─ sweetalert
│  │  │  │  └─ page.tsx
│  │  │  ├─ tabs
│  │  │  │  └─ page.tsx
│  │  │  └─ timeline
│  │  │     └─ page.tsx
│  │  ├─ crypto
│  │  │  └─ page.tsx
│  │  ├─ datatables
│  │  │  ├─ advanced
│  │  │  │  └─ page.tsx
│  │  │  ├─ alt-pagination
│  │  │  │  └─ page.tsx
│  │  │  ├─ basic
│  │  │  │  └─ page.tsx
│  │  │  ├─ checkbox
│  │  │  │  └─ page.tsx
│  │  │  ├─ column-chooser
│  │  │  │  └─ page.tsx
│  │  │  ├─ export
│  │  │  │  └─ page.tsx
│  │  │  ├─ multi-column
│  │  │  │  └─ page.tsx
│  │  │  ├─ multiple-tables
│  │  │  │  └─ page.tsx
│  │  │  ├─ order-sorting
│  │  │  │  └─ page.tsx
│  │  │  ├─ range-search
│  │  │  │  └─ page.tsx
│  │  │  └─ skin
│  │  │     └─ page.tsx
│  │  ├─ dragndrop
│  │  │  └─ page.tsx
│  │  ├─ elements
│  │  │  ├─ alerts
│  │  │  │  └─ page.tsx
│  │  │  ├─ avatar
│  │  │  │  └─ page.tsx
│  │  │  ├─ badges
│  │  │  │  └─ page.tsx
│  │  │  ├─ breadcrumbs
│  │  │  │  └─ page.tsx
│  │  │  ├─ buttons
│  │  │  │  └─ page.tsx
│  │  │  ├─ buttons-group
│  │  │  │  └─ page.tsx
│  │  │  ├─ color-library
│  │  │  │  └─ page.tsx
│  │  │  ├─ dropdown
│  │  │  │  └─ page.tsx
│  │  │  ├─ infobox
│  │  │  │  └─ page.tsx
│  │  │  ├─ jumbotron
│  │  │  │  └─ page.tsx
│  │  │  ├─ loader
│  │  │  │  └─ page.tsx
│  │  │  ├─ pagination
│  │  │  │  └─ page.tsx
│  │  │  ├─ popovers
│  │  │  │  └─ page.tsx
│  │  │  ├─ progress-bar
│  │  │  │  └─ page.tsx
│  │  │  ├─ search
│  │  │  │  └─ page.tsx
│  │  │  ├─ tooltips
│  │  │  │  └─ page.tsx
│  │  │  ├─ treeview
│  │  │  │  └─ page.tsx
│  │  │  └─ typography
│  │  │     └─ page.tsx
│  │  ├─ finance
│  │  │  └─ page.tsx
│  │  ├─ font-icons
│  │  │  └─ page.tsx
│  │  ├─ forms
│  │  │  ├─ basic
│  │  │  │  └─ page.tsx
│  │  │  ├─ checkbox-radio
│  │  │  │  └─ page.tsx
│  │  │  ├─ clipboard
│  │  │  │  └─ page.tsx
│  │  │  ├─ date-picker
│  │  │  │  └─ page.tsx
│  │  │  ├─ file-upload
│  │  │  │  └─ page.tsx
│  │  │  ├─ input-group
│  │  │  │  └─ page.tsx
│  │  │  ├─ input-mask
│  │  │  │  └─ page.tsx
│  │  │  ├─ layouts
│  │  │  │  └─ page.tsx
│  │  │  ├─ markdown-editor
│  │  │  │  └─ page.tsx
│  │  │  ├─ quill-editor
│  │  │  │  └─ page.tsx
│  │  │  ├─ select2
│  │  │  │  └─ page.tsx
│  │  │  ├─ switches
│  │  │  │  └─ page.tsx
│  │  │  ├─ touchspin
│  │  │  │  └─ page.tsx
│  │  │  ├─ validation
│  │  │  │  └─ page.tsx
│  │  │  └─ wizards
│  │  │     └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ pages
│  │  │  ├─ faq
│  │  │  │  └─ page.tsx
│  │  │  └─ knowledge-base
│  │  │     └─ page.tsx
│  │  ├─ tables
│  │  │  └─ page.tsx
│  │  ├─ users
│  │  │  ├─ profile
│  │  │  │  └─ page.tsx
│  │  │  └─ user-account-settings
│  │  │     └─ page.tsx
│  │  └─ widgets
│  │     └─ page.tsx
│  ├─ (employee)
│  ├─ (employer)
│  ├─ (public)
│  ├─ api
│  ├─ icon.png
│  ├─ layout.tsx
│  ├─ loading.tsx
│  └─ not-found.tsx
├─ App.tsx
├─ components
│  ├─ apps
│  │  ├─ calendar
│  │  │  └─ components-apps-calendar.tsx
│  │  ├─ chat
│  │  │  └─ components-apps-chat.tsx
│  │  ├─ contacts
│  │  │  └─ components-apps-contacts.tsx
│  │  ├─ mailbox
│  │  │  ├─ components-apps-mailbox.tsx
│  │  │  └─ invoice
│  │  │     ├─ components-apps-invoice-add.tsx
│  │  │     ├─ components-apps-invoice-edit.tsx
│  │  │     ├─ components-apps-invoice-list.tsx
│  │  │     └─ components-apps-invoice-preview.tsx
│  │  ├─ notes
│  │  │  └─ components-apps-notes.tsx
│  │  ├─ scrumboard
│  │  │  └─ components-apps-scrumboard.tsx
│  │  └─ todolist
│  │     └─ components-apps-todolist.tsx
│  ├─ auth
│  │  ├─ components-auth-login-form.tsx
│  │  ├─ components-auth-register-form.tsx
│  │  ├─ components-auth-reset-password-form.tsx
│  │  └─ components-auth-unlock-form.tsx
│  ├─ charts
│  │  ├─ components-charts-area.tsx
│  │  ├─ components-charts-bar.tsx
│  │  ├─ components-charts-bubble.tsx
│  │  ├─ components-charts-column-stacked.tsx
│  │  ├─ components-charts-column.tsx
│  │  ├─ components-charts-donut.tsx
│  │  ├─ components-charts-line.tsx
│  │  ├─ components-charts-mixed.tsx
│  │  ├─ components-charts-pie.tsx
│  │  ├─ components-charts-polar-area.tsx
│  │  ├─ components-charts-radar.tsx
│  │  └─ components-charts-radial-bar.tsx
│  ├─ components
│  │  ├─ accordions
│  │  │  ├─ components-accordions-basic.tsx
│  │  │  ├─ components-accordions-icons.tsx
│  │  │  ├─ components-accordions-no-icons.tsx
│  │  │  └─ components-accordions-without-spacing.tsx
│  │  ├─ carousel
│  │  │  ├─ components-carousel-autoplay.tsx
│  │  │  ├─ components-carousel-basic.tsx
│  │  │  ├─ components-carousel-loop.tsx
│  │  │  ├─ components-carousel-multiple-slides.tsx
│  │  │  └─ components-carousel-vertical.tsx
│  │  ├─ countdown
│  │  │  ├─ components-countdown-circle.tsx
│  │  │  └─ components-countdown-simple.tsx
│  │  ├─ counter
│  │  │  ├─ components-counter-simple.tsx
│  │  │  └─ components-counter-with-icon.tsx
│  │  ├─ lightbox
│  │  │  └─ components-lightbox.tsx
│  │  ├─ media-object
│  │  │  └─ components-media-object-dropdown.tsx
│  │  ├─ modals
│  │  │  ├─ components-modal-animation-style.tsx
│  │  │  ├─ components-modal-basic.tsx
│  │  │  ├─ components-modal-custom.tsx
│  │  │  ├─ components-modal-optional-sizes.tsx
│  │  │  ├─ components-modal-remove-animation.tsx
│  │  │  ├─ components-modal-static.tsx
│  │  │  ├─ components-modal-vertically-center.tsx
│  │  │  └─ components-modal-video.tsx
│  │  ├─ notifications
│  │  │  ├─ components-notifications-basic.tsx
│  │  │  ├─ components-notifications-bg-color.tsx
│  │  │  ├─ components-notifications-click-callback.tsx
│  │  │  ├─ components-notifications-duration.tsx
│  │  │  ├─ components-notifications-no-action.tsx
│  │  │  └─ components-notifications-position.tsx
│  │  ├─ pricing-table
│  │  │  └─ components-pricing-table-toggle.tsx
│  │  ├─ sweet-alerts
│  │  │  ├─ components-sweet-alerts-auto-close-timer.tsx
│  │  │  ├─ components-sweet-alerts-basic.tsx
│  │  │  ├─ components-sweet-alerts-cancel.tsx
│  │  │  ├─ components-sweet-alerts-chaining-modals.tsx
│  │  │  ├─ components-sweet-alerts-custom-animation.tsx
│  │  │  ├─ components-sweet-alerts-custom-image.tsx
│  │  │  ├─ components-sweet-alerts-custom-style.tsx
│  │  │  ├─ components-sweet-alerts-dynamic.tsx
│  │  │  ├─ components-sweet-alerts-html.tsx
│  │  │  ├─ components-sweet-alerts-mixin.tsx
│  │  │  ├─ components-sweet-alerts-rtl.tsx
│  │  │  ├─ components-sweet-alerts-success.tsx
│  │  │  ├─ components-sweet-alerts-title-with-text.tsx
│  │  │  ├─ components-sweet-alerts-warning.tsx
│  │  │  └─ components-sweet-alerts-with-footer.tsx
│  │  └─ tabs
│  │     ├─ components-tabs-animated-line.tsx
│  │     ├─ components-tabs-border-top.tsx
│  │     ├─ components-tabs-border.tsx
│  │     ├─ components-tabs-icon-pills.tsx
│  │     ├─ components-tabs-icon.tsx
│  │     ├─ components-tabs-justify-center-pills.tsx
│  │     ├─ components-tabs-justify-center.tsx
│  │     ├─ components-tabs-justify-pills.tsx
│  │     ├─ components-tabs-justify-right-pills.tsx
│  │     ├─ components-tabs-justify-right.tsx
│  │     ├─ components-tabs-justify-vertical-pills-right.tsx
│  │     ├─ components-tabs-justify.tsx
│  │     ├─ components-tabs-line.tsx
│  │     ├─ components-tabs-pills-with-icon.tsx
│  │     ├─ components-tabs-rounded-pill-with-icon.tsx
│  │     ├─ components-tabs-simple-pills.tsx
│  │     ├─ components-tabs-simple.tsx
│  │     ├─ components-tabs-vertical-bordered.tsx
│  │     ├─ components-tabs-vertical-circle-with-icon.tsx
│  │     ├─ components-tabs-vertical-line.tsx
│  │     ├─ components-tabs-vertical-pills.tsx
│  │     └─ components-tabs-vertical-rounded-with-icon.tsx
│  ├─ components-widgets.tsx
│  ├─ dashboard
│  │  ├─ components-dashboard-analytics.tsx
│  │  ├─ components-dashboard-crypto.tsx
│  │  ├─ components-dashboard-finance.tsx
│  │  └─ components-dashboard-sales.tsx
│  ├─ datatables
│  │  ├─ components-datatables-advanced.tsx
│  │  ├─ components-datatables-alt-pagination.tsx
│  │  ├─ components-datatables-basic.tsx
│  │  ├─ components-datatables-checkbox.tsx
│  │  ├─ components-datatables-column-chooser.tsx
│  │  ├─ components-datatables-export.tsx
│  │  ├─ components-datatables-multi-column.tsx
│  │  ├─ components-datatables-multiple-tables.tsx
│  │  ├─ components-datatables-order-sorting.tsx
│  │  ├─ components-datatables-range-search.tsx
│  │  └─ components-datatables-skin.tsx
│  ├─ dragndrop
│  │  ├─ components-dragndrop-delete.tsx
│  │  ├─ components-dragndrop-grid.tsx
│  │  ├─ components-dragndrop-handler.tsx
│  │  ├─ components-dragndrop-icon-change.tsx
│  │  ├─ components-dragndrop-news-feed.tsx
│  │  ├─ components-dragndrop-sortable.tsx
│  │  └─ components-dragndrop-swap.tsx
│  ├─ dropdown.tsx
│  ├─ elements
│  │  ├─ alerts
│  │  │  ├─ elements-alerts-arrowed.tsx
│  │  │  ├─ elements-alerts-custom.tsx
│  │  │  ├─ elements-alerts-default.tsx
│  │  │  ├─ elements-alerts-outline.tsx
│  │  │  ├─ elements-alerts-solid.tsx
│  │  │  └─ elements-alerts-with-icon.tsx
│  │  ├─ avatar
│  │  │  ├─ elements-avatar-animate-x-axis.tsx
│  │  │  ├─ elements-avatar-animate-y-axis.tsx
│  │  │  ├─ elements-avatar-basic.tsx
│  │  │  ├─ elements-avatar-group.tsx
│  │  │  ├─ elements-avatar-indicators.tsx
│  │  │  ├─ elements-avatar-initials.tsx
│  │  │  ├─ elements-avatar-shapes.tsx
│  │  │  └─ elements-avatar-tooltip.tsx
│  │  ├─ badges
│  │  │  ├─ elements-badges-basic.tsx
│  │  │  ├─ elements-badges-classic.tsx
│  │  │  ├─ elements-badges-custom.tsx
│  │  │  ├─ elements-badges-outline.tsx
│  │  │  ├─ elements-badges-pills.tsx
│  │  │  └─ elements-badges-with-headings.tsx
│  │  ├─ breadcrumbs
│  │  │  ├─ elements-breadcrumbs-arrowed.tsx
│  │  │  ├─ elements-breadcrumbs-basic.tsx
│  │  │  ├─ elements-breadcrumbs-default.tsx
│  │  │  ├─ elements-breadcrumbs-dotted-seperators.tsx
│  │  │  └─ elements-breadcrumbs-with-icon.tsx
│  │  ├─ button-group
│  │  │  ├─ elements-button-group-horizontal.tsx
│  │  │  ├─ elements-button-group-input-group.tsx
│  │  │  └─ elements-button-group-vertical.tsx
│  │  ├─ buttons
│  │  │  ├─ elements-buttons-block.tsx
│  │  │  ├─ elements-buttons-default.tsx
│  │  │  ├─ elements-buttons-outline.tsx
│  │  │  ├─ elements-buttons-rounded.tsx
│  │  │  ├─ elements-buttons-sizes.tsx
│  │  │  ├─ elements-buttons-solid.tsx
│  │  │  └─ elements-buttons-with-icons.tsx
│  │  ├─ dropdowns
│  │  │  ├─ elements-dropdowns-basic.tsx
│  │  │  ├─ elements-dropdowns-custom.tsx
│  │  │  ├─ elements-dropdowns-drop-left.tsx
│  │  │  ├─ elements-dropdowns-drop-right.tsx
│  │  │  ├─ elements-dropdowns-drop-up.tsx
│  │  │  ├─ elements-dropdowns-grouped-btn.tsx
│  │  │  ├─ elements-dropdowns-large-btn.tsx
│  │  │  ├─ elements-dropdowns-small-btn.tsx
│  │  │  └─ elements-dropdowns-split.tsx
│  │  ├─ popovers
│  │  │  ├─ elements-popovers-colors.tsx
│  │  │  ├─ elements-popovers-default.tsx
│  │  │  ├─ elements-popovers-dismissible.tsx
│  │  │  ├─ elements-popovers-options.tsx
│  │  │  └─ elements-popovers-placement.tsx
│  │  ├─ search
│  │  │  ├─ elements-search-live.tsx
│  │  │  └─ elements-search-overlay.tsx
│  │  ├─ tooltips
│  │  │  ├─ elements-tooltips-colors.tsx
│  │  │  ├─ elements-tooltips-default.tsx
│  │  │  ├─ elements-tooltips-html.tsx
│  │  │  ├─ elements-tooltips-options.tsx
│  │  │  └─ elements-tooltips-placement.tsx
│  │  └─ treeview
│  │     ├─ elements-treeview-animated.tsx
│  │     └─ elements-treeview-basic.tsx
│  ├─ forms
│  │  ├─ clipboard
│  │  │  ├─ components-forms-clipboard-advanced.tsx
│  │  │  ├─ components-forms-clipboard-input.tsx
│  │  │  ├─ components-forms-clipboard-text-from-paragraph.tsx
│  │  │  └─ components-forms-clipboard-textarea.tsx
│  │  ├─ date-picker
│  │  │  ├─ components-form-date-picker-basic.tsx
│  │  │  ├─ components-form-date-picker-date-time.tsx
│  │  │  ├─ components-form-date-picker-range.tsx
│  │  │  └─ components-form-date-picker-time.tsx
│  │  ├─ file-upload
│  │  │  ├─ components-forms-file-upload-multi.tsx
│  │  │  └─ components-forms-file-upload-single.tsx
│  │  ├─ input-group
│  │  │  ├─ components-forms-input-group-button-addons.tsx
│  │  │  ├─ components-forms-input-group-buttons-with-dropdowns.tsx
│  │  │  ├─ components-forms-input-group-checkboxes.tsx
│  │  │  ├─ components-forms-input-group-default.tsx
│  │  │  ├─ components-forms-input-group-dropdown-icon.tsx
│  │  │  ├─ components-forms-input-group-multiple-addons.tsx
│  │  │  ├─ components-forms-input-group-multiple-inputs.tsx
│  │  │  ├─ components-forms-input-group-radio.tsx
│  │  │  ├─ components-forms-input-group-segmented-buttons.tsx
│  │  │  ├─ components-forms-input-group-simple-icon.tsx
│  │  │  ├─ components-forms-input-group-sizes.tsx
│  │  │  ├─ components-forms-input-group-spinning-icon.tsx
│  │  │  └─ components-forms-input-group-switch.tsx
│  │  ├─ input-mask
│  │  │  ├─ components-forms-input-mask-alternate.tsx
│  │  │  ├─ components-forms-input-mask-basic.tsx
│  │  │  ├─ components-forms-input-mask-currency.tsx
│  │  │  ├─ components-forms-input-mask-date.tsx
│  │  │  ├─ components-forms-input-mask-dynamic.tsx
│  │  │  ├─ components-forms-input-mask-ip.tsx
│  │  │  └─ components-forms-input-mask-phone.tsx
│  │  ├─ layouts
│  │  │  ├─ components-forms-layouts-actions-buttons.tsx
│  │  │  ├─ components-forms-layouts-auto-sizing.tsx
│  │  │  ├─ components-forms-layouts-grid.tsx
│  │  │  ├─ components-forms-layouts-horizontal.tsx
│  │  │  ├─ components-forms-layouts-inline.tsx
│  │  │  ├─ components-forms-layouts-login.tsx
│  │  │  ├─ components-forms-layouts-registration.tsx
│  │  │  └─ components-forms-layouts-stack.tsx
│  │  ├─ markdown-editor
│  │  │  ├─ components-forms-markdown-editor-autosaving.tsx
│  │  │  └─ components-forms-markdown-editor-basic.tsx
│  │  ├─ quill-editor
│  │  │  ├─ components-forms-quill-editor-basic.tsx
│  │  │  └─ components-forms-quill-editor-with-tooltip.tsx
│  │  ├─ range-picker
│  │  │  ├─ components-form-range-picker-bottom-left.tsx
│  │  │  ├─ components-form-range-picker-bottom-right.tsx
│  │  │  ├─ components-form-range-picker-input-element.tsx
│  │  │  ├─ components-form-range-picker-locking.tsx
│  │  │  ├─ components-form-range-picker-non-linear.tsx
│  │  │  ├─ components-form-range-picker-top-left.tsx
│  │  │  └─ components-form-range-picker-top-right.tsx
│  │  ├─ select2
│  │  │  ├─ components-forms-select-basic.tsx
│  │  │  ├─ components-forms-select-disabling-options.tsx
│  │  │  ├─ components-forms-select-multiselect.tsx
│  │  │  ├─ components-forms-select-nested.tsx
│  │  │  ├─ components-forms-select-placeholder.tsx
│  │  │  └─ components-forms-select-searchable.tsx
│  │  ├─ touchspin
│  │  │  ├─ components-forms-touchspin-button-spin.tsx
│  │  │  ├─ components-forms-touchspin-change-button-class.tsx
│  │  │  ├─ components-forms-touchspin-inline-spin-button.tsx
│  │  │  ├─ components-forms-touchspin-size.tsx
│  │  │  ├─ components-forms-touchspin-spin-with-step5.tsx
│  │  │  ├─ components-forms-touchspin-text-with-spin-button.tsx
│  │  │  ├─ components-forms-touchspin-vertical-spin-button.tsx
│  │  │  └─ components-forms-touchspin-wrapping-value-spin.tsx
│  │  ├─ validation
│  │  │  ├─ components-forms-validation-basic.tsx
│  │  │  ├─ components-forms-validation-browser-default.tsx
│  │  │  ├─ components-forms-validation-custom-styles.tsx
│  │  │  ├─ components-forms-validation-email.tsx
│  │  │  ├─ components-forms-validation-select.tsx
│  │  │  └─ components-forms-validation-tooltips.tsx
│  │  └─ wizards
│  │     ├─ components-forms-wizards-circle-icon.tsx
│  │     ├─ components-forms-wizards-circle-text-and-icon.tsx
│  │     ├─ components-forms-wizards-pills-icon.tsx
│  │     ├─ components-forms-wizards-pills-text-and-icon.tsx
│  │     ├─ components-forms-wizards-pills-text.tsx
│  │     ├─ components-forms-wizards-square-icon.tsx
│  │     └─ components-forms-wizards-square-text-and-icon.tsx
│  ├─ highlight.tsx
│  ├─ icon
│  │  ├─ icon-airplay.tsx
│  │  ├─ icon-archive.tsx
│  │  ├─ icon-arrow-backward.tsx
│  │  ├─ icon-arrow-forward.tsx
│  │  ├─ icon-arrow-left.tsx
│  │  ├─ icon-arrow-wave-left-up.tsx
│  │  ├─ icon-at.tsx
│  │  ├─ icon-award.tsx
│  │  ├─ icon-bar-chart.tsx
│  │  ├─ icon-bell-bing.tsx
│  │  ├─ icon-bell.tsx
│  │  ├─ icon-binance.tsx
│  │  ├─ icon-bitcoin.tsx
│  │  ├─ icon-bolt.tsx
│  │  ├─ icon-book.tsx
│  │  ├─ icon-bookmark.tsx
│  │  ├─ icon-box.tsx
│  │  ├─ icon-calendar.tsx
│  │  ├─ icon-camera.tsx
│  │  ├─ icon-caret-down.tsx
│  │  ├─ icon-carets-down.tsx
│  │  ├─ icon-cash-banknotes.tsx
│  │  ├─ icon-chart-square.tsx
│  │  ├─ icon-chat-dot.tsx
│  │  ├─ icon-chat-dots.tsx
│  │  ├─ icon-chat-notification.tsx
│  │  ├─ icon-checks.tsx
│  │  ├─ icon-chrome.tsx
│  │  ├─ icon-circle-check.tsx
│  │  ├─ icon-clipboard-text.tsx
│  │  ├─ icon-clock.tsx
│  │  ├─ icon-cloud-download.tsx
│  │  ├─ icon-code.tsx
│  │  ├─ icon-coffee.tsx
│  │  ├─ icon-copy.tsx
│  │  ├─ icon-cpu-bolt.tsx
│  │  ├─ icon-credit-card.tsx
│  │  ├─ icon-desktop.tsx
│  │  ├─ icon-dollar-sign-circle.tsx
│  │  ├─ icon-dollar-sign.tsx
│  │  ├─ icon-download.tsx
│  │  ├─ icon-dribbble.tsx
│  │  ├─ icon-droplet.tsx
│  │  ├─ icon-edit.tsx
│  │  ├─ icon-ethereum.tsx
│  │  ├─ icon-eye.tsx
│  │  ├─ icon-facebook-circle.tsx
│  │  ├─ icon-facebook.tsx
│  │  ├─ icon-file.tsx
│  │  ├─ icon-folder-minus.tsx
│  │  ├─ icon-folder-plus.tsx
│  │  ├─ icon-folder.tsx
│  │  ├─ icon-gallery.tsx
│  │  ├─ icon-github.tsx
│  │  ├─ icon-globe.tsx
│  │  ├─ icon-google.tsx
│  │  ├─ icon-heart.tsx
│  │  ├─ icon-help-circle.tsx
│  │  ├─ icon-home.tsx
│  │  ├─ icon-horizontal-dots.tsx
│  │  ├─ icon-inbox.tsx
│  │  ├─ icon-info-circle.tsx
│  │  ├─ icon-info-hexagon.tsx
│  │  ├─ icon-info-triangle.tsx
│  │  ├─ icon-instagram.tsx
│  │  ├─ icon-laptop.tsx
│  │  ├─ icon-layout-grid.tsx
│  │  ├─ icon-layout.tsx
│  │  ├─ icon-link.tsx
│  │  ├─ icon-linkedin.tsx
│  │  ├─ icon-list-check.tsx
│  │  ├─ icon-litecoin.tsx
│  │  ├─ icon-loader.tsx
│  │  ├─ icon-lock-dots.tsx
│  │  ├─ icon-lock.tsx
│  │  ├─ icon-login.tsx
│  │  ├─ icon-logout.tsx
│  │  ├─ icon-mail-dot.tsx
│  │  ├─ icon-mail.tsx
│  │  ├─ icon-map-pin.tsx
│  │  ├─ icon-menu.tsx
│  │  ├─ icon-message-dots.tsx
│  │  ├─ icon-message.tsx
│  │  ├─ icon-message2.tsx
│  │  ├─ icon-messages-dot.tsx
│  │  ├─ icon-microphone-off.tsx
│  │  ├─ icon-minus-circle.tsx
│  │  ├─ icon-minus.tsx
│  │  ├─ icon-mood-smile.tsx
│  │  ├─ icon-moon.tsx
│  │  ├─ icon-multiple-forward-right.tsx
│  │  ├─ icon-netflix.tsx
│  │  ├─ icon-notes-edit.tsx
│  │  ├─ icon-notes.tsx
│  │  ├─ icon-open-book.tsx
│  │  ├─ icon-paperclip.tsx
│  │  ├─ icon-pencil-paper.tsx
│  │  ├─ icon-pencil.tsx
│  │  ├─ icon-phone-call.tsx
│  │  ├─ icon-phone.tsx
│  │  ├─ icon-play-circle.tsx
│  │  ├─ icon-plus-circle.tsx
│  │  ├─ icon-plus.tsx
│  │  ├─ icon-printer.tsx
│  │  ├─ icon-refresh.tsx
│  │  ├─ icon-restore.tsx
│  │  ├─ icon-router.tsx
│  │  ├─ icon-safari.tsx
│  │  ├─ icon-save.tsx
│  │  ├─ icon-search.tsx
│  │  ├─ icon-send.tsx
│  │  ├─ icon-server.tsx
│  │  ├─ icon-settings.tsx
│  │  ├─ icon-share.tsx
│  │  ├─ icon-shopping-bag.tsx
│  │  ├─ icon-shopping-cart.tsx
│  │  ├─ icon-solana.tsx
│  │  ├─ icon-square-check.tsx
│  │  ├─ icon-square-rotated.tsx
│  │  ├─ icon-star.tsx
│  │  ├─ icon-sun.tsx
│  │  ├─ icon-tag.tsx
│  │  ├─ icon-tether.tsx
│  │  ├─ icon-thumb-up.tsx
│  │  ├─ icon-trash-lines.tsx
│  │  ├─ icon-trash.tsx
│  │  ├─ icon-trending-up.tsx
│  │  ├─ icon-twitter.tsx
│  │  ├─ icon-txt-file.tsx
│  │  ├─ icon-user-plus.tsx
│  │  ├─ icon-user.tsx
│  │  ├─ icon-users-group.tsx
│  │  ├─ icon-users.tsx
│  │  ├─ icon-video.tsx
│  │  ├─ icon-wheel.tsx
│  │  ├─ icon-x-circle.tsx
│  │  ├─ icon-x.tsx
│  │  ├─ icon-zip-file.tsx
│  │  └─ menu
│  │     ├─ icon-menu-apps.tsx
│  │     ├─ icon-menu-authentication.tsx
│  │     ├─ icon-menu-calendar.tsx
│  │     ├─ icon-menu-charts.tsx
│  │     ├─ icon-menu-chat.tsx
│  │     ├─ icon-menu-components.tsx
│  │     ├─ icon-menu-contacts.tsx
│  │     ├─ icon-menu-dashboard.tsx
│  │     ├─ icon-menu-datatables.tsx
│  │     ├─ icon-menu-documentation.tsx
│  │     ├─ icon-menu-drag-and-drop.tsx
│  │     ├─ icon-menu-elements.tsx
│  │     ├─ icon-menu-font-icons.tsx
│  │     ├─ icon-menu-forms.tsx
│  │     ├─ icon-menu-invoice.tsx
│  │     ├─ icon-menu-mailbox.tsx
│  │     ├─ icon-menu-more.tsx
│  │     ├─ icon-menu-notes.tsx
│  │     ├─ icon-menu-pages.tsx
│  │     ├─ icon-menu-scrumboard.tsx
│  │     ├─ icon-menu-tables.tsx
│  │     ├─ icon-menu-todo.tsx
│  │     ├─ icon-menu-users.tsx
│  │     └─ icon-menu-widgets.tsx
│  ├─ language-dropdown.tsx
│  ├─ layouts
│  │  ├─ content-animation.tsx
│  │  ├─ footer.tsx
│  │  ├─ header.tsx
│  │  ├─ loading.tsx
│  │  ├─ main-container.tsx
│  │  ├─ overlay.tsx
│  │  ├─ provider-component.tsx
│  │  ├─ scroll-to-top.tsx
│  │  ├─ setting.tsx
│  │  └─ sidebar.tsx
│  ├─ pages
│  │  ├─ coming-soon
│  │  │  └─ components-pages-coming-soon-form.tsx
│  │  ├─ components-pages-faq-with-tabs.tsx
│  │  ├─ contact-us
│  │  │  └─ components-pages-contact-us-form.tsx
│  │  └─ knowledge-base
│  │     └─ components-pages-knowledge-base-video-tutorial.tsx
│  ├─ panel-code-highlight.tsx
│  ├─ portals.tsx
│  ├─ tables
│  │  ├─ components-tables-captions.tsx
│  │  ├─ components-tables-checkboxes.tsx
│  │  ├─ components-tables-contextual.tsx
│  │  ├─ components-tables-dropdown.tsx
│  │  ├─ components-tables-footer.tsx
│  │  ├─ components-tables-hover.tsx
│  │  ├─ components-tables-light.tsx
│  │  ├─ components-tables-progress.tsx
│  │  ├─ components-tables-simple.tsx
│  │  └─ components-tables-stripped.tsx
│  └─ users
│     ├─ account-settings
│     │  └─ components-users-account-settings-tabs.tsx
│     └─ profile
│        └─ components-users-profile-payment-history.tsx
├─ i18n.ts
├─ next.config.js
├─ ni18n.config.ts.js
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ assets
│  │  └─ images
│  │     ├─ auth
│  │     │  ├─ bg-gradient.png
│  │     │  ├─ coming-soon-cover.svg
│  │     │  ├─ coming-soon-object1.png
│  │     │  ├─ coming-soon-object2.png
│  │     │  ├─ coming-soon-object3.png
│  │     │  ├─ contact-us.svg
│  │     │  ├─ login.svg
│  │     │  ├─ logo-white.svg
│  │     │  ├─ map.png
│  │     │  ├─ polygon-object.svg
│  │     │  ├─ register.svg
│  │     │  ├─ reset-password.svg
│  │     │  ├─ unlock.svg
│  │     │  └─ user.png
│  │     ├─ auth-cover.svg
│  │     ├─ card-americanexpress.svg
│  │     ├─ card-mastercard.svg
│  │     ├─ card-visa.svg
│  │     ├─ carousel1.jpeg
│  │     ├─ carousel2.jpeg
│  │     ├─ carousel3.jpeg
│  │     ├─ checked.svg
│  │     ├─ close.svg
│  │     ├─ coming-soon.svg
│  │     ├─ custom-swal.svg
│  │     ├─ drag-1.jpeg
│  │     ├─ drag-2.jpeg
│  │     ├─ drag-4.jpg
│  │     ├─ error
│  │     │  ├─ 404-dark.svg
│  │     │  ├─ 404-light.svg
│  │     │  ├─ 500-dark.svg
│  │     │  ├─ 500-light.svg
│  │     │  ├─ 503-dark.svg
│  │     │  ├─ 503-light.svg
│  │     │  ├─ maintenence-dark.svg
│  │     │  └─ maintenence-light.svg
│  │     ├─ faq
│  │     │  ├─ faq-dark.svg
│  │     │  └─ faq-light.svg
│  │     ├─ features_overview.svg
│  │     ├─ file-preview.svg
│  │     ├─ flags
│  │     │  ├─ AC.svg
│  │     │  ├─ AD.svg
│  │     │  ├─ AE.svg
│  │     │  ├─ AF.svg
│  │     │  ├─ AG.svg
│  │     │  ├─ AI.svg
│  │     │  ├─ AL.svg
│  │     │  ├─ AM.svg
│  │     │  ├─ AO.svg
│  │     │  ├─ AR.svg
│  │     │  ├─ AS.svg
│  │     │  ├─ AT.svg
│  │     │  ├─ AU.svg
│  │     │  ├─ AW.svg
│  │     │  ├─ AX.svg
│  │     │  ├─ AZ.svg
│  │     │  ├─ BA.svg
│  │     │  ├─ BB.svg
│  │     │  ├─ BD.svg
│  │     │  ├─ BE.svg
│  │     │  ├─ BF.svg
│  │     │  ├─ BG.svg
│  │     │  ├─ BH.svg
│  │     │  ├─ BI.svg
│  │     │  ├─ BJ.svg
│  │     │  ├─ BL.svg
│  │     │  ├─ BM.svg
│  │     │  ├─ BN.svg
│  │     │  ├─ BO.svg
│  │     │  ├─ BR.svg
│  │     │  ├─ BS.svg
│  │     │  ├─ BT.svg
│  │     │  ├─ BV.svg
│  │     │  ├─ BW.svg
│  │     │  ├─ BY.svg
│  │     │  ├─ BZ.svg
│  │     │  ├─ CA.svg
│  │     │  ├─ CC.svg
│  │     │  ├─ CD.svg
│  │     │  ├─ CF.svg
│  │     │  ├─ CG.svg
│  │     │  ├─ CH.svg
│  │     │  ├─ CI.svg
│  │     │  ├─ CK.svg
│  │     │  ├─ CL.svg
│  │     │  ├─ CM.svg
│  │     │  ├─ CN.svg
│  │     │  ├─ CO.svg
│  │     │  ├─ CR.svg
│  │     │  ├─ CU.svg
│  │     │  ├─ CV.svg
│  │     │  ├─ CW.svg
│  │     │  ├─ CX.svg
│  │     │  ├─ CY.svg
│  │     │  ├─ CZ.svg
│  │     │  ├─ DA.svg
│  │     │  ├─ DE.svg
│  │     │  ├─ DJ.svg
│  │     │  ├─ DK.svg
│  │     │  ├─ DM.svg
│  │     │  ├─ DO.svg
│  │     │  ├─ DZ.svg
│  │     │  ├─ EC.svg
│  │     │  ├─ EE.svg
│  │     │  ├─ EG.svg
│  │     │  ├─ EH.svg
│  │     │  ├─ EL.svg
│  │     │  ├─ EN-IN.svg
│  │     │  ├─ EN-US.svg
│  │     │  ├─ EN.svg
│  │     │  ├─ ER.svg
│  │     │  ├─ ES.svg
│  │     │  ├─ ET.svg
│  │     │  ├─ EU.svg
│  │     │  ├─ FI.svg
│  │     │  ├─ FJ.svg
│  │     │  ├─ FK.svg
│  │     │  ├─ FM.svg
│  │     │  ├─ FO.svg
│  │     │  ├─ FR.svg
│  │     │  ├─ GA.svg
│  │     │  ├─ GB-ENG.svg
│  │     │  ├─ GB-NIR.svg
│  │     │  ├─ GB-SCT.svg
│  │     │  ├─ GB-WLS.svg
│  │     │  ├─ GB-ZET.svg
│  │     │  ├─ GB.svg
│  │     │  ├─ GD.svg
│  │     │  ├─ GE.svg
│  │     │  ├─ GF.svg
│  │     │  ├─ GG.svg
│  │     │  ├─ GH.svg
│  │     │  ├─ GI.svg
│  │     │  ├─ GL.svg
│  │     │  ├─ GM.svg
│  │     │  ├─ GN.svg
│  │     │  ├─ GP.svg
│  │     │  ├─ GQ.svg
│  │     │  ├─ GR.svg
│  │     │  ├─ GS.svg
│  │     │  ├─ GT.svg
│  │     │  ├─ GU.svg
│  │     │  ├─ GW.svg
│  │     │  ├─ GY.svg
│  │     │  ├─ HK.svg
│  │     │  ├─ HM.svg
│  │     │  ├─ HN.svg
│  │     │  ├─ HR.svg
│  │     │  ├─ HT.svg
│  │     │  ├─ HU.svg
│  │     │  ├─ ID.svg
│  │     │  ├─ IE.svg
│  │     │  ├─ IL.svg
│  │     │  ├─ IM.svg
│  │     │  ├─ IN.svg
│  │     │  ├─ IO.svg
│  │     │  ├─ IQ.svg
│  │     │  ├─ IR.svg
│  │     │  ├─ IS.svg
│  │     │  ├─ IT.svg
│  │     │  ├─ JA.svg
│  │     │  ├─ JE.svg
│  │     │  ├─ JM.svg
│  │     │  ├─ JO.svg
│  │     │  ├─ JP.svg
│  │     │  ├─ KE.svg
│  │     │  ├─ KG.svg
│  │     │  ├─ KH.svg
│  │     │  ├─ KI.svg
│  │     │  ├─ KM.svg
│  │     │  ├─ KN.svg
│  │     │  ├─ KP.svg
│  │     │  ├─ KR.svg
│  │     │  ├─ KW.svg
│  │     │  ├─ KY.svg
│  │     │  ├─ KZ.svg
│  │     │  ├─ LA.svg
│  │     │  ├─ LB.svg
│  │     │  ├─ LC.svg
│  │     │  ├─ LGBT.svg
│  │     │  ├─ LI.svg
│  │     │  ├─ LK.svg
│  │     │  ├─ LR.svg
│  │     │  ├─ LS.svg
│  │     │  ├─ LT.svg
│  │     │  ├─ LU.svg
│  │     │  ├─ LV.svg
│  │     │  ├─ LY.svg
│  │     │  ├─ MA.svg
│  │     │  ├─ MC.svg
│  │     │  ├─ MD.svg
│  │     │  ├─ ME.svg
│  │     │  ├─ MF.svg
│  │     │  ├─ MG.svg
│  │     │  ├─ MH.svg
│  │     │  ├─ MK.svg
│  │     │  ├─ ML.svg
│  │     │  ├─ MM.svg
│  │     │  ├─ MN.svg
│  │     │  ├─ MO.svg
│  │     │  ├─ MP.svg
│  │     │  ├─ MQ.svg
│  │     │  ├─ MR.svg
│  │     │  ├─ MS.svg
│  │     │  ├─ MT.svg
│  │     │  ├─ MU.svg
│  │     │  ├─ MV.svg
│  │     │  ├─ MW.svg
│  │     │  ├─ MX.svg
│  │     │  ├─ MY.svg
│  │     │  ├─ MZ.svg
│  │     │  ├─ NA.svg
│  │     │  ├─ NC.svg
│  │     │  ├─ NE.svg
│  │     │  ├─ NF.svg
│  │     │  ├─ NG.svg
│  │     │  ├─ NI.svg
│  │     │  ├─ NL.svg
│  │     │  ├─ NO.svg
│  │     │  ├─ NP.svg
│  │     │  ├─ NR.svg
│  │     │  ├─ NU.svg
│  │     │  ├─ NZ.svg
│  │     │  ├─ OM.svg
│  │     │  ├─ PA.svg
│  │     │  ├─ PE.svg
│  │     │  ├─ PF.svg
│  │     │  ├─ PG.svg
│  │     │  ├─ PH.svg
│  │     │  ├─ PK.svg
│  │     │  ├─ PL.svg
│  │     │  ├─ PM.svg
│  │     │  ├─ PN.svg
│  │     │  ├─ PR.svg
│  │     │  ├─ PS.svg
│  │     │  ├─ PT.svg
│  │     │  ├─ PW.svg
│  │     │  ├─ PY.svg
│  │     │  ├─ QA.svg
│  │     │  ├─ RE.svg
│  │     │  ├─ RH.svg
│  │     │  ├─ RO.svg
│  │     │  ├─ RS.svg
│  │     │  ├─ RU.svg
│  │     │  ├─ RW.svg
│  │     │  ├─ SA.svg
│  │     │  ├─ SB.svg
│  │     │  ├─ SC.svg
│  │     │  ├─ SD.svg
│  │     │  ├─ SE.svg
│  │     │  ├─ SG.svg
│  │     │  ├─ SH.svg
│  │     │  ├─ SI.svg
│  │     │  ├─ SJ.svg
│  │     │  ├─ SK.svg
│  │     │  ├─ SL.svg
│  │     │  ├─ SM.svg
│  │     │  ├─ SN.svg
│  │     │  ├─ SO.svg
│  │     │  ├─ SR.svg
│  │     │  ├─ SS.svg
│  │     │  ├─ ST.svg
│  │     │  ├─ SV.svg
│  │     │  ├─ SV1.svg
│  │     │  ├─ SX.svg
│  │     │  ├─ SY.svg
│  │     │  ├─ SZ.svg
│  │     │  ├─ TC.svg
│  │     │  ├─ TD.svg
│  │     │  ├─ TF.svg
│  │     │  ├─ TG.svg
│  │     │  ├─ TH.svg
│  │     │  ├─ TJ.svg
│  │     │  ├─ TK.svg
│  │     │  ├─ TL.svg
│  │     │  ├─ TM.svg
│  │     │  ├─ TN.svg
│  │     │  ├─ TO.svg
│  │     │  ├─ TR.svg
│  │     │  ├─ TT.svg
│  │     │  ├─ TV.svg
│  │     │  ├─ TW.svg
│  │     │  ├─ TZ.svg
│  │     │  ├─ UG.svg
│  │     │  ├─ UK.svg
│  │     │  ├─ UK1.svg
│  │     │  ├─ UM.svg
│  │     │  ├─ US-CA.svg
│  │     │  ├─ US.svg
│  │     │  ├─ UY.svg
│  │     │  ├─ UZ.svg
│  │     │  ├─ VA.svg
│  │     │  ├─ VC.svg
│  │     │  ├─ VE.svg
│  │     │  ├─ VG.svg
│  │     │  ├─ VI.svg
│  │     │  ├─ VN.svg
│  │     │  ├─ VU.svg
│  │     │  ├─ WF.svg
│  │     │  ├─ WS.svg
│  │     │  ├─ XK.svg
│  │     │  ├─ YE.svg
│  │     │  ├─ YT.svg
│  │     │  ├─ ZA.svg
│  │     │  ├─ ZH.svg
│  │     │  ├─ ZM.svg
│  │     │  └─ ZW.svg
│  │     ├─ g-8.png
│  │     ├─ knowledge
│  │     │  ├─ find-solution.svg
│  │     │  ├─ image-1.jpg
│  │     │  ├─ image-2.jpg
│  │     │  ├─ image-3.jpg
│  │     │  ├─ image-4.jpg
│  │     │  ├─ image-5.jpg
│  │     │  ├─ image-6.jpg
│  │     │  ├─ image-7.jpg
│  │     │  ├─ image-8.jpg
│  │     │  └─ pattern.png
│  │     ├─ lightbox1.jpg
│  │     ├─ lightbox2.jpeg
│  │     ├─ lightbox3.jpeg
│  │     ├─ lightbox4.jpeg
│  │     ├─ lightbox5.jpeg
│  │     ├─ lightbox6.jpeg
│  │     ├─ litecoin.svg
│  │     ├─ logo.svg
│  │     ├─ map-dark.svg
│  │     ├─ map.svg
│  │     ├─ menu-heade.jpg
│  │     ├─ notification-bg.png
│  │     ├─ product-camera.jpg
│  │     ├─ product-headphones.jpg
│  │     ├─ product-laptop.jpg
│  │     ├─ product-shoes.jpg
│  │     ├─ product-watch.jpg
│  │     ├─ profile-1.jpeg
│  │     ├─ profile-10.jpeg
│  │     ├─ profile-11.jpeg
│  │     ├─ profile-12.jpeg
│  │     ├─ profile-13.jpeg
│  │     ├─ profile-14.jpeg
│  │     ├─ profile-15.jpeg
│  │     ├─ profile-16.jpeg
│  │     ├─ profile-17.jpeg
│  │     ├─ profile-18.jpeg
│  │     ├─ profile-19.jpeg
│  │     ├─ profile-2.jpeg
│  │     ├─ profile-20.jpeg
│  │     ├─ profile-21.jpeg
│  │     ├─ profile-22.jpeg
│  │     ├─ profile-23.jpeg
│  │     ├─ profile-24.jpeg
│  │     ├─ profile-25.jpeg
│  │     ├─ profile-26.jpeg
│  │     ├─ profile-27.jpeg
│  │     ├─ profile-28.jpeg
│  │     ├─ profile-29.jpeg
│  │     ├─ profile-3.jpeg
│  │     ├─ profile-30.jpeg
│  │     ├─ profile-30.png
│  │     ├─ profile-31.jpeg
│  │     ├─ profile-32.jpeg
│  │     ├─ profile-33.jpeg
│  │     ├─ profile-34.jpeg
│  │     ├─ profile-35.png
│  │     ├─ profile-4.jpeg
│  │     ├─ profile-5.jpeg
│  │     ├─ profile-6.jpeg
│  │     ├─ profile-7.jpeg
│  │     ├─ profile-8.jpeg
│  │     ├─ profile-9.jpeg
│  │     ├─ settings-dark.svg
│  │     ├─ settings-light.svg
│  │     ├─ sweet-bg.jpg
│  │     └─ user-profile.jpeg
│  ├─ demo-prepare.html
│  ├─ favicon.png
│  └─ locales
│     ├─ ae.json
│     ├─ da.json
│     ├─ de.json
│     ├─ el.json
│     ├─ en.json
│     ├─ es.json
│     ├─ fr.json
│     ├─ hu.json
│     ├─ it.json
│     ├─ ja.json
│     ├─ pl.json
│     ├─ pt.json
│     ├─ ru.json
│     ├─ sv.json
│     ├─ tr.json
│     └─ zh.json
├─ README.md
├─ store
│  ├─ index.tsx
│  └─ themeConfigSlice.tsx
├─ styles
│  ├─ animate.css
│  ├─ datatables.css
│  ├─ dragndrop.css
│  ├─ file-upload-preview.css
│  ├─ flatpickr.css
│  ├─ form-elements.css
│  ├─ fullcalendar.css
│  ├─ markdown-editor.css
│  ├─ progressbar.css
│  ├─ quill-editor.css
│  ├─ scrumboard.css
│  ├─ select2.css
│  ├─ sweetalert.css
│  ├─ swiper.css
│  ├─ tailwind.css
│  └─ tippy.css
├─ tailwind.config.js
├─ theme.config.tsx
└─ tsconfig.json

```"# TheraDiagnosticV2" 
