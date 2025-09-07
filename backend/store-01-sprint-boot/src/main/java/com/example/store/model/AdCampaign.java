package com.example.store.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "ad_campaigns")
public class AdCampaign {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long campaignId;

    @ManyToOne
    @JoinColumn(name = "seller_id", nullable = false)
    private Seller seller;

    @Column(precision = 10, scale = 2)
    private BigDecimal budget;

    @Column
    private LocalDate startDate;

    @Column
    private LocalDate endDate;

    @Column(length = 50)
    private String status;

    public AdCampaign() {}

    public AdCampaign(Seller seller, BigDecimal budget, LocalDate startDate, LocalDate endDate, String status) {
        this.seller = seller;
        this.budget = budget;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
    }

    public Long getCampaignId() { return campaignId; }
    public void setCampaignId(Long campaignId) { this.campaignId = campaignId; }
    public Seller getSeller() { return seller; }
    public void setSeller(Seller seller) { this.seller = seller; }
    public BigDecimal getBudget() { return budget; }
    public void setBudget(BigDecimal budget) { this.budget = budget; }
    public LocalDate getStartDate() { return startDate; }
    public void setStartDate(LocalDate startDate) { this.startDate = startDate; }
    public LocalDate getEndDate() { return endDate; }
    public void setEndDate(LocalDate endDate) { this.endDate = endDate; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
