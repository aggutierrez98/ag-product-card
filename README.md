# AG-Product-Card

Este es un paquete de despliege en NPM

### Agustin Gutierrez

## Ejemplo
```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from "ag-product-card"
```

```
 <ProductCard
        product={product}
        initialValues={{
          count: 6,
          // maxCount: 10,
        }}
      >
        {({ reset, count, maxCount, isMaxCountReached, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
</ProductCard>
```