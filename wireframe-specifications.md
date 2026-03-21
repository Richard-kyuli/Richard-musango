# Buy & Sell App - Wireframe Specifications

## 1. Home Screen Wireframe
**Layout:** Mobile portrait (360x800px)
**Components:**
- Header: Logo (left), Search icon (right), Notification bell (right)
- Search bar: "Search products..." with filter icon
- Category tabs: Horizontal scrollable (Electronics, Fashion, Home, etc.)
- Featured products grid: 2 columns, product cards with:
  - Product image placeholder (square)
  - Product title (2 lines max)
  - Price (bold)
  - Location (small text)
  - Heart icon (favorite)
- Bottom navigation: Home, Categories, Post, Messages, Profile

## 2. Categories Screen Wireframe
**Layout:** Mobile portrait (360x800px)
**Components:**
- Header: "Categories" title, Search icon
- Category grid: 2 columns with:
  - Category icon (large circle)
  - Category name
  - Item count "(123 items)"
- Popular categories section at top
- All categories in alphabetical order below
- Bottom navigation (same as home)

## 3. Product Details Wireframe
**Layout:** Mobile portrait (360x800px)
**Components:**
- Header: Back arrow, Share icon, Heart icon
- Image carousel: Full width, dots indicator, swipe gestures
- Product info section:
  - Title (large, bold)
  - Price (large, colored)
  - Location and posted date
  - Condition badge
- Seller info card:
  - Profile picture, name, rating stars
  - "View profile" link
- Description section: Expandable text
- Action buttons: "Message Seller", "Call" (if available)
- Related products: Horizontal scroll

## 4. Post Product Screen (Step 1) Wireframe
**Layout:** Mobile portrait (360x800px)
**Components:**
- Header: "Post Product" title, Close X
- Progress indicator: Step 1 of 3
- Photo upload section:
  - Large dashed border area
  - Camera icon
  - "Add photos (up to 5)" text
  - Thumbnail previews below
- Category selection:
  - Dropdown or expandable list
  - "Select category" placeholder
- Continue button (bottom, full width)

## 5. Post Product Screen (Step 2) Wireframe
**Layout:** Mobile portrait (360x800px)
**Components:**
- Header: Back arrow, "Product Details", Close X
- Progress indicator: Step 2 of 3
- Form fields:
  - Product title (text input)
  - Description (text area, expandable)
  - Condition (radio buttons: New, Like New, Good, Fair)
  - Price (number input with currency symbol)
  - Location (auto-filled, editable)
- Continue button (bottom, full width)

## 6. Post Product Screen (Step 3) Wireframe
**Layout:** Mobile portrait (360x800px)
**Components:**
- Header: Back arrow, "Review & Post", Close X
- Progress indicator: Step 3 of 3
- Preview card showing:
  - Product image
  - Title, price, location
  - "This is how your listing will appear"
- Contact preferences:
  - Checkboxes for Messages, Calls
  - Phone number field (optional)
- Post options:
  - "Post now" (free)
  - "Promote listing" (paid, with benefits list)
- Post button (bottom, full width)

## 7. Messages/Chat Screen Wireframe
**Layout:** Mobile portrait (360x800px)
**Components:**
- Header: "Messages" title, Search icon
- Chat list items:
  - Profile picture (left)
  - Name and product title
  - Last message preview
  - Timestamp
  - Unread indicator (dot)
  - Product thumbnail (right)
- Empty state: "No messages yet" with illustration
- Floating action button: "Start new conversation"

## 8. Individual Chat Wireframe
**Layout:** Mobile portrait (360x800px)
**Components:**
- Header: Back arrow, Contact name, Product title, Call/Video icons
- Product context card (top):
  - Small product image
  - Title and price
  - "View listing" link
- Chat messages:
  - Sender messages (right, colored)
  - Receiver messages (left, gray)
  - Timestamps
  - Message status indicators
- Input area:
  - Text input field
  - Attachment icon
  - Send button

## 9. Profile Screen Wireframe
**Layout:** Mobile portrait (360x800px)
**Components:**
- Header: "Profile" title, Settings gear icon
- Profile section:
  - Large profile picture (center)
  - Name and join date
  - Rating stars and review count
  - "Edit profile" button
- My listings section:
  - "Active (5)" and "Sold (12)" tabs
  - Grid of product thumbnails
- Menu items:
  - Favorites
  - Purchase history
  - Settings
  - Help & Support
  - Sign out

## 10. Search Results Wireframe
**Layout:** Mobile portrait (360x800px)
**Components:**
- Header: Search bar (with query), Filter icon
- Filter chips: Price, Location, Condition (scrollable)
- Sort dropdown: "Sort by: Newest"
- Results count: "123 results found"
- Product grid: Same as home screen
- Load more button at bottom
- No results state: "No products found" with suggestions

## Design Guidelines:
- Use consistent spacing (8px grid system)
- Primary buttons: Full width, rounded corners
- Cards: Subtle shadows, rounded corners
- Typography: Clear hierarchy with different font weights
- Icons: Consistent style, appropriate sizing
- Touch targets: Minimum 44px height
- Loading states: Skeleton screens for content areas