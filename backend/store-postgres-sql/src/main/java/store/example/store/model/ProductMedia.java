package store.example.store.model;

import jakarta.persistence.*;

@Entity
@Table(name = "product_media")
public class ProductMedia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long mediaId;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(length = 50)
    private String mediaType;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String mediaUrl;

    public ProductMedia() {}

    public ProductMedia(Product product, String mediaType, String mediaUrl) {
        this.product = product;
        this.mediaType = mediaType;
        this.mediaUrl = mediaUrl;
    }

    public Long getMediaId() { return mediaId; }
    public void setMediaId(Long mediaId) { this.mediaId = mediaId; }
    public Product getProduct() { return product; }
    public void setProduct(Product product) { this.product = product; }
    public String getMediaType() { return mediaType; }
    public void setMediaType(String mediaType) { this.mediaType = mediaType; }
    public String getMediaUrl() { return mediaUrl; }
    public void setMediaUrl(String mediaUrl) { this.mediaUrl = mediaUrl; }
    public void setId(Long id) {
        this.setMediaId(id);
    }
}
