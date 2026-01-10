# Gallery API - Quick Reference & Code Snippets

## API Quick Reference

### 1. Fetch All Galleries
```bash
curl "https://forlandservice.onrender.com/gallery"
```

**Response:**
- 2 galleries found
- Each has embedded category object
- Categories available: "test 1" (order: 1), "test 2" (order: 2)

### 2. Fetch Single Gallery
```bash
curl "https://forlandservice.onrender.com/gallery/6962370bdd7cc9706ff329ac"
```

### 3. With Pagination (if supported)
```bash
curl "https://forlandservice.onrender.com/gallery?page=1&limit=50"
```

---

## React Implementation Snippets

### 1. Fetch and Store Galleries
```javascript
useEffect(() => {
  const fetchGalleries = async () => {
    try {
      const res = await fetch('https://forlandservice.onrender.com/gallery');
      const data = await res.json();
      const galleriesData = data.galleries || [];
      setGalleries(galleriesData);
      setFilteredGalleries(galleriesData);
    } catch (err) {
      console.error('Error fetching galleries:', err);
    } finally {
      setLoading(false);
    }
  };
  fetchGalleries();
}, []);
```

### 2. Extract and Sort Categories
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

### 3. Filter Galleries by Category
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

### 4. Render Category Tabs
```javascript
<div className="category-filters">
  <button
    className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
    onClick={() => handleCategoryChange('all')}
  >
    All
  </button>
  {categories.map((category) => (
    <button
      key={category._id}
      className={`category-tab ${activeCategory === category._id ? 'active' : ''}`}
      onClick={() => handleCategoryChange(category._id)}
    >
      {category.name}
    </button>
  ))}
</div>
```

### 5. Display Album Cards
```javascript
<div className="albums-grid">
  {filteredGalleries.map((album) => (
    <div
      key={album._id}
      className="album-card"
      onClick={() => handleAlbumClick(album)}
    >
      <img
        src={album.photos[0]}  // First photo as cover
        alt={album.title}
        className="album-cover"
      />
      <div className="album-overlay">
        <h3>{album.title}</h3>
        <p>{album.description}</p>
        <div className="album-photo-count">
          {album.photos.length} photos
        </div>
        <span className="album-date">
          {new Date(album.uploadedAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  ))}
</div>
```

### 6. Display Photo Grid (Album View)
```javascript
<div className="photos-grid">
  {selectedAlbum.photos.map((url, idx) => (
    <div
      key={`${selectedAlbum._id}-${idx}`}
      className="gallery-item"
      onClick={() => setSelectedPhoto({
        url,
        title: selectedAlbum.title,
        desc: selectedAlbum.description,
        date: new Date(selectedAlbum.uploadedAt).toLocaleDateString(),
      })}
    >
      <img src={url} alt={`Photo ${idx + 1}`} />
    </div>
  ))}
</div>
```

---

## API Response Structure (Full Example)

### Single Gallery Object
```javascript
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
    "https://res.cloudinary.com/dedfrilse/image/upload/v1768044299/gallery/1768044296323_...",
    "https://res.cloudinary.com/dedfrilse/image/upload/v1768044299/gallery/1768044296325_...",
    "https://res.cloudinary.com/dedfrilse/image/upload/v1768044299/gallery/1768044296330_..."
  ],
  "uploadedAt": "2026-01-10T11:24:59.806Z",
  "__v": 1
}
```

### Category Object Structure
```javascript
{
  "_id": "696235fbdd7cc9706ff3299a",
  "name": "test 2",
  "description": "test 2",
  "displayOrder": 2,
  "isActive": true,
  "createdAt": "2026-01-10T11:20:27.526Z",
  "updatedAt": "2026-01-10T11:20:27.526Z",
  "__v": 0
}
```

---

## Error Handling Patterns

### Basic Error Catch
```javascript
try {
  const res = await fetch('https://forlandservice.onrender.com/gallery');
  const data = await res.json();
  // Process data
} catch (err) {
  console.error('Error fetching galleries:', err);
  // Show user-friendly error message
}
```

### With Loading State
```javascript
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  setLoading(true);
  setError(null);
  
  fetch('https://forlandservice.onrender.com/gallery')
    .then(res => res.json())
    .then(data => {
      setGalleries(data.galleries || []);
      setLoading(false);
    })
    .catch(err => {
      setError(err.message);
      setLoading(false);
    });
}, []);

// In render
{loading && <div>Loading...</div>}
{error && <div>Error: {error}</div>}
{!loading && !error && <GalleryContent />}
```

---

## Key Points for Integration

### ✅ What's Currently Implemented
1. Fetch all galleries with embedded categories
2. Extract categories from gallery data
3. Sort categories by displayOrder
4. Display category tabs for filtering
5. Filter galleries when tab is clicked
6. Show album cards with cover images
7. Display photo grid when album is clicked
8. Modal view for individual photos

### ⚠️ Important Notes
- Categories are **embedded in gallery objects**, not separate
- Use `category._id` for filtering, not `category.name`
- `displayOrder` determines tab order (0-based)
- `isActive` flag indicates if category is visible
- Photo URLs are stored in Cloudinary
- First photo in `photos` array is used as album cover

### 🔄 Future Enhancement Options

#### Option 1: Create `/galleryCategories` Endpoint
Benefits:
- Fetch categories independently
- Filter by isActive status
- Better for category management

Implementation:
```javascript
// Backend would need:
GET /galleryCategories?page=1&limit=50&isActive=true

// Then frontend could use:
const res = await fetch('https://forlandservice.onrender.com/galleryCategories?isActive=true');
const categories = await res.json();
```

#### Option 2: Pagination Support
Benefits:
- Load galleries in batches
- Infinite scroll support
- Better performance for large datasets

Implementation:
```javascript
const fetchGalleries = async (page = 1, limit = 10) => {
  const res = await fetch(
    `https://forlandservice.onrender.com/gallery?page=${page}&limit=${limit}`
  );
  const data = await res.json();
  // Use: data.totalCount, data.totalPages, data.currentPage
};
```

#### Option 3: Search/Filter by Category Name
Implementation:
```javascript
const handleCategorySearch = (searchTerm) => {
  const filtered = galleries.filter(g => 
    g.category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredGalleries(filtered);
};
```

---

## Testing Checklist

- [ ] Galleries load without errors
- [ ] All categories appear in tabs
- [ ] Categories sorted by displayOrder
- [ ] "All" tab shows all galleries
- [ ] Clicking category tab filters correctly
- [ ] Album cards display with images
- [ ] Photo count is accurate
- [ ] Upload date displays correctly
- [ ] Clicking album shows photo grid
- [ ] All photos load in grid
- [ ] Clicking photo opens modal
- [ ] Modal displays photo correctly
- [ ] Modal shows title and description
- [ ] Can navigate back to albums
- [ ] Responsive on mobile devices

---

## File Structure

```
src/pages/gallery/
├── index.js                    # Main gallery component
│   ├── State Management
│   ├── API Fetch Hook
│   ├── Category Extraction
│   ├── Filter Logic
│   ├── UI Rendering
│   │   ├── Category Tabs
│   │   ├── Album Grid
│   │   ├── Photo Grid
│   │   └── Photo Modal
│   └── Styles

Documentation/
├── API_INTEGRATION.md          # API endpoints and usage
├── GALLERY_API_FLOW.md         # Data flow diagrams
└── API_QUICK_REFERENCE.md      # This file
```

---

## Common Issues & Solutions

### Issue: Categories not showing
**Solution:** Check that galleries have valid category objects
```javascript
// Verify category exists
if (g.category && g.category._id) { ... }
```

### Issue: Filtering not working
**Solution:** Ensure categoryId comparison uses `_id`
```javascript
// Wrong:
gallery.category === categoryId

// Correct:
gallery.category._id === categoryId
```

### Issue: Photos not loading
**Solution:** Verify photo URLs are valid Cloudinary URLs
```javascript
// Check URL format
console.log(album.photos[0]); // Should be HTTPS URL
```

### Issue: Tabs in wrong order
**Solution:** Ensure categories sorted by displayOrder
```javascript
.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0))
```

---

## API Response Times (Observed)
- Get all galleries: ~150ms
- Get single gallery: ~100ms
- Cloudinary image load: ~500-1000ms (varies by size)

---

## Next Steps
1. Test gallery page thoroughly
2. Consider implementing `/galleryCategories` endpoint if needed
3. Add pagination for large gallery collections
4. Add image lazy loading for performance
5. Consider caching categories in localStorage
