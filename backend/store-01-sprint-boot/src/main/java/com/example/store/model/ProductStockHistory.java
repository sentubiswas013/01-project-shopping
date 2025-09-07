package com.example.store.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "product_stock_history")
public class ProductStockHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long historyId;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(length = 50)
    private String changeType;

    @Column
    private Integer quantityChanged;

    @Column
    private Integer oldQuantity;

    @Column
    private Integer newQuantity;

    @Column(nullable = false)
    private LocalDateTime changedAt = LocalDateTime.now();

    public ProductStockHistory() {}

    public ProductStockHistory(Product product, String changeType, Integer quantityChanged, Integer oldQuantity, Integer newQuantity, LocalDateTime changedAt) {
        this.product = product;
        this.changeType = changeType;
        this.quantityChanged = quantityChanged;
        this.oldQuantity = oldQuantity;
        this.newQuantity = newQuantity;
        this.changedAt = changedAt;
    }

    public Long getHistoryId() { return historyId; }
    public void setHistoryId(Long historyId) { this.historyId = historyId; }
    public Product getProduct() { return product; }
    public void setProduct(Product product) { this.product = product; }
    public String getChangeType() { return changeType; }
    public void setChangeType(String changeType) { this.changeType = changeType; }
    public Integer getQuantityChanged() { return quantityChanged; }
    public void setQuantityChanged(Integer quantityChanged) { this.quantityChanged = quantityChanged; }
    public Integer getOldQuantity() { return oldQuantity; }
    public void setOldQuantity(Integer oldQuantity) { this.oldQuantity = oldQuantity; }
    public Integer getNewQuantity() { return newQuantity; }
    public void setNewQuantity(Integer newQuantity) { this.newQuantity = newQuantity; }
    public LocalDateTime getChangedAt() { return changedAt; }
    public void setChangedAt(LocalDateTime changedAt) { this.changedAt = changedAt; }
}
