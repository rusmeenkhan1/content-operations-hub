# Content Operations Hub - AEM Edge Delivery Site Management Tool

A comprehensive web-based tool for managing Adobe Experience Manager (AEM) Edge Delivery Services site content. Content Operations Hub provides an intuitive interface for browsing site content, monitoring deployment status, and executing bulk operations on pages across your AEM Edge Delivery site.

## Overview

Content Operations Hub is a powerful administrative tool that bridges content authors and developers with a centralized dashboard for managing page deployments in AEM Edge Delivery Services. It integrates seamlessly with Document Authoring and provides real-time status monitoring alongside bulk content operation capabilities.

## Key Features

### 📁 Content Browsing & Navigation
- **Hierarchical Folder Tree**: Browse your entire site structure with an interactive, collapsible folder tree
- **Folder Search**: Quickly locate folders using search functionality
- **Content Listings**: View all pages in a folder with detailed metadata
- **Path Display**: Clear display of folder paths and content hierarchy
- **Breadcrumb Navigation**: Easy navigation through nested folder structures

### 📊 Deployment Status Monitoring
- **Real-time Status Tracking**: Monitor preview and live publication status for all pages
- **Status Indicators**: Visual indicators showing:
  - **Published**: Pages deployed to production (live)
  - **Previewed**: Pages deployed to preview environment
  - **Untouched**: Pages not yet deployed
  - **Orphaned Live**: Pages removed from preview but still live in production
- **Last Deployed Timestamps**: View when pages were last deployed to preview or production
- **Status Refresh**: On-demand status refresh with intelligent caching to minimize API calls
- **Deployment History**: Track deployment timestamps and identify deployment patterns

### 🔍 Advanced Search & Filtering
- **Multi-field Search**: Search pages by title, path, and other metadata
- **Instant Filtering**: Real-time search results as you type
- **Smart Pagination**: Efficiently handle large numbers of pages
- **Visible Results**: Search within currently visible pages or entire site

### 🎯 Bulk Content Operations
- **Batch Preview**: Deploy multiple pages to preview environment simultaneously
- **Batch Publish**: Publish selected pages to production in one operation
- **Batch Unpreview**: Remove preview deployments for multiple pages
- **Batch Unpublish**: Remove production deployments for multiple pages
- **Bulk Delete**: Delete documents from Document Authoring in bulk (destructive operation)
- **Operation Confirmation**: Safety confirmations before destructive operations
- **Progress Tracking**: Real-time progress monitoring during bulk operations with job tracking
- **Concurrent Processing**: Optimized batch processing with parallel workers

### ✅ Page Selection & Management
- **Checkbox Selection**: Select individual pages for operations
- **Select All**: Quickly select all visible pages
- **Smart Selection State**: Selection state persists during navigation
- **Selection Counter**: View how many pages are selected
- **Quick Deselection**: Clear selections with one click
- **Multi-page Actions**: Perform operations on any number of selected pages

### 🔗 Quick Actions
- **Open in Document Authoring**: Direct links to edit pages in DA
- **Copy URLs**: Quickly copy page URLs to clipboard
- **Open in New Tabs**: Preview or view multiple pages simultaneously
- **DA Editor Links**: Direct access to content authoring interface

### 💾 Smart Caching & Performance
- **Status Cache**: Intelligent caching of deployment status to reduce API calls
- **Cache Invalidation**: Automatic cache updates after operations
- **Fast Parallel Fetching**: Parallel status checks for improved performance
- **Optimized Polling**: Smart polling intervals for bulk job tracking

### 🚀 User Experience Enhancements
- **Responsive UI**: Mobile-friendly interface that adapts to different screen sizes
- **Loading States**: Clear visual feedback during operations
- **Error Handling**: Comprehensive error messages with recovery guidance
- **Toast Notifications**: Non-intrusive feedback for user actions
- **Modal Dialogs**: Clear confirmation and status dialogs for important operations
- **Accessibility**: ARIA labels and semantic HTML for screen reader support

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Access to AEM Edge Delivery Services
- Valid Document Authoring credentials
- Active site context in Document Authoring

### Installation

1. **Install Dependencies**
   ```sh
   npm install
   ```

2. **Environment Configuration**
   - Ensure you're working within a Document Authoring site context
   - The tool requires valid authentication through Document Authoring

3. **Start Development Server**
   ```sh
   npm run lint       # Run linting before development
   npx @adobe/aem-cli up --no-open --forward-browser-logs
   ```
   The development server runs at `http://localhost:3000`

### Local Development

1. Create a new repository based on the `aem-boilerplate` template
2. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
3. Install the [AEM CLI](https://github.com/adobe/helix-cli): 
   ```sh
   npm install -g @adobe/aem-cli
   ```
4. Start AEM Proxy: 
   ```sh
   aem up
   ```
   Opens your browser at `http://localhost:3000`
5. Open the `{repo}` directory in your favorite IDE and start coding

### Code Quality

```sh
npm run lint          # Run ESLint to check code quality
npm run lint:fix      # Automatically fix linting issues
```

## Usage Scenarios & Use Cases

### Scenario 1: Managing a Content Migration

**Situation**: You need to migrate 50 pages from a staging environment to production.

**How to Use**:
1. Navigate to the relevant folders in Content Operations Hub
2. Select the 50 pages from the folder tree
3. Use "Preview All" to deploy to preview environment for QA testing
4. After validation, use "Publish All" to deploy to production
5. Monitor deployment status in real-time
6. Verify timestamps in the "Last Deployed" column

**Benefits**: Eliminates repetitive manual page publishing, tracks deployment status, and provides audit trail of operations.

### Scenario 2: Rolling Back Failed Deployments

**Situation**: A batch of pages was published with errors and needs to be removed from production immediately.

**How to Use**:
1. Filter to find the problematic pages
2. Select the affected pages
3. Choose "Unpublish All" - confirms the destructive operation
4. Monitor the progress in the job modal
5. Verify pages are removed by checking the "Published" status indicator

**Benefits**: Quickly mitigate issues, undo mistakes, and maintain site integrity.

### Scenario 3: Managing Preview Environments

**Situation**: Content editors want to preview changes before publishing to production.

**How to Use**:
1. Select pages that have been updated
2. Use "Preview All" to deploy to preview environment
3. Share preview URLs with stakeholders
4. Check "Previewed" status indicator to see what's in preview
5. Once approved, publish to production using "Publish All"

**Benefits**: Separate preview and production workflows, enables stakeholder review before publication.

### Scenario 4: Bulk Content Cleanup

**Situation**: You need to delete test/draft content from Document Authoring.

**How to Use**:
1. Navigate to folders containing test content
2. Select all test pages
3. Use "Delete" operation (confirms destructive action)
4. Content is permanently removed from Document Authoring
5. Verify deletion with refresh

**Benefits**: Maintain clean document library, remove clutter, manage storage.

### Scenario 5: Status Audit & Reporting

**Situation**: You need to identify all pages that haven't been published to production.

**How to Use**:
1. Browse through folders using the folder tree
2. Look for "Untouched" status indicators in the page list
3. Identify pages with only "Previewed" status
4. Use filters to focus on specific sections
5. Export list for reporting or take bulk action

**Benefits**: Quick audit of deployment status, identify gaps in publication strategy.

### Scenario 6: Emergency Page Updates

**Situation**: Critical content needs to be updated and deployed across multiple pages immediately.

**How to Use**:
1. Select all pages that need updates
2. For preview: Deploy to preview first with "Preview All"
3. For production: Use "Publish All" to push to live immediately
4. Monitor real-time progress of deployment job
5. Verify timestamps update to current time

**Benefits**: Execute time-sensitive updates across multiple pages simultaneously, track completion in real-time.

## Project Structure

```
├── tools/
│   ├── content-operations-hub.html    # Entry point HTML file
│   └── content-operations-hub/         # Main application directory
│       ├── index.html                  # Primary interface HTML
│       ├── content-operations-hub.js   # Main application logic & UI
│       ├── content-operations-hub.css  # Application styling
│       └── lib/                        # Core library modules
│           ├── api.js                  # AEM Admin API integration
│           ├── browse-persist.js       # Folder navigation state persistence
│           ├── dom.js                  # DOM utilities and helpers
│           ├── folder-tree.js          # Folder tree rendering & interaction
│           ├── modal.js                # Modal dialog management
│           ├── page-history.js         # Page deployment history tracking
│           ├── paths.js                # Path manipulation and normalization
│           ├── progress-modal.js       # Job progress modal UI
│           ├── search-ui.js            # Search interface implementation
│           ├── state.js                # Application state management
│           ├── status-cache.js         # Status caching layer
│           ├── status-estimate.js      # Deployment time estimation
│           ├── ui-utils.js             # UI utility functions
│           └── urls.js                 # URL building and manipulation
```

## Key Components

### API Integration (`lib/api.js`)
- Communicates with AEM Admin API for preview, live, status, and job operations
- Handles authentication via Document Authoring SDK
- Manages API endpoints for bulk operations
- Provides job polling and tracking functionality

### State Management (`lib/state.js`)
- Centralized application state
- Page selection tracking
- Loading and error states
- Status fetch coordination

### Status Tracking (`lib/status-cache.js`)
- Caches deployment status to minimize API calls
- Handles cache invalidation after operations
- Coordinates parallel status fetching
- Estimates completion times for bulk operations

### Folder Navigation (`lib/folder-tree.js`)
- Hierarchical folder tree rendering
- Lazy loading of folder contents
- Folder expansion/collapse interaction
- Cache management for folder structures

### Search Interface (`lib/search-ui.js`)
- Real-time search filtering
- Search result pagination
- Folder and page search integration
- Selection UI synchronization

## Environments

- **Local Development**: `http://localhost:3000`
- **Preview Environment**: `https://main--{repo}--{owner}.aem.page/`
- **Production**: `https://main--{repo}--{owner}.aem.live/`

Replace `{repo}` with your repository name and `{owner}` with the GitHub organization name.

## Documentation & Resources

Before using Content Operations Hub, review these AEM Edge Delivery resources:

1. [AEM Edge Delivery Documentation](https://www.aem.live/docs/)
2. [Developer Tutorial](https://www.aem.live/developer/tutorial)
3. [The Anatomy of a Project](https://www.aem.live/developer/anatomy-of-a-project)
4. [Web Performance Best Practices](https://www.aem.live/developer/keeping-it-100)
5. [Markup, Sections, Blocks, and Auto Blocking](https://www.aem.live/developer/markup-sections-blocks)

## Requirements & Permissions

To use Content Operations Hub, ensure you have:

- ✅ Valid authentication in Document Authoring
- ✅ Active site context (opened from your site app in DA)
- ✅ Appropriate permissions for:
  - Listing site content (read access)
  - Previewing pages (preview publish permission)
  - Publishing pages (production publish permission)
  - Deleting documents (admin/destructive action permission)

## Performance Considerations

- **Status Caching**: The tool intelligently caches deployment status to reduce API calls
- **Parallel Processing**: Bulk operations use concurrent workers for improved performance
- **Lazy Loading**: Folder contents are loaded on-demand for faster initial load
- **Search Optimization**: Search results are paginated to handle large content sets

## Troubleshooting

### Authentication Issues
- Ensure you're signed in to Document Authoring (check top-right button)
- Reload the tool after signing in
- Verify you have valid site context

### Missing Content
- Verify you're browsing the correct folder
- Check that pages have been authored in Document Authoring
- Refresh the tool to reload folder structure

### Deployment Status Not Updating
- Click "Refresh Status" to force a status check
- Wait for the status fetch to complete (indicated by loading spinner)
- Check your internet connection and AEM service availability

### Bulk Operations Failing
- Verify all selected pages are valid
- Check permission levels for the operation type
- Review error messages in job modal for specific issues
- Retry failed operations individually if needed

## Contributing

- Follow the existing code style and patterns
- Test changes locally before committing
- Run `npm run lint:fix` to ensure code quality
- Update documentation for significant changes

## License

See [LICENSE](./LICENSE) file for details
