package com.example.main.model;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name = "Images") 
public class Images {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer imageId;

    @Column(nullable = false)
    private String name;
    
    @Column(name = "image_url")
    private String imageUrl;

    @OneToMany(mappedBy = "images", cascade = CascadeType.ALL)
    private Set<Product> products = new HashSet<>();

    public Images() {
    }

    public Images(String name, String imageUrl) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.products = new HashSet<>();
    }

    public Integer getImageId() { return imageId; }

    public void setImageId(Integer imageId) {  this.imageId = imageId; }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Set<Product> getProducts() { return products; }

    public void setProducts(Set<Product> products) { this.products = products; }
    
}
