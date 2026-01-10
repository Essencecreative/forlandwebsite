# Gallery API - Response to UI Flow Diagram

## API Response Structure → Frontend Implementation

```
┌─────────────────────────────────────────────────────────────────┐
│                   GET /gallery Response                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  {                                                              │
│    "galleries": [                                               │
│      {                                                          │
│        "_id": "6962370bdd7cc9706ff329ac",                       │
│        "title": "Forland test 2",                               │
│        "description": "forland test 2",                         │
│        "category": {                          ◄─────────────┐   │
│          "_id": "696235fbdd7cc9706ff3299a",                 │   │
│          "name": "test 2",                                  │   │
│          "displayOrder": 2,                                 │   │
│          "isActive": true                                   │   │
│        },                                                    │   │
│        "photos": [                            ◄────────┐    │   │
│          "https://...",                              │    │   │
│          "https://..."                              │    │   │
│        ],                                           │    │   │
│        "uploadedAt": "2026-01-10T..."             │    │   │
│      }                                            │    │   │
│    ],                                            │    │   │
│    "totalCount": 2,                             │    │   │
│    "totalPages": 1,                             │    │   │
│    "currentPage": 1                             │    │   │
│  }                                              │    │   │
│                                                │    │   │
└────────────────────────────────────────────────┼────┼───┘
                                                 │    │
                                       ┌─────────┘    │
                                       │              │
                                       ▼              ▼
                    ┌──────────────────────────────────────────┐
                    │   Frontend Processing (React Component)  │
                    ├──────────────────────────────────────────┤
                    │                                          │
                    │  1. Extract Categories:                  │
                    │     Map over galleries                   │
                    │     Collect unique category objects      │
                    │     Sort by displayOrder                 │
                    │                                          │
                    │  2. Store State:                         │
                    │     [categories]                         │
                    │     [filteredGalleries]                  │
                    │     [activeCategory]                     │
                    │                                          │
                    │  3. Render Category Tabs:                │
                    │     "All" button                         │
                    │     Category buttons (sorted)            │
                    │                                          │
                    │  4. Filter on Click:                     │
                    │     Match gallery.category._id           │
                    │                                          │
                    └──────────────────────────────────────────┘
                                       │
                                       │
                ┌──────────────────────┴──────────────────────┐
                │                                             │
                ▼                                             ▼
    ┌─────────────────────────┐           ┌──────────────────────────┐
    │   Category Filter Tabs   │           │   Gallery Album Cards     │
    ├─────────────────────────┤           ├──────────────────────────┤
    │                         │           │                          │
    │  [All] [test 1] [test 2]│           │  ┌──────────────────┐    │
    │         ▲        ▲      │           │  │ Forland test 2   │    │
    │         │        │      │           │  │                  │    │
    │      Active   Click me  │           │  │  [Cover Image]   │    │
    │                         │           │  │  6 photos        │    │
    │                         │           │  └──────────────────┘    │
    │                         │           │                          │
    └─────────────────────────┘           │  ┌──────────────────┐    │
                                          │  │ Forland 1        │    │
                                          │  │                  │    │
                                          │  │  [Cover Image]   │    │
                                          │  │  7 photos        │    │
                                          │  └──────────────────┘    │
                                          │                          │
                                          └──────────────────────────┘
                                                    │
                                                    │ Click Album
                                                    ▼
                                         ┌──────────────────────────┐
                                         │   Photo Grid View        │
                                         ├──────────────────────────┤
                                         │                          │
                                         │  [Photo 1] [Photo 2]     │
                                         │  [Photo 3] [Photo 4]     │
                                         │  [Photo 5] [Photo 6]     │
                                         │                          │
                                         │  (Click photo for modal) │
                                         └──────────────────────────┘
```

## Data Flow Explanation

### Step 1: Initial Load
```
API Call → /gallery
  ↓
Receive galleries array with embedded categories
  ↓
Store in state: setGalleries(data.galleries)
```

### Step 2: Extract Categories
```
forEach gallery:
  → Check if category exists
  → Add to Map if not already there (by _id)
  ↓
Sort categories by displayOrder
  ↓
Store in state: setCategories(sortedCategories)
```

### Step 3: Category Tab Rendering
```
Display buttons for each category:
  → Category._id as unique key
  → Category.name as button text
  → Category._id as activeCategory comparison
```

### Step 4: Filter Galleries
```
User clicks category tab
  ↓
handleCategoryChange(categoryId) called
  ↓
Filter galleries where: gallery.category._id === categoryId
  ↓
setFilteredGalleries(filtered results)
```

### Step 5: Display Albums
```
Map over filteredGalleries
  ↓
For each gallery:
  → Show title, description
  → Show first photo as cover (photos[0])
  → Show photo count (photos.length)
  → Show upload date
  ↓
When clicked:
  → setSelectedAlbum(album)
  → setViewMode('photos')
```

### Step 6: View Photos
```
Show all photos from selectedAlbum.photos
  ↓
Grid layout with 4 columns
  ↓
Click photo → Open in modal
  ↓
Show title, description, date in footer
```

## API to UI Mapping

| API Field | Component Use | Display |
|-----------|---------------|---------|
| `gallery._id` | Album key & tracking | Hidden |
| `gallery.title` | Album header & modal footer | Album card title |
| `gallery.description` | Album info & modal footer | Album card description |
| `gallery.category._id` | Filter by category | Hidden (used for filtering) |
| `gallery.category.name` | Category tab labels | Category tabs |
| `gallery.category.displayOrder` | Tab sort order | Determines tab order |
| `gallery.photos[0]` | Cover image | Album card background |
| `gallery.photos[]` | Photo grid | Individual photo items |
| `gallery.photos.length` | Count display | "X photos" badge |
| `gallery.uploadedAt` | Date formatting | Album card date |

## Example: Clicking a Category Tab

```
User Action: Click "test 2" category tab
        ↓
handleCategoryChange("696235fbdd7cc9706ff3299a")
        ↓
setActiveCategory("696235fbdd7cc9706ff3299a")
        ↓
Filter galleries:
  gallery.category._id === "696235fbdd7cc9706ff3299a"
        ↓
setFilteredGalleries([
  {
    title: "Forland test 2",
    category: { _id: "696235fbdd7cc9706ff3299a", name: "test 2" },
    photos: [...]
  }
])
        ↓
Component Re-render:
  Album cards show only galleries in "test 2" category
```

## API Response Example for Pagination

```
GET /gallery?page=2&limit=10

Response:
{
  "galleries": [...],
  "totalCount": 50,
  "totalPages": 5,
  "currentPage": 2
}
```

Currently, pagination params are available but not used in the UI. 
Can be implemented in the future for:
- Lazy loading
- "Load more" button
- Infinite scroll
