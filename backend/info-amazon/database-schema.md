Got it ✅
If you want **all Amazon product-related database schemas**, we should focus only on the **catalog + product ecosystem** (not orders, users, logistics). This covers **everything related to products, categories, sellers, reviews, inventory, ads, and personalization**.

---

# 📦 Amazon **Product Database Schema**

## 1. **Categories**

```sql
CREATE TABLE Categories (
    category_id BIGINT PRIMARY KEY,
    parent_id BIGINT NULL REFERENCES Categories(category_id),
    name VARCHAR(255) NOT NULL,
    description TEXT
);
```

---

## 2. **Products**

```sql
CREATE TABLE Products (
    product_id BIGINT PRIMARY KEY,
    seller_id BIGINT NOT NULL REFERENCES Sellers(seller_id),
    category_id BIGINT NOT NULL REFERENCES Categories(category_id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    brand VARCHAR(255),
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL DEFAULT 0,
    rating_avg DECIMAL(3,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 3. **Product Images**

```sql
CREATE TABLE ProductImages (
    image_id BIGINT PRIMARY KEY,
    product_id BIGINT NOT NULL REFERENCES Products(product_id),
    image_url TEXT NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE
);
```

---

## 4. **Product Attributes (Variants)**

```sql
CREATE TABLE ProductAttributes (
    attribute_id BIGINT PRIMARY KEY,
    product_id BIGINT NOT NULL REFERENCES Products(product_id),
    key VARCHAR(100),   -- e.g. Color, Size
    value VARCHAR(255)  -- e.g. Red, XL
);
```

---

## 5. **Inventory & Warehousing**

```sql
CREATE TABLE Warehouses (
    warehouse_id BIGINT PRIMARY KEY,
    location VARCHAR(255),
    capacity INT
);

CREATE TABLE Inventory (
    inventory_id BIGINT PRIMARY KEY,
    product_id BIGINT NOT NULL REFERENCES Products(product_id),
    warehouse_id BIGINT NOT NULL REFERENCES Warehouses(warehouse_id),
    quantity_available INT NOT NULL,
    reorder_level INT DEFAULT 0
);
```

---

## 6. **Sellers**

```sql
CREATE TABLE Sellers (
    seller_id BIGINT PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES Users(user_id),
    store_name VARCHAR(255) NOT NULL,
    gst_number VARCHAR(50),
    rating_avg DECIMAL(3,2) DEFAULT 0,
    verified BOOLEAN DEFAULT FALSE
);
```

---

## 7. **Seller Products (Marketplace Pricing)**

```sql
CREATE TABLE SellerProducts (
    seller_product_id BIGINT PRIMARY KEY,
    seller_id BIGINT NOT NULL REFERENCES Sellers(seller_id),
    product_id BIGINT NOT NULL REFERENCES Products(product_id),
    price DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL
);
```

---

## 8. **Reviews & Ratings**

```sql
CREATE TABLE Reviews (
    review_id BIGINT PRIMARY KEY,
    product_id BIGINT NOT NULL REFERENCES Products(product_id),
    user_id BIGINT NOT NULL REFERENCES Users(user_id),
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 9. **Recommendations & Activity**

```sql
CREATE TABLE UserActivity (
    activity_id BIGINT PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES Users(user_id),
    product_id BIGINT NOT NULL REFERENCES Products(product_id),
    action VARCHAR(50),   -- view, add_to_cart, purchase
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Recommendations (
    recommendation_id BIGINT PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES Users(user_id),
    product_id BIGINT NOT NULL REFERENCES Products(product_id),
    score DECIMAL(5,2)    -- relevance score
);
```

---

## 10. **Advertising (Sponsored Products)**

```sql
CREATE TABLE AdCampaigns (
    campaign_id BIGINT PRIMARY KEY,
    seller_id BIGINT NOT NULL REFERENCES Sellers(seller_id),
    budget DECIMAL(10,2),
    start_date DATE,
    end_date DATE,
    status VARCHAR(50)
);

CREATE TABLE AdClicks (
    click_id BIGINT PRIMARY KEY,
    campaign_id BIGINT NOT NULL REFERENCES AdCampaigns(campaign_id),
    product_id BIGINT NOT NULL REFERENCES Products(product_id),
    user_id BIGINT NOT NULL REFERENCES Users(user_id),
    clicked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
```sql
CREATE TABLE ProductPricing (
    pricing_id BIGINT PRIMARY KEY,
    product_id BIGINT NOT NULL REFERENCES Products(product_id),
    base_price DECIMAL(10,2) NOT NULL,
    discount_price DECIMAL(10,2),
    discount_percent DECIMAL(5,2),
    start_date DATE,
    end_date DATE
);
```

---

## 12. **Product Shipping Info**

```sql
CREATE TABLE ProductShipping (
    shipping_id BIGINT PRIMARY KEY,
    product_id BIGINT NOT NULL REFERENCES Products(product_id),
    weight DECIMAL(10,2),
    dimensions VARCHAR(100),   -- e.g. "10x5x2 cm"
    shipping_class VARCHAR(50), -- standard, oversized
    free_shipping BOOLEAN DEFAULT FALSE,
    delivery_time_estimate VARCHAR(50)
);
```

---

## 13. **Product Metadata (SEO, Keywords, Tags)**

```sql
CREATE TABLE ProductMetadata (
    metadata_id BIGINT PRIMARY KEY,
    product_id BIGINT NOT NULL REFERENCES Products(product_id),
    keywords TEXT,
    tags TEXT,
    search_rank INT
);
```

---

## 14. **Product Questions & Answers (Q\&A)**

```sql
CREATE TABLE ProductQuestions (
    question_id BIGINT PRIMARY KEY,
    product_id BIGINT NOT NULL REFERENCES Products(product_id),
    user_id BIGINT NOT NULL REFERENCES Users(user_id),
    question TEXT NOT NULL,
    asked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ProductAnswers (
    answer_id BIGINT PRIMARY KEY,
    question_id BIGINT NOT NULL REFERENCES ProductQuestions(question_id),
    user_id BIGINT NOT NULL REFERENCES Users(user_id),
    answer TEXT NOT NULL,
    answered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 15. **Product Recommendations (Bundles & Related Items)**

```sql
CREATE TABLE ProductBundles (
    bundle_id BIGINT PRIMARY KEY,
    main_product_id BIGINT NOT NULL REFERENCES Products(product_id),
    related_product_id BIGINT NOT NULL REFERENCES Products(product_id),
    relation_type VARCHAR(50)  -- "frequently_bought_together", "similar_item", "accessory"
);
```

---

## 16. **Product Compliance & Safety**

```sql
CREATE TABLE ProductCompliance (
    compliance_id BIGINT PRIMARY KEY,
    product_id BIGINT NOT NULL REFERENCES Products(product_id),
    certification VARCHAR(255),   -- e.g. CE, ISO, FDA
    country VARCHAR(100),
    compliant BOOLEAN DEFAULT TRUE,
    expiry_date DATE
);
```

---

## 17. **Product Media (Videos, Manuals, AR Models)**

```sql
CREATE TABLE ProductMedia (
    media_id BIGINT PRIMARY KEY,
    product_id BIGINT NOT NULL REFERENCES Products(product_id),
    media_type VARCHAR(50),  -- video, pdf_manual, 3d_model
    media_url TEXT NOT NULL
);
```

---

## 18. **Product Stock History (Audit Log)**

```sql
CREATE TABLE ProductStockHistory (
    history_id BIGINT PRIMARY KEY,
    product_id BIGINT NOT NULL REFERENCES Products(product_id),
    change_type VARCHAR(50),   -- restock, sale, return
    quantity_changed INT,
    old_quantity INT,
    new_quantity INT,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 19. **Product Subscriptions (Amazon Subscribe & Save)**

```sql
CREATE TABLE ProductSubscriptions (
    subscription_id BIGINT PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES Users(user_id),
    product_id BIGINT NOT NULL REFERENCES Products(product_id),
    frequency VARCHAR(50),  -- weekly, monthly, quarterly
    next_delivery_date DATE,
    status VARCHAR(50)      -- active, paused, cancelled
);
```

---

## 20. **Global Product Catalog (UPC/ASIN Mapping)**

```sql
CREATE TABLE ProductIdentifiers (
    identifier_id BIGINT PRIMARY KEY,
    product_id BIGINT NOT NULL REFERENCES Products(product_id),
    asin VARCHAR(20) UNIQUE NOT NULL,   -- Amazon Standard Identification Number
    upc VARCHAR(20),
    ean VARCHAR(20),
    isbn VARCHAR(20),
    sku VARCHAR(50) UNIQUE NOT NULL
);
```
---

✅ This covers the **entire Amazon Product ecosystem**:

* Categories & Products
* Images, Attributes (variants)
* Sellers & Marketplace listings
* Inventory & Warehouses
* Reviews & Ratings
* Recommendations (personalization)
* Ads (sponsored products)
* Pricing & shipping
* Metadata, SEO, tags
* Q\&A system
* Bundles & recommendations
* Compliance & safety certifications
* Media (manuals, videos, AR models)
* Stock audit history
* Subscriptions (like Subscribe & Save)
* Global identifiers (ASIN, UPC, EAN, ISBN, SKU)
---

Do you want me to now **merge all these into a single SQL script file** (so you can run it directly in MySQL/PostgreSQL), or should I prepare a **visual ERD diagram** to see relationships between all product-related tables?
