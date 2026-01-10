# Equal Height Cards Solution

## CSS Solutions for Equal Height Cards

### Method 1: CSS Flexbox (Recommended)
Add this to the parent container of your cards:

```css
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* spacing between cards */
}

.card {
  display: flex;
  flex-direction: column;
  flex: 1 1 calc(33.333% - 20px); /* 3 cards per row, adjust as needed */
  min-width: 250px; /* minimum card width */
}

.card-content {
  flex-grow: 1; /* Makes content area expand to fill available space */
}
```

### Method 2: CSS Grid (Modern Approach)
```css
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  align-items: stretch; /* Makes all cards same height */
}

.card {
  display: flex;
  flex-direction: column;
}

.card-content {
  flex-grow: 1;
}
```

### Method 3: Bootstrap Classes (If using Bootstrap)
```jsx
<div className="row">
  <div className="col-md-4 d-flex">
    <div className="card w-100">
      {/* Card content */}
    </div>
  </div>
  <div className="col-md-4 d-flex">
    <div className="card w-100">
      {/* Card content */}
    </div>
  </div>
</div>
```

## React Component Example

```jsx
const BannerCards = ({ banners }) => {
  return (
    <div className="banner-cards-container">
      {banners.map((banner) => (
        <div key={banner._id} className="banner-card">
          <div className="banner-card-image">
            <img src={banner.image} alt={banner.title} />
          </div>
          <div className="banner-card-content">
            <h3>{banner.title}</h3>
            <p>{banner.description}</p>
          </div>
          <div className="banner-card-footer">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};
```

```css
.banner-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  padding: 20px;
}

.banner-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.banner-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.banner-card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.banner-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-card-content {
  flex: 1; /* This makes content expand to fill space */
  padding: 16px;
}

.banner-card-content h3 {
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 600;
}

.banner-card-content p {
  margin: 0;
  color: #666;
  line-height: 1.5;
}

.banner-card-footer {
  padding: 16px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 8px;
}

.banner-card-footer button {
  flex: 1;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}
```

## Key Points

1. **Parent Container**: Use `display: flex` or `display: grid` with `align-items: stretch`
2. **Card Structure**: Use `display: flex; flex-direction: column` on cards
3. **Content Area**: Use `flex: 1` or `flex-grow: 1` on the content section
4. **Fixed Elements**: Keep headers, images, and footers at fixed heights when possible

This ensures all cards have the same height, with the content area expanding/contracting as needed.
