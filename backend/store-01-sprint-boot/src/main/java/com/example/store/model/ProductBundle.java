package com.example.store.model;

import jakarta.persistence.*;

@Entity
@Table(name = "product_bundles")
public class ProductBundle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bundleId;

    @ManyToOne
    @JoinColumn(name = "main_product_id", nullable = false)
    private Product mainProduct;

    @ManyToOne
    @JoinColumn(name = "related_product_id", nullable = false)
    private Product relatedProduct;

    @Column(length = 50)
    private String relationType;

    public ProductBundle() {}

    public ProductBundle(Product mainProduct, Product relatedProduct, String relationType) {
        this.mainProduct = mainProduct;
        this.relatedProduct = relatedProduct;
        this.relationType = relationType;
    }

    public Long getBundleId() { return bundleId; }
    public void setBundleId(Long bundleId) { this.bundleId = bundleId; }
    public Product getMainProduct() { return mainProduct; }
    public void setMainProduct(Product mainProduct) { this.mainProduct = mainProduct; }
    public Product getRelatedProduct() { return relatedProduct; }
    public void setRelatedProduct(Product relatedProduct) { this.relatedProduct = relatedProduct; }
    public String getRelationType() { return relationType; }
    public void setRelationType(String relationType) { this.relationType = relationType; }
}
