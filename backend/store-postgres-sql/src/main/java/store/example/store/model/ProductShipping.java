package store.example.store.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "product_shipping")
public class ProductShipping {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shippingId;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(precision = 10, scale = 2)
    private BigDecimal weight;

    @Column(length = 100)
    private String dimensions;

    @Column(length = 50)
    private String shippingClass;

    @Column(nullable = false)
    private Boolean freeShipping = false;

    @Column(length = 50)
    private String deliveryTimeEstimate;

    public ProductShipping() {}

    public ProductShipping(Product product, BigDecimal weight, String dimensions, String shippingClass, Boolean freeShipping, String deliveryTimeEstimate) {
        this.product = product;
        this.weight = weight;
        this.dimensions = dimensions;
        this.shippingClass = shippingClass;
        this.freeShipping = freeShipping;
        this.deliveryTimeEstimate = deliveryTimeEstimate;
    }

    public Long getShippingId() { return shippingId; }
    public void setShippingId(Long shippingId) { this.shippingId = shippingId; }
    public Product getProduct() { return product; }
    public void setProduct(Product product) { this.product = product; }
    public BigDecimal getWeight() { return weight; }
    public void setWeight(BigDecimal weight) { this.weight = weight; }
    public String getDimensions() { return dimensions; }
    public void setDimensions(String dimensions) { this.dimensions = dimensions; }
    public String getShippingClass() { return shippingClass; }
    public void setShippingClass(String shippingClass) { this.shippingClass = shippingClass; }
    public Boolean getFreeShipping() { return freeShipping; }
    public void setFreeShipping(Boolean freeShipping) { this.freeShipping = freeShipping; }
    public String getDeliveryTimeEstimate() { return deliveryTimeEstimate; }
    public void setDeliveryTimeEstimate(String deliveryTimeEstimate) { this.deliveryTimeEstimate = deliveryTimeEstimate; }
    public void setId(Long id) {
        this.setShippingId(id);
    }
}
