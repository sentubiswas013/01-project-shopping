package com.example.store.model;

import jakarta.persistence.*;

@Entity
@Table(name = "recommendations")
public class Recommendation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long recommendationId;

    @Column(nullable = false)
    private Long userId;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(precision = 5, scale = 2)
    private Double score;

    public Recommendation() {}

    public Recommendation(Long userId, Product product, Double score) {
        this.userId = userId;
        this.product = product;
        this.score = score;
    }

    public Long getRecommendationId() { return recommendationId; }
    public void setRecommendationId(Long recommendationId) { this.recommendationId = recommendationId; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
    public Product getProduct() { return product; }
    public void setProduct(Product product) { this.product = product; }
    public Double getScore() { return score; }
    public void setScore(Double score) { this.score = score; }
}
