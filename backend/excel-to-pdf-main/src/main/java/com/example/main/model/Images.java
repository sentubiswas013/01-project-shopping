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
    
    // Product relationship will be mapped below
    
    @Column(name = "image_url")
    private String imageUrl;
    
    @Column(name = "is_main")
    private Boolean isMain;

    @OneToMany(mappedBy = "images", cascade = CascadeType.ALL)
    private Set<Product> products = new HashSet<>();

    public Images() {
    }

    public Images(String imageUrl, Boolean isMain) {
        this.imageUrl = imageUrl;
        this.isMain = isMain;
        this.products = new HashSet<>();
    }

    public Integer getImageId() {
        return imageId;
    }

    public void setImageId(Integer imageId) {
        this.imageId = imageId;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Boolean getIsMain() {
        return isMain;
    }

    public void setIsMain(Boolean isMain) {
        this.isMain = isMain;
    }

    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }
    
}
