package com.example.store.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "seller_products")
public class SellerProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sellerProductId;

    @ManyToOne
    @JoinColumn(name = "seller_id", nullable = false)
    private Seller seller;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @Column(nullable = false)
    private Integer stock;

    public SellerProduct() {}

    public SellerProduct(Seller seller, Product product, BigDecimal price, Integer stock) {
        this.seller = seller;
        this.product = product;
        this.price = price;
        this.stock = stock;
    }

    public Long getSellerProductId() { return sellerProductId; }
    public void setSellerProductId(Long sellerProductId) { this.sellerProductId = sellerProductId; }
    public Seller getSeller() { return seller; }
    public void setSeller(Seller seller) { this.seller = seller; }
    public Product getProduct() { return product; }
    public void setProduct(Product product) { this.product = product; }
    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }
    public Integer getStock() { return stock; }
    public void setStock(Integer stock) { this.stock = stock; }
}
