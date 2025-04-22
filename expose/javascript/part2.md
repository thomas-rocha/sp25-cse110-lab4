## Part 2
### Question 1
Line 12 will print 3. The `var` keyword gives `i` function scope, so it will still be in scope outside of the for loop block. 
### Question 2
Line 13 will print `150`. The `var` keyword keeps `discountedPrice` in scope outside of the for loop. The last value it was assigned was `300 * (1 - 0.5)` which means it will print `150`.
### Question 3
Line 14 will print `150`. The `var` keyword keeps `finalPrice` in scope outside of the for loop. The last value it was assigned was `(150 * 100) / 100` which means it will print `150`.
### Question 4
The function will return `[50, 100, 150]`. Each value will be reduced by half and added to an array that will be returned. The `var` scope on `discounted` does not prevent the array from being returned 
### Question 5
Line 12 will produce an error because `i` is not defined outside of the for loop.
### Question 6
Line 13 will produce an error because `discountedPrice` is not defined outside of the for loop.
### Question 7
Line 14 will print `150`. It is defined in the same scope as the `console.log(finalPrice)` command and the last value it is assigned is `150`, meaning it will print `150`.
### Question 8
The function will return the array `[50, 100, 150]`. `discounted` will have each index updated to be half of the original value and no errors will occur.
### Question 9
The function will return an error because `i` is not defined in the same scope that `const.log(i)` runs in. 
### Question 10
Line 12 will print `3` since `length` is defined in the same scope. 
### Question 11
The function will return the array `[50, 100, 150]`. Since `discounted` is never updated and only its indices are, there is no issue that it was defined as a `const`. Therefore, the function works as expected. 
### Question 12
A. `student.name`
B. `student['Grad Year']`
C. `student.greeting()`
D. `student['Favorite Teacher'].name`
E. `student.courseLoad[0]`
### Question 13
A. This will output `'32'`. 2 gets interpreted as a string and is concactenated.
B. This will output `1`. `'3'` gets interpreted as a number and is subtracted by 2. 
C. This will output `3`. `null` gets interpreted as a 0, and therefore 3 is output. 
D. This will output `3null`. `null` gets interpreted as a string and is concactenated.
E. This will output `4`. `true` gets interpreted as a 1 and is added.
F. This will output `0`. Both `false` and `null` are interpreted as 0 and are added.
G. This will output `3undefined`. `undefined` is interpreted as a string and is concactenated.
H. This will output `NaN`. `undefined` converts to `NaN`, so `NaN` is output. 
### Question 14
A. This will output true. `'2'` is converted to `2` which is bigger than `1`.
B. This will output false. The two strings are compared lexicographically where 12 < 2.
C. This will output true. Type conversion occurs from `'2'` to `2` and `2 == 2` is true.
D. This will output false. They are of different types, so `===` automatically returns false.
E. This will return false.  `true` convers to `1` and `1 == 2` is false.
F. This will return true. `Boolean(2)` returns true since 2 is non-zero, and therefore `true === true`.
### Question 15
`==` compares values and type casts if necessary. In this case, `true == 1` could return true since true is typecast to 1. `===` directly compares two values, and immediately returns false if they are of different types. 
### Question 17
The result of this function running will be an array where each element is the corresponding element of the argument array doubled. For each element of the input array, `callback[array[i]]` is called, which doubles `array[i]`. Therefore, the output array is the input array doubled. 
### Question 19
```
1
3
4
2
```