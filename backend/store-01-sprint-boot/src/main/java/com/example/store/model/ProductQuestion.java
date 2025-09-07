package com.example.store.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "product_questions")
public class ProductQuestion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(nullable = false)
    private Long userId;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String question;

    @Column(nullable = false)
    private LocalDateTime askedAt = LocalDateTime.now();

    public ProductQuestion() {}

    public ProductQuestion(Product product, Long userId, String question, LocalDateTime askedAt) {
        this.product = product;
        this.userId = userId;
        this.question = question;
        this.askedAt = askedAt;
    }

    public Long getQuestionId() { return questionId; }
    public void setQuestionId(Long questionId) { this.questionId = questionId; }
    public Product getProduct() { return product; }
    public void setProduct(Product product) { this.product = product; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
    public String getQuestion() { return question; }
    public void setQuestion(String question) { this.question = question; }
    public LocalDateTime getAskedAt() { return askedAt; }
    public void setAskedAt(LocalDateTime askedAt) { this.askedAt = askedAt; }
}
