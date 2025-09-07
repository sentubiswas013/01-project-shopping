package com.example.store.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "product_subscriptions")
public class ProductSubscription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long subscriptionId;

    @Column(nullable = false)
    private Long userId;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(length = 50)
    private String frequency;

    @Column
    private LocalDate nextDeliveryDate;

    @Column(length = 50)
    private String status;

    public ProductSubscription() {}

    public ProductSubscription(Long userId, Product product, String frequency, LocalDate nextDeliveryDate, String status) {
        this.userId = userId;
        this.product = product;
        this.frequency = frequency;
        this.nextDeliveryDate = nextDeliveryDate;
        this.status = status;
    }

    public Long getSubscriptionId() { return subscriptionId; }
    public void setSubscriptionId(Long subscriptionId) { this.subscriptionId = subscriptionId; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
    public Product getProduct() { return product; }
    public void setProduct(Product product) { this.product = product; }
    public String getFrequency() { return frequency; }
    public void setFrequency(String frequency) { this.frequency = frequency; }
    public LocalDate getNextDeliveryDate() { return nextDeliveryDate; }
    public void setNextDeliveryDate(LocalDate nextDeliveryDate) { this.nextDeliveryDate = nextDeliveryDate; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
