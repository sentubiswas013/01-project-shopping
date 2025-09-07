package store.example.store.model;

import jakarta.persistence.*;

@Entity
@Table(name = "product_attributes")
public class ProductAttribute {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long attributeId;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(length = 100)
    private String key;

    @Column(length = 255)
    private String value;

    public ProductAttribute() {}

    public ProductAttribute(Product product, String key, String value) {
        this.product = product;
        this.key = key;
        this.value = value;
    }

    public Long getAttributeId() { return attributeId; }
    public void setAttributeId(Long attributeId) { this.attributeId = attributeId; }
    public Product getProduct() { return product; }
    public void setProduct(Product product) { this.product = product; }
    public String getKey() { return key; }
    public void setKey(String key) { this.key = key; }
    public String getValue() { return value; }
    public void setValue(String value) { this.value = value; }
    public void setId(Long id) {
        this.setAttributeId(id);
    }
}
