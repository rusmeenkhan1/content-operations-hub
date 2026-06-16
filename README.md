

# Content Operations Hub - AEM Edge Delivery Site Management Tool

A centralized workspace within Adobe Document Authoring (DA) that enables content authors, developers, QA teams, release managers, and platform administrators to perform bulk content operations efficiently.

## Overview

**Content Operations Hub** is a centralized workspace within Adobe Document Authoring (DA) that enables content authors, developers, QA teams, release managers, and platform administrators to perform bulk content operations efficiently.

The tool eliminates repetitive page-by-page actions by providing a single interface to:

- ✅ Preview content in bulk
- ✅ Publish content in bulk
- ✅ Remove preview/live content in bulk
- ✅ Delete content from DA in bulk
- ✅ Track and filter based on deployment status
- ✅ Search and filter large content repositories
- ✅ Run Lighthouse/PageSpeed Insights (LHS) for selected pages

The result is significantly faster content operations, improved visibility, and reduced operational effort.

---

## The Problem

While working across multiple AEM Edge Delivery Services projects, a recurring operational challenge emerged: managing content at scale was becoming increasingly time-consuming and difficult.

Adobe Document Authoring already provides capabilities for content operations, including the bulk operations tool (`/apps/bulk`). However, in practice, executing bulk actions efficiently requires users to already know which pages they want to operate on and often requires manually gathering URLs beforehand.

The larger challenge wasn't performing the operation itself—it was **identifying the right content and understanding its deployment readiness**.

### Pain Points at Scale

As content repositories grew from a handful of pages to dozens or even hundreds, teams faced several recurring challenges:

#### 1. Content Discovery Before Bulk Operations

Before performing any bulk action, users first need to identify the pages relevant to their use case.

In existing workflows:
- Users often need to navigate multiple folders manually
- There is no centralized workspace for browsing and selecting pages at scale
- Content selection becomes increasingly difficult as repositories grow
- Finding the correct set of pages can take longer than the actual preview or publish operation

**Result**: Bulk operations become operationally inefficient despite the underlying capability already existing.

#### 2. Deployment Visibility at Scale

Another recurring challenge was understanding whether content was actually previewed/published or not.

While there are ways to verify if a page has been previewed or published, those approaches work reasonably well when checking a small number of pages. However, they become impractical when validating dozens or hundreds of pages across large site sections.

Teams often need to:
- Check pages individually or in small batches
- Switch between multiple tools and interfaces
- Manually track deployment status
- Repeat the same validation process across large content sets

### Real-World Impact

This issue frequently surfaces during critical moments such as:
- 🎥 Customer demonstrations
- 👥 Stakeholder reviews
- ✅ QA sign-offs

A page may be shared with the expectation that it is available, only to discover during the meeting that it returns a **404** because it was never previewed or published.

**The problem is not that deployment status is unavailable—the problem is that deployment readiness is difficult to visualize, validate, and act upon when managing content at scale.**

Consequently, teams spend valuable time:
- Manually verifying content status
- Reacting to issues that could have been identified earlier

---

## Vision

This led to a simple question:

> **What if teams could discover content, understand deployment readiness, identify deployment gaps, and execute bulk actions from a single workspace instead of navigating page-by-page and tool-by-tool?**

That question became the foundation for **Content Operations Hub**.

The goal was not to replace existing DA capabilities, but to provide a centralized operational layer that makes content management easy, scalable, visible, and actionable.

By combining content discovery, deployment visibility, filtering, and bulk operations into a single experience, Content Operations Hub transforms content management from a reactive, page-by-page activity into a proactive and efficient operational workflow.

---

## Solution: Key Features & Capabilities

Content Operations Hub provides a centralized operational dashboard that enables bulk content management directly inside DA.

### 📁 Folder Explorer

Navigate site structures using:
- **Hierarchical folder navigation**: Browse your entire site structure
- **Breadcrumb navigation**: Easy path tracking and navigation
- **Folder search**: Quickly locate folders by name
- **Subdirectory inclusion**: Option to include all nested directories recursively
- **Dual-pane layout**: Left section shows directories, right section shows pages in current directory

This allows users to manage entire sections of a site from one location.

**Key Feature**: When users enter any directory for the first time, the deployment status of pages in that directory is automatically fetched and cached in localStorage for faster subsequent operations.

---

### 🟢 Deployment Visibility

Every page is automatically categorized and displayed with clear visual indicators:

- **🔴 Not Previewed**: Page has never been previewed or published
- **🟡 Preview Only**: Page exists in preview environment but is not published to production
- **🟢 Published**: Page is live in production

Users can immediately understand content readiness without opening individual pages.

**Important Note**: Deployment status is fetched when a user first enters a directory and stored in localStorage. If operations are performed on pages directly from DA or other tools, the cached status may become outdated. Use the **"Refresh Deployment Status"** button to fetch real-time status updates.

---

### 🎯 Bulk Operations

Users can select multiple pages and execute actions through a single command bar at the bottom of the interface.

#### Supported Actions:

- **Preview**: Deploy pages to preview environment
- **Publish**: Deploy pages to production (live)
- **Remove Preview**: Remove preview deployments
- **Remove From Live**: Unpublish pages from production
- **Delete From DA**: Permanently delete pages from Document Authoring
- **Run Lighthouse for Preview URLs**: Analyze `.page` URLs with Google PageSpeed Insights
- **Run Lighthouse for Live URLs**: Analyze `.live` URLs with Google PageSpeed Insights

#### Destructive Action Protection:

Confirmation workflows are added to prevent accidental destructive actions:
- ❌ Unpreview
- ❌ Unpublish
- ❌ Delete from DA

A strip at the bottom (similar to DA) becomes visible when users select any page or multiple pages, listing all available operations.

---

### 📊 Progress Tracking

Long-running jobs provide:
- Real-time progress updates during bulk operations
- Success/failure tracking with detailed status messages
- URL generation for previewed/published content
- Job status modal with completion estimates

---

### 🔍 Search & Filtering

Filter content by deployment status:
- **Published**: Show only pages live in production
- **Preview Only**: Show pages in preview but not published
- **Not Deployed**: Show pages never deployed
- **Recently Published**: Show pages published within a recent timeframe
- **Recently Previewed**: Show pages previewed recently

Combined with folder navigation, filtering enables quick identification of content meeting specific criteria.

---

### 🔒 Safe Content Operations

Destructive actions require explicit confirmation to reduce the risk of accidental content removal:
- Users must confirm before unpreviewing content
- Users must confirm before unpublishing from production
- Users must confirm before permanently deleting from DA

Confirmation dialogs clearly show:
- Number of pages affected
- Type of operation being performed
- Consequences of the action

---

### ⚡ Performance Optimizations

#### Status Cache
- **Instant folder revisits**: Previously visited folders load immediately
- **Reduced API calls**: Cached status minimizes unnecessary API requests
- **Faster page loads**: Status data served from localStorage when available
- **Smart cache invalidation**: Cache updates automatically after operations

#### Parallel Processing
- Bulk operations use concurrent workers for improved performance
- Multiple pages processed simultaneously
- Optimized batch sizing based on operation type

---

### 🚀 Lighthouse Score Analysis

The Content Operations Hub provides quick access to Google PageSpeed Insights (PSI) for selected pages, enabling rapid performance validation.

#### Available Actions:

**Lighthouse Score for Preview URL (`.page`)**
- Opens a new browser tab with the selected page's `.page` URL
- Use this to analyze the preview version of pages
- Ideal for validating changes before publishing

**Lighthouse Score for Live URL (`.live`)**
- Opens a new browser tab with the selected page's `.live` URL
- Use this to analyze the published version of pages
- Verify production performance metrics

#### How to Use:

1. Select one or more pages from the Pages table
2. Click **More** in the action bar
3. Under **Performance**, choose:
   - **Lighthouse score for `.page` URL**, or
   - **Lighthouse score for `.live` URL**
4. A new browser tab opens for each selected page with the corresponding URL automatically loaded in Google PageSpeed Insights
5. Review the generated Lighthouse report and Core Web Vitals metrics
6. Identify and address performance issues before deployment

---

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Access to AEM Edge Delivery Services
- Valid Document Authoring credentials
- Active site context in Document Authoring
- GitHub repository with AEM Code Sync enabled

### Installation & Configuration

#### Step 1: Copy Tool Files

```sh
# Clone the repository
git clone https://github.com/rusmeenkhan1/da-content-deployment-hub.git

# Copy tool files to your project
cp -r da-content-deployment-hub/tools/content-operations-hub your-project/tools/
cp da-content-deployment-hub/tools/content-operations-hub.html your-project/tools/

# Merge changes to main branch
git add tools/content-operations-hub*
git commit -m "Add Content Operations Hub tool"
git push
```

#### Step 2: Configure Site Apps

1. Open your site's **config sheet** in Document Authoring
2. Navigate to the **"apps"** tab (create if it doesn't exist)
3. Add three columns with headers:
   - `title`
   - `Path`
   - `Description`

4. Add a new row with the following values:

| title | Path | Description |
|-------|------|-------------|
| Content Operations Hub | https://da.live/app/{org}/{site}/tools/content-operations-hub | Bulk Operations - preview, publish, remove & delete pages |

**Note**: Replace `{org}` with your organization name and `{site}` with your site name
![setup](/tools/screenshots/setup.png)

5. Save the config file

#### Step 3: Access the Tool

1. Navigate to: `https://da.live/app/{org}/{site}/tools/`
2. Sign in from the top right corner using your LDAP credentials
3. Select the correct profile from the dropdown
4. Click on **"Content Operations Hub"** from the list of site apps
5. Accept any warning or continuation prompts

#### Step 4: Start Using

You will land on the root directory of your site with:
- All folders listed in the left section
- Pages in the root directory in the right section

**Default Behavior**: The "Include all subdirectories" option is unchecked by default
- Enable it to fetch all pages in all subdirectories recursively
- When enabled on the root directory, it lists the entire site's pages

---

## Installation & Development

### Install Dependencies

```sh
npm install
```

### Local Development

1. Install the [AEM CLI](https://github.com/adobe/helix-cli):
   ```sh
   npm install -g @adobe/aem-cli
   ```

2. Start the development server:
   ```sh
   npm run lint:fix  # Auto-fix linting issues
   aem up            # Start dev server at http://localhost:3000
   ```

3. Open your IDE and begin development

### Code Quality

```sh
npm run lint          # Run ESLint to check code quality
npm run lint:fix      # Automatically fix linting issues
```

---

## Project Structure

```
├── tools/
│   ├── content-operations-hub.html         # Entry point HTML file
│   └── content-operations-hub/             # Main application directory
│       ├── index.html                      # Primary interface HTML
│       ├── content-operations-hub.js       # Main application logic & UI (line 150+)
│       ├── content-operations-hub.css      # Application styling & theme
│       └── lib/                            # Core library modules
│           ├── api.js                      # AEM Admin API integration
│           ├── browse-persist.js           # Folder navigation state persistence
│           ├── dom.js                      # DOM utilities and helpers
│           ├── folder-tree.js              # Folder tree rendering & interaction
│           ├── modal.js                    # Modal dialog management
│           ├── page-history.js             # Page deployment history tracking
│           ├── paths.js                    # Path manipulation and normalization
│           ├── progress-modal.js           # Job progress modal UI & tracking
│           ├── search-ui.js                # Search interface implementation
│           ├── state.js                    # Application state management
│           ├── status-cache.js             # Status caching layer & invalidation
│           ├── status-estimate.js          # Deployment time estimation
│           ├── ui-utils.js                 # UI utility functions
│           └── urls.js                     # URL building and manipulation
```

---

## Environments

- **Local Development**: `http://localhost:3000`
- **Preview Environment**: `https://{branch}--{repo}--{owner}.aem.page/tools/content-operations-hub`
- **Production**: `https://main--{repo}--{owner}.aem.live/tools/content-operations-hub`

Replace:
- `{branch}` with your Git branch name
- `{repo}` with your repository name
- `{owner}` with the GitHub organization name

---

## Troubleshooting

### The tool is not visible in DA

**Check**:
1. Verify the **"apps"** tab has been added to the config sheet
2. Confirm the config file has been saved
3. Ensure the code has been merged to the main branch
4. Verify the correct path is added in the config sheet:
   ```
   https://da.live/app/{org}/{site}/tools/content-operations-hub
   ```

### Permission errors during operations

**Check**:
1. Verify you have correct permissions to perform the operation:
   - **Preview**: Requires preview publish permission
   - **Publish**: Requires production publish permission
   - **Delete**: Requires admin/destructive action permission
2. Confirm you have valid authentication in DA
3. Sign out and sign back in to refresh credentials

### Content status is outdated

**Solution**:
1. Click the **"Refresh Deployment Status"** button
2. Wait for the status fetch to complete (indicated by loading spinner)
3. Status cache will be updated with live data from the platform

### Bulk operations failing

**Check**:
1. Verify all selected pages are valid
2. Review error messages in the job modal for specific issues
3. Check your internet connection and AEM service availability
4. Try retrying failed operations individually
5. Check browser console logs for detailed error information

---

## Documentation & Resources

Before using Content Operations Hub, review these AEM Edge Delivery resources:

1. [AEM Edge Delivery Documentation](https://www.aem.live/docs/)
2. [Developer Tutorial](https://www.aem.live/developer/tutorial)
3. [The Anatomy of a Project](https://www.aem.live/developer/anatomy-of-a-project)
4. [Web Performance Best Practices](https://www.aem.live/developer/keeping-it-100)
5. [Markup, Sections, Blocks, and Auto Blocking](https://www.aem.live/developer/markup-sections-blocks)
6. [Bulk Operations](https://www.aem.live/docs/bulk-operations)
7. [Document Authoring](https://www.aem.live/docs/document-authoring)

---

## Requirements & Permissions

To use Content Operations Hub, ensure you have:

- ✅ Valid authentication in Document Authoring
- ✅ Active site context (opened from your site app in DA)
- ✅ Appropriate permissions for:
  - **Listing content**: Read access to site content
  - **Previewing pages**: Preview environment publish permission
  - **Publishing pages**: Production publish permission
  - **Deleting documents**: Admin or destructive action permission

---

## Use Cases & Real-World Scenarios

### Scenario 1: Managing a Content Migration

**Situation**: You need to migrate 50 pages from staging to production.

**Steps**:
1. Navigate to the relevant folder
2. Enable "Include all subdirectories" to find all pages
3. Select all 50 pages
4. Click **Preview All** to deploy to preview for QA testing
5. After validation, click **Publish All** to deploy to production
6. Monitor progress in real-time job modal
7. Verify timestamps in the "Last Deployed" column

**Benefit**: Eliminates 50 individual page publishes, tracks deployment status, provides audit trail.

### Scenario 2: Rolling Back Failed Deployments

**Situation**: A batch of pages was published with errors and needs to be removed immediately.

**Steps**:
1. Filter to find the problematic pages
2. Select the affected pages
3. Click **Remove From Live** (confirm the destructive action)
4. Monitor progress in the job modal
5. Verify pages are removed by checking "Published" status indicator changes

**Benefit**: Quick mitigation, immediate undo capability, maintains site integrity.

### Scenario 3: Pre-Demo Content Validation

**Situation**: Before a customer demo, you need to verify all demo pages are published and ready.

**Steps**:
1. Navigate to demo content folders
2. Check "Deployment Visibility" indicators for each page
3. Identify any pages showing "Not Previewed" or "Preview Only" status
4. Select unpublished pages
5. Click **Publish All** to deploy missing content
6. Run Lighthouse analysis on key pages for performance review

**Benefit**: Prevent 404 errors during demos, verify performance, ensure readiness.

### Scenario 4: Bulk Content Cleanup

**Situation**: You need to delete test/draft content from DA.

**Steps**:
1. Navigate to test content folder
2. Select all test pages
3. Click **Delete From DA** (confirm the destructive action)
4. Content is permanently removed
5. Verify deletion with refresh

**Benefit**: Maintain clean document library, remove clutter, manage storage.

### Scenario 5: Status Audit & Reporting

**Situation**: Identify all pages that haven't been published to production.

**Steps**:
1. Go to root directory
2. Enable "Include all subdirectories"
3. Use filter: "Not Deployed" or "Preview Only"
4. Review filtered list to identify gaps
5. Take action on problematic pages

**Benefit**: Quick audit, identify deployment gaps, data for reporting.

### Scenario 6: Performance Validation at Scale

**Situation**: QA team needs to verify Lighthouse scores for recently published pages.

**Steps**:
1. Navigate to relevant section
2. Select recently published pages (filter by "Recently Published")
3. Click **More** → **Performance**
4. Choose **Lighthouse score for `.live` URL**
5. Review Core Web Vitals in PageSpeed Insights
6. Identify and address performance issues

**Benefit**: Rapid performance validation, identify issues before stakeholder reviews.

---

## Performance Considerations

- **Status Caching**: Intelligent caching reduces API calls and speeds up revisits
- **Parallel Processing**: Bulk operations use concurrent workers for efficiency
- **Lazy Loading**: Folder contents load on-demand for faster initial load
- **Search Optimization**: Search results are paginated for large content sets

---

## Contributing

- Follow the existing code style and patterns
- Test changes locally before committing
- Run `npm run lint:fix` to ensure code quality
- Update documentation for significant changes
- Submit pull requests to the main branch

---

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


---
wiki for reference :- https://wiki.corp.adobe.com/spaces/MSTeam/pages/3920629202/Content+Operations+Hub
## License

See [LICENSE](./LICENSE) file for details
