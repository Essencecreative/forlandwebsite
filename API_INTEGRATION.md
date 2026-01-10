# Gallery API Integration Documentation

## Overview
This document outlines the API endpoints used for the Gallery feature and how they are integrated with the React frontend.

---

## API Endpoints

### 1. Get All Galleries
**Endpoint:** `GET /gallery`

**Query Parameters:**
- `page` (optional): Page number for pagination (default: 1)
- `limit` (optional): Number of galleries per page (default: 50)

**Response Format:**
```json
{
  "galleries": [
    {
      "_id": "6962370bdd7cc9706ff329ac",
      "title": "Forland test 2",
      "description": "forland test 2",
      "category": {
        "_id": "696235fbdd7cc9706ff3299a",
        "name": "test 2",
        "description": "test 2",
        "displayOrder": 2,
        "isActive": true,
        "createdAt": "2026-01-10T11:20:27.526Z",
        "updatedAt": "2026-01-10T11:20:27.526Z",
        "__v": 0
      },
      "photos": [
        "https://res.cloudinary.com/dedfrilse/image/upload/v1768044299/gallery/...",
        "https://res.cloudinary.com/dedfrilse/image/upload/v1768044299/gallery/..."
      ],
      "uploadedAt": "2026-01-10T11:24:59.806Z",
      "__v": 1
    }
  ],
  "totalCount": 2,
  "totalPages": 1,
  "currentPage": 1
}
```

**Usage in Frontend:**
```javascript
const res = await fetch('https://forlandservice.onrender.com/gallery');
const data = await res.json();
const galleries = data.galleries;
```

---

### 2. Get Single Gallery
**Endpoint:** `GET /gallery/:galleryId`

**Parameters:**
- `galleryId`: The unique ID of the gallery

**Response Format:**
```json
{
  "_id": "6962370bdd7cc9706ff329ac",
  "title": "Forland test 2",
  "description": "forland test 2",
  "category": {
    "_id": "696235fbdd7cc9706ff3299a",
    "name": "test 2",
    "description": "test 2",
    "displayOrder": 2,
    "isActive": true,
    "createdAt": "2026-01-10T11:20:27.526Z",
    "updatedAt": "2026-01-10T11:20:27.526Z",
    "__v": 0
  },
  "photos": [
    "https://res.cloudinary.com/dedfrilse/image/upload/v1768044299/gallery/...",
    "https://res.cloudinary.com/dedfrilse/image/upload/v1768044299/gallery/..."
  ],
  "uploadedAt": "2026-01-10T11:24:59.806Z",
  "__v": 1
}
```

**Usage in Frontend:**
```javascript
const res = await fetch(`https://forlandservice.onrender.com/gallery/${galleryId}`);
const gallery = await res.json();
```

---

### 3. Gallery Categories
**Note:** The `/galleryCategories` endpoint does not currently exist on the backend. Categories are embedded within each gallery object and accessed through the `/gallery` endpoint.

**How Categories are Extracted:**
Categories are extracted from the gallery objects and made available as tabs in the UI. Each gallery has an embedded `category` object containing:
- `_id`: Unique category identifier
- `name`: Category name (displayed in tabs)
- `description`: Category description
- `displayOrder`: Sort order for tabs
- `isActive`: Whether the category is active

---

## Frontend Implementation

### Gallery Page Component
**File:** `src/pages/gallery/index.js`

#### Key Features:
1. **Fetch all galleries** on component mount
2. **Extract and sort categories** by `displayOrder`
3. **Display category tabs** for filtering
4. **Filter galleries by category** when tab is clicked
5. **Show album cards** with cover images and photo counts
6. **Modal view** for individual photos

#### State Management:
```javascript
const [galleries, setGalleries] = useState([]);           // All galleries
const [filteredGalleries, setFilteredGalleries] = useState([]); // Filtered by category
const [categories, setCategories] = useState([]);        // Category objects
const [activeCategory, setActiveCategory] = useState('all'); // Current filter
const [loading, setLoading] = useState(true);            // Loading state
const [selectedPhoto, setSelectedPhoto] = useState(null); // For modal
const [selectedAlbum, setSelectedAlbum] = useState(null); // Current album view
const [viewMode, setViewMode] = useState('albums');      // 'albums' or 'photos'
```

#### Category Extraction Logic:
```javascript
// Extract unique categories and sort by displayOrder
const uniqueCategoriesMap = new Map();
galleriesData.forEach(g => {
  if (g.category && !uniqueCategoriesMap.has(g.category._id)) {
    uniqueCategoriesMap.set(g.category._id, g.category);
  }
});
const sortedCategories = Array.from(uniqueCategoriesMap.values())
  .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
setCategories(sortedCategories);
```

#### Category Filtering:
```javascript
const handleCategoryChange = (categoryId) => {
  setActiveCategory(categoryId);
  if (categoryId === 'all') {
    setFilteredGalleries(galleries);
  } else {
    setFilteredGalleries(
      galleries.filter(g => g.category && g.category._id === categoryId)
    );
  }
};
```

---

## Current Gallery Data Sample

### Available Categories:
1. **test 1** (displayOrder: 1)
   - 1 gallery with 7 photos

2. **test 2** (displayOrder: 2)
   - 1 gallery with 6 photos

### Gallery Structure:
- Each gallery has multiple photos stored in Cloudinary
- Photos array contains URLs for direct access
- Upload date is tracked for each gallery

---

## Future Enhancements

### Option 1: Create Dedicated Categories Endpoint
If needed, a `/galleryCategories` endpoint could be created for:
- Fetching categories without galleries
- Filtering by `isActive` status
- Pagination support

**Example Request:**
```
GET /galleryCategories?page=1&limit=50&isActive=true
```

### Option 2: Maintain Current Structure
Keep categories embedded in gallery objects (current implementation):
- Reduces API calls
- Keeps data consistent
- Simpler backend management

---

## Testing

### Test Endpoints:
```bash
# Get all galleries
curl "https://forlandservice.onrender.com/gallery"

# Get single gallery
curl "https://forlandservice.onrender.com/gallery/6962370bdd7cc9706ff329ac"

# Get with pagination
curl "https://forlandservice.onrender.com/gallery?page=1&limit=10"
```

---

## Error Handling

The frontend handles:
- Loading states (skeleton loaders)
- Empty gallery states
- API errors (logged to console)
- Network failures

```javascript
catch (err) {
  console.error('Error fetching galleries:', err);
}
```

---

## Files Modified

- `src/pages/gallery/index.js`: Updated category extraction and filtering logic

### Changes Made:
1. Updated `fetchGalleries` to properly handle category objects
2. Modified `handleCategoryChange` to filter by category `_id`
3. Updated category tabs to use `category._id` and `category.name`
4. Added sorting by `displayOrder` for proper category tab ordering
