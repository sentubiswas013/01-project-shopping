package com.example.main.model;

import javax.persistence.*;

@Entity
@Table(name = "brands")
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer brandId;

    @Column(nullable = false)
    private String name;

    // Default constructor
    public Brand() {
    }

    // Parameterized constructor
    public Brand(Integer brandId, String name) {
        this.brandId = brandId;
        this.name = name;
    }

    // Getters and Setters
    public Integer getBrandId() {
        return brandId;
    }

    public void setBrandId(Integer brandId) {
        this.brandId = brandId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}