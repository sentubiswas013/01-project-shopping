package com.example.store.model;

import jakarta.persistence.*;

@Entity
@Table(name = "sellers")
public class Seller {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sellerId;

    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false)
    private String storeName;

    @Column(length = 50)
    private String gstNumber;

    @Column(precision = 3, scale = 2)
    private Double ratingAvg = 0.0;

    @Column(nullable = false)
    private Boolean verified = false;

    public Seller() {}

    public Seller(Long userId, String storeName, String gstNumber, Double ratingAvg, Boolean verified) {
        this.userId = userId;
        this.storeName = storeName;
        this.gstNumber = gstNumber;
        this.ratingAvg = ratingAvg;
        this.verified = verified;
    }

    public Long getSellerId() { return sellerId; }
    public void setSellerId(Long sellerId) { this.sellerId = sellerId; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
    public String getStoreName() { return storeName; }
    public void setStoreName(String storeName) { this.storeName = storeName; }
    public String getGstNumber() { return gstNumber; }
    public void setGstNumber(String gstNumber) { this.gstNumber = gstNumber; }
    public Double getRatingAvg() { return ratingAvg; }
    public void setRatingAvg(Double ratingAvg) { this.ratingAvg = ratingAvg; }
    public Boolean getVerified() { return verified; }
    public void setVerified(Boolean verified) { this.verified = verified; }
}
