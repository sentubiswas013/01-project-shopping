package com.example.store.model;

import jakarta.persistence.*;

@Entity
@Table(name = "product_identifiers")
public class ProductIdentifier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long identifierId;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(length = 20, nullable = false, unique = true)
    private String asin;

    @Column(length = 20)
    private String upc;

    @Column(length = 20)
    private String ean;

    @Column(length = 20)
    private String isbn;

    @Column(length = 50, nullable = false, unique = true)
    private String sku;

    public ProductIdentifier() {}

    public ProductIdentifier(Product product, String asin, String upc, String ean, String isbn, String sku) {
        this.product = product;
        this.asin = asin;
        this.upc = upc;
        this.ean = ean;
        this.isbn = isbn;
        this.sku = sku;
    }

    public Long getIdentifierId() { return identifierId; }
    public void setIdentifierId(Long identifierId) { this.identifierId = identifierId; }
    public Product getProduct() { return product; }
    public void setProduct(Product product) { this.product = product; }
    public String getAsin() { return asin; }
    public void setAsin(String asin) { this.asin = asin; }
    public String getUpc() { return upc; }
    public void setUpc(String upc) { this.upc = upc; }
    public String getEan() { return ean; }
    public void setEan(String ean) { this.ean = ean; }
    public String getIsbn() { return isbn; }
    public void setIsbn(String isbn) { this.isbn = isbn; }
    public String getSku() { return sku; }
    public void setSku(String sku) { this.sku = sku; }
}
