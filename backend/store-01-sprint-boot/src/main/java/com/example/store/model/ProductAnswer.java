package com.example.store.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "product_answers")
public class ProductAnswer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @ManyToOne
    @JoinColumn(name = "question_id", nullable = false)
    private ProductQuestion question;

    @Column(nullable = false)
    private Long userId;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String answer;

    @Column(nullable = false)
    private LocalDateTime answeredAt = LocalDateTime.now();

    public ProductAnswer() {}

    public ProductAnswer(ProductQuestion question, Long userId, String answer, LocalDateTime answeredAt) {
        this.question = question;
        this.userId = userId;
        this.answer = answer;
        this.answeredAt = answeredAt;
    }

    public Long getAnswerId() { return answerId; }
    public void setAnswerId(Long answerId) { this.answerId = answerId; }
    public ProductQuestion getQuestion() { return question; }
    public void setQuestion(ProductQuestion question) { this.question = question; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
    public String getAnswer() { return answer; }
    public void setAnswer(String answer) { this.answer = answer; }
    public LocalDateTime getAnsweredAt() { return answeredAt; }
    public void setAnsweredAt(LocalDateTime answeredAt) { this.answeredAt = answeredAt; }
}
