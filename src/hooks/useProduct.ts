import { useEffect, useRef, useState } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState(initialValues?.count || value);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  const increaseBy = (value: number) => {
    let newCountValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newCountValue = Math.min(newCountValue, initialValues.maxCount);
    }
    setCounter(newCountValue);
    onChange && onChange({ count: newCountValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues?.maxCount === counter,
    maxCount: initialValues?.maxCount,

    increaseBy,
    reset,
  };
};
