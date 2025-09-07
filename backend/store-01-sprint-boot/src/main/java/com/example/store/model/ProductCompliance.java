package com.example.store.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "product_compliance")
public class ProductCompliance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long complianceId;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(length = 255)
    private String certification;

    @Column(length = 100)
    private String country;

    @Column(nullable = false)
    private Boolean compliant = true;

    @Column
    private LocalDate expiryDate;

    public ProductCompliance() {}

    public ProductCompliance(Product product, String certification, String country, Boolean compliant, LocalDate expiryDate) {
        this.product = product;
        this.certification = certification;
        this.country = country;
        this.compliant = compliant;
        this.expiryDate = expiryDate;
    }

    public Long getComplianceId() { return complianceId; }
    public void setComplianceId(Long complianceId) { this.complianceId = complianceId; }
    public Product getProduct() { return product; }
    public void setProduct(Product product) { this.product = product; }
    public String getCertification() { return certification; }
    public void setCertification(String certification) { this.certification = certification; }
    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }
    public Boolean getCompliant() { return compliant; }
    public void setCompliant(Boolean compliant) { this.compliant = compliant; }
    public LocalDate getExpiryDate() { return expiryDate; }
    public void setExpiryDate(LocalDate expiryDate) { this.expiryDate = expiryDate; }
}
