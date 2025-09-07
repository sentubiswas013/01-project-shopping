{
  "info": {
    "name": "Store API Collection",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "AdCampaign Service",
      "item": [
        {
          "name": "Get All AdCampaigns",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/ad-campaigns",
              "host": ["{{base_url}}"],
              "path": ["ad-campaigns"]
            }
          },
          "response": []
        },
        {
          "name": "Create AdCampaign",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"name\": \"Summer Sale\",\n  \"startDate\": \"2025-09-01\",\n  \"endDate\": \"2025-09-30\",\n  \"budget\": 10000\n}"
            },
            "url": {
              "raw": "{{base_url}}/ad-campaigns",
              "host": ["{{base_url}}"],
              "path": ["ad-campaigns"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "AdClick Service",
      "item": [
        {
          "name": "Get All AdClicks",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/ad-clicks",
              "host": ["{{base_url}}"],
              "path": ["ad-clicks"]
            }
          },
          "response": []
        },
        {
          "name": "Create AdClick",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"campaignId\": 1,\n  \"productId\": 1,\n  \"userId\": 2,\n  \"clickedAt\": \"2025-09-07T12:00:00\"\n}"
            },
            "url": {
              "raw": "{{base_url}}/ad-clicks",
              "host": ["{{base_url}}"],
              "path": ["ad-clicks"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Category Service",
      "item": [
        {
          "name": "Get All Categories",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/categories",
              "host": ["{{base_url}}"],
              "path": ["categories"]
            }
          },
          "response": []
        },
        {
          "name": "Create Category",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"parentId\": null,\n  \"name\": \"Electronics\",\n  \"description\": \"Electronic items\"\n}"
            },
            "url": {
              "raw": "{{base_url}}/categories",
              "host": ["{{base_url}}"],
              "path": ["categories"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Inventory Service",
      "item": [
        {
          "name": "Get All Inventories",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/inventories",
              "host": ["{{base_url}}"],
              "path": ["inventories"]
            }
          },
          "response": []
        },
        {
          "name": "Create Inventory",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"productId\": 1,\n  \"warehouseId\": 1,\n  \"quantityAvailable\": 100,\n  \"reorderLevel\": 10\n}"
            },
            "url": {
              "raw": "{{base_url}}/inventories",
              "host": ["{{base_url}}"],
              "path": ["inventories"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Product Service",
      "item": [
        {
          "name": "Get All Products",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/products",
              "host": ["{{base_url}}"],
              "path": ["products"]
            }
          },
          "response": []
        },
        {
          "name": "Create Product",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"sellerId\": 1,\n  \"categoryId\": 1,\n  \"name\": \"Smartphone\",\n  \"description\": \"Latest model\",\n  \"brand\": \"BrandX\",\n  \"price\": 499.99,\n  \"stockQuantity\": 50\n}"
            },
            "url": {
              "raw": "{{base_url}}/products",
              "host": ["{{base_url}}"],
              "path": ["products"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "ProductAnswer Service",
      "item": [
        {
          "name": "Get All ProductAnswers",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/product-answers",
              "host": ["{{base_url}}"],
              "path": ["product-answers"]
            }
          },
          "response": []
        },
        {
          "name": "Create ProductAnswer",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"questionId\": 1,\n  \"userId\": 2,\n  \"answer\": \"This product supports fast charging.\",\n  \"answeredAt\": \"2025-09-07T13:00:00\"\n}"
            },
            "url": {
              "raw": "{{base_url}}/product-answers",
              "host": ["{{base_url}}"],
              "path": ["product-answers"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "ProductAttribute Service",
      "item": [
        {
          "name": "Get All ProductAttributes",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/product-attributes",
              "host": ["{{base_url}}"],
              "path": ["product-attributes"]
            }
          },
          "response": []
        },
        {
          "name": "Create ProductAttribute",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"productId\": 1,\n  \"key\": \"Color\",\n  \"value\": \"Black\"\n}"
            },
            "url": {
              "raw": "{{base_url}}/product-attributes",
              "host": ["{{base_url}}"],
              "path": ["product-attributes"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "ProductBundle Service",
      "item": [
        {
          "name": "Get All ProductBundles",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/product-bundles",
              "host": ["{{base_url}}"],
              "path": ["product-bundles"]
            }
          },
          "response": []
        },
        {
          "name": "Create ProductBundle",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"mainProductId\": 1,\n  \"relatedProductId\": 2,\n  \"relationType\": \"Accessory\"\n}"
            },
            "url": {
              "raw": "{{base_url}}/product-bundles",
              "host": ["{{base_url}}"],
              "path": ["product-bundles"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "ProductCompliance Service",
      "item": [
        {
          "name": "Get All ProductCompliances",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/product-compliances",
              "host": ["{{base_url}}"],
              "path": ["product-compliances"]
            }
          },
          "response": []
        },
        {
          "name": "Create ProductCompliance",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"productId\": 1,\n  \"certification\": \"CE\",\n  \"country\": \"India\",\n  \"compliant\": true,\n  \"expiryDate\": \"2026-01-01\"\n}"
            },
            "url": {
              "raw": "{{base_url}}/product-compliances",
              "host": ["{{base_url}}"],
              "path": ["product-compliances"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "ProductIdentifier Service",
      "item": [
        {
          "name": "Get All ProductIdentifiers",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/product-identifiers",
              "host": ["{{base_url}}"],
              "path": ["product-identifiers"]
            }
          },
          "response": []
        },
        {
          "name": "Create ProductIdentifier",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"productId\": 1,\n  \"asin\": \"B000123456\",\n  \"upc\": \"123456789012\",\n  \"ean\": \"1234567890123\",\n  \"isbn\": \"9781234567890\",\n  \"sku\": \"SKU12345\"\n}"
            },
            "url": {
              "raw": "{{base_url}}/product-identifiers",
              "host": ["{{base_url}}"],
              "path": ["product-identifiers"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "ProductImage Service",
      "item": [
        {
          "name": "Get All ProductImages",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/product-images",
              "host": ["{{base_url}}"],
              "path": ["product-images"]
            }
          },
          "response": []
        },
        {
          "name": "Create ProductImage",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"productId\": 1,\n  \"imageUrl\": \"https://example.com/image.jpg\",\n  \"isPrimary\": true\n}"
            },
            "url": {
              "raw": "{{base_url}}/product-images",
              "host": ["{{base_url}}"],
              "path": ["product-images"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "ProductMedia Service",
      "item": [
        {
          "name": "Get All ProductMedia",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/product-media",
              "host": ["{{base_url}}"],
              "path": ["product-media"]
            }
          },
          "response": []
        },
        {
          "name": "Create ProductMedia",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"productId\": 1,\n  \"mediaType\": \"video\",\n  \"mediaUrl\": \"https://example.com/video.mp4\"\n}"
            },
            "url": {
              "raw": "{{base_url}}/product-media",
              "host": ["{{base_url}}"],
              "path": ["product-media"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "ProductMetadata Service",
      "item": [
        {
          "name": "Get All ProductMetadata",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/product-metadata",
              "host": ["{{base_url}}"],
              "path": ["product-metadata"]
            }
          },
          "response": []
        },
        {
          "name": "Create ProductMetadata",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"productId\": 1,\n  \"keywords\": \"smartphone,android\",\n  \"tags\": \"mobile,tech\",\n  \"searchRank\": 1\n}"
            },
            "url": {
              "raw": "{{base_url}}/product-metadata",
              "host": ["{{base_url}}"],
              "path": ["product-metadata"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "ProductPricing Service",
      "item": [
        {
          "name": "Get All ProductPricing",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/product-pricing",
              "host": ["{{base_url}}"],
              "path": ["product-pricing"]
            }
          },
          "response": []
        },
        {
          "name": "Create ProductPricing",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"productId\": 1,\n  \"price\": 499.99,\n  \"discount\": 10,\n  \"currency\": \"USD\"\n}"
            },
            "url": {
              "raw": "{{base_url}}/product-pricing",
              "host": ["{{base_url}}"],
              "path": ["product-pricing"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "ProductQuestion Service",
      "item": [
        {
          "name": "Get All ProductQuestions",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/product-questions",
              "host": ["{{base_url}}"],
              "path": ["product-questions"]
            }
          },
          "response": []
        },
        {
          "name": "Create ProductQuestion",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"productId\": 1,\n  \"userId\": 2,\n  \"question\": \"Does this phone support wireless charging?\",\n  \"askedAt\": \"2025-09-07T14:00:00\"\n}"
            },
            "url": {
              "raw": "{{base_url}}/product-questions",
              "host": ["{{base_url}}"],
              "path": ["product-questions"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "ProductShipping Service",
      "item": [
        {
          "name": "Get All ProductShipping",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/product-shipping",
              "host": ["{{base_url}}"],
              "path": ["product-shipping"]
            }
          },
          "response": []
        },
        {
          "name": "Create ProductShipping",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"productId\": 1,\n  \"shippingMethod\": \"Express\",\n  \"shippingCost\": 20.00,\n  \"estimatedDelivery\": \"2025-09-10\"\n}"
            },
            "url": {
              "raw": "{{base_url}}/product-shipping",
              "host": ["{{base_url}}"],
              "path": ["product-shipping"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "ProductStockHistory Service",
      "item": [
        {
          "name": "Get All ProductStockHistory",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/product-stock-history",
              "host": ["{{base_url}}"],
              "path": ["product-stock-history"]
            }
          },
          "response": []
        },
        {
          "name": "Create ProductStockHistory",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"productId\": 1,\n  \"changeType\": \"restock\",\n  \"quantityChanged\": 50,\n  \"changedAt\": \"2025-09-07T15:00:00\"\n}"
            },
            "url": {
              "raw": "{{base_url}}/product-stock-history",
              "host": ["{{base_url}}"],
              "path": ["product-stock-history"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "ProductSubscription Service",
      "item": [
        {
          "name": "Get All ProductSubscriptions",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/product-subscriptions",
              "host": ["{{base_url}}"],
              "path": ["product-subscriptions"]
            }
          },
          "response": []
        },
        {
          "name": "Create ProductSubscription",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"productId\": 1,\n  \"userId\": 2,\n  \"subscriptionType\": \"monthly\",\n  \"startDate\": \"2025-09-07\",\n  \"endDate\": \"2026-09-07\"\n}"
            },
            "url": {
              "raw": "{{base_url}}/product-subscriptions",
              "host": ["{{base_url}}"],
              "path": ["product-subscriptions"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Recommendation Service",
      "item": [
        {
          "name": "Get All Recommendations",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/recommendations",
              "host": ["{{base_url}}"],
              "path": ["recommendations"]
            }
          },
          "response": []
        },
        {
          "name": "Create Recommendation",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"userId\": 2,\n  \"productId\": 1,\n  \"score\": 0.95,\n  \"reason\": \"Similar to previous purchases\"\n}"
            },
            "url": {
              "raw": "{{base_url}}/recommendations",
              "host": ["{{base_url}}"],
              "path": ["recommendations"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Review Service",
      "item": [
        {
          "name": "Get All Reviews",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/reviews",
              "host": ["{{base_url}}"],
              "path": ["reviews"]
            }
          },
          "response": []
        },
        {
          "name": "Create Review",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"productId\": 1,\n  \"userId\": 2,\n  \"rating\": 5,\n  \"comment\": \"Excellent product!\",\n  \"reviewedAt\": \"2025-09-07T16:00:00\"\n}"
            },
            "url": {
              "raw": "{{base_url}}/reviews",
              "host": ["{{base_url}}"],
              "path": ["reviews"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Seller Service",
      "item": [
        {
          "name": "Get All Sellers",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/sellers",
              "host": ["{{base_url}}"],
              "path": ["sellers"]
            }
          },
          "response": []
        },
        {
          "name": "Create Seller",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"name\": \"BestSeller Inc.\",\n  \"contactEmail\": \"contact@bestseller.com\",\n  \"phone\": \"1234567890\"\n}"
            },
            "url": {
              "raw": "{{base_url}}/sellers",
              "host": ["{{base_url}}"],
              "path": ["sellers"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "SellerProduct Service",
      "item": [
        {
          "name": "Get All SellerProducts",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/seller-products",
              "host": ["{{base_url}}"],
              "path": ["seller-products"]
            }
          },
          "response": []
        },
        {
          "name": "Create SellerProduct",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"sellerId\": 1,\n  \"productId\": 1,\n  \"listingPrice\": 499.99,\n  \"availableStock\": 50\n}"
            },
            "url": {
              "raw": "{{base_url}}/seller-products",
              "host": ["{{base_url}}"],
              "path": ["seller-products"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "UserActivity Service",
      "item": [
        {
          "name": "Get All UserActivities",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/user-activities",
              "host": ["{{base_url}}"],
              "path": ["user-activities"]
            }
          },
          "response": []
        },
        {
          "name": "Create UserActivity",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"userId\": 2,\n  \"activityType\": \"view\",\n  \"productId\": 1,\n  \"timestamp\": \"2025-09-07T17:00:00\"\n}"
            },
            "url": {
              "raw": "{{base_url}}/user-activities",
              "host": ["{{base_url}}"],
              "path": ["user-activities"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Warehouse Service",
      "item": [
        {
          "name": "Get All Warehouses",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/warehouses",
              "host": ["{{base_url}}"],
              "path": ["warehouses"]
            }
          },
          "response": []
        },
        {
          "name": "Create Warehouse",
          "request": {
            "method": "POST",
            "header": [{"key": "Content-Type", "value": "application/json"}],
            "body": {
              "mode": "raw",
              "raw": "{\n  \"name\": \"Central Warehouse\",\n  \"location\": \"New York\",\n  \"capacity\": 1000\n}"
            },
            "url": {
              "raw": "{{base_url}}/warehouses",
              "host": ["{{base_url}}"],
              "path": ["warehouses"]
            }
          },
          "response": []
        }
      ]
    }
  ],
  "variable": [
    {
      "key": "base_url",
      "value": "http://localhost:3000/api"
    }
  ]
}
