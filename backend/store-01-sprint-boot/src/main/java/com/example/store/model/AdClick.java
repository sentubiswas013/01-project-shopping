package com.example.store.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "ad_clicks")
public class AdClick {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long clickId;

    @ManyToOne
    @JoinColumn(name = "campaign_id", nullable = false)
    private AdCampaign campaign;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false)
    private LocalDateTime clickedAt = LocalDateTime.now();

    public AdClick() {}

    public AdClick(AdCampaign campaign, Product product, Long userId, LocalDateTime clickedAt) {
        this.campaign = campaign;
        this.product = product;
        this.userId = userId;
        this.clickedAt = clickedAt;
    }

    public Long getClickId() { return clickId; }
    public void setClickId(Long clickId) { this.clickId = clickId; }
    public AdCampaign getCampaign() { return campaign; }
    public void setCampaign(AdCampaign campaign) { this.campaign = campaign; }
    public Product getProduct() { return product; }
    public void setProduct(Product product) { this.product = product; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
    public LocalDateTime getClickedAt() { return clickedAt; }
    public void setClickedAt(LocalDateTime clickedAt) { this.clickedAt = clickedAt; }
}
