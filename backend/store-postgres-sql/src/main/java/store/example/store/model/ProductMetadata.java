package store.example.store.model;

import jakarta.persistence.*;

@Entity
@Table(name = "product_metadata")
public class ProductMetadata {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long metadataId;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(columnDefinition = "TEXT")
    private String keywords;

    @Column(columnDefinition = "TEXT")
    private String tags;

    @Column
    private Integer searchRank;

    public ProductMetadata() {}

    public ProductMetadata(Product product, String keywords, String tags, Integer searchRank) {
        this.product = product;
        this.keywords = keywords;
        this.tags = tags;
        this.searchRank = searchRank;
    }

    public Long getMetadataId() { return metadataId; }
    public void setMetadataId(Long metadataId) { this.metadataId = metadataId; }
    public Product getProduct() { return product; }
    public void setProduct(Product product) { this.product = product; }
    public String getKeywords() { return keywords; }
    public void setKeywords(String keywords) { this.keywords = keywords; }
    public String getTags() { return tags; }
    public void setTags(String tags) { this.tags = tags; }
    public Integer getSearchRank() { return searchRank; }
    public void setSearchRank(Integer searchRank) { this.searchRank = searchRank; }
    public void setId(Long id) {
        this.setMetadataId(id);
    }
}
