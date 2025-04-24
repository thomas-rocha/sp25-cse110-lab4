 ### Question 1
 The bug is that num1 and num2 are variables containing strings, not integers. Concactenation occurs when adding them, not summation. 
 ### Question 2
 I would use `parseInt()` around the `document.getElementById()` calls when initializing num1 and num2. I would then check if both `num1` and `num2` are valid numbers and would break otherwise. This would ensure that only valid digits are passed to the `calculateSum()` function call. 