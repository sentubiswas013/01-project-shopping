package com.example.main.model;

import javax.persistence.*;

@Entity
@Table(name = "Inventory") 
public class Inventory {       
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "inventory_id")
    private Long inventoryId;

    @Column(name = "product_id")
    private Long productId;

    @Column(name = "stock_quantity")
    private Integer stockQuantity;
    
    @ManyToOne
    @JoinColumn(name = "product_id", insertable = false, updatable = false)
    private Product product;
    
    public Inventory() {
    }
    
    public Inventory(Long inventoryId, Long productId, Integer stockQuantity) {
        this.inventoryId = inventoryId;
        this.productId = productId;
        this.stockQuantity = stockQuantity;
    }
    
    public Long getInventoryId() {
        return inventoryId;
    }
    
    public void setInventoryId(Long inventoryId) {
        this.inventoryId = inventoryId;
    }
    
    public Long getProductId() {
        return productId;
    }
    
    public void setProductId(Long productId) {
        this.productId = productId;
    }
    
    public Integer getStockQuantity() {
        return stockQuantity;
    }
    
    public void setStockQuantity(Integer stockQuantity) {
        this.stockQuantity = stockQuantity;
    }
    
    public Product getProduct() {
        return product;
    }
    
    public void setProduct(Product product) {
        this.product = product;
    }
}