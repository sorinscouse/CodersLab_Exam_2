<img alt="Logo" src="https://mentor.coderslab.pl/wp-content/uploads/2018/12/CL_IT_logo_ENG_1040x261_black_YELLOW-1.png" width="400">

# JavaScript &ndash; exam

## Guidelines for github

1. [*Fork*](https://guides.github.com/activities/forking/) the repository containing exercises.
2. Clone the repository onto your computer using the command: `git clone repository_address`.
You will find the address of the repository by pressing "Clone or download" button on its webpage.
3. Complete the exercises and commit changes to your repository using the commands below.
`git add filename` will add a single file which you have changed.
If you want to add all the changed files at once, use `git add .`.
Remember that the fullstop (dot) at the end of this command is important!
Next, commit changes using `git commit -m "description_of_changes"`.
4. Push changes to your repository on GitHub by typing: `git push origin master`.
5. Create a [*pull request*](https://help.github.com/articles/creating-a-pull-request) to the original repository when you have finished all the exercises.

## Guidelines for completing the tasks

These tasks are tested using **special automatic tests**. Therefore, make sure that:
* If it is mentioned in a task that the function should return a result, it should return it instead of displaying it in the console.
(Of course, you can display it additionally.)

* If a task requires that a specific text is entered / returned / displayed, it should be exactly that text.

* Function names must be the same as stated in the task.

* Complete the exercises in adequate **js** files.

* Do not change the HTML files.

* always check if your solution works. If it throws errors, it will not be evaluated - in such case, better comment **sensitive** parts.

---------------------------------------------------------------------

## Exercises

### Exercise 1
(1 p)

 - Do not use DOMContentLoaded event in this exercise. The script is loaded into the HTML file before the end of the body.

Write a function named ```getSqrt(n)``` that takes one number as a parameter. This function should return square root of this number.

Example:

```JavaScript
getSqrt(4) // will return 2
getSqrt(16) // will return 4
```

### Exercise 2
(2 pts)

 - Do not use DOMContentLoaded event in this exercise. The script is loaded into the HTML file before the end of the body.

Write a function named ```concatArray(array1, array2)``` that takes two arrays as parameters. This function should return a new array that is a combination of those two.

Example:

```JavaScript
 concatArray( [1,3],[3,5]]) // will return [1,3,3,5]
```


### Exercise 3

(4 pts)

 - Do not use DOMContentLoaded event. The script is loaded into the HTML file before the end of the body.

Write a function named ```bigestSumOfTwoElements(array)``` that takes an array of numbers as parameter and **returns** the sum of the two largest elements from this array.
To simplify things, we can assume that the provided array contains only numbers.

* If the array contains only one element, the function should return the value of this element.
* If the array contains zero elements, the function should return the logical value ```false```.

Example:

```Javascript
bigestSumOfTwoElements([1,2,3,4]) // => 7
bigestSumOfTwoElements([]) // => false
bigestSumOfTwoElements([76]) // => 76
bigestSumOfTwoElements([23,45,17,12]) // => 68
```

### Exercise 4

(5 pts)

 - Do not use DOMContentLoaded event. The script is loaded into the HTML file before the end of the body.
 - For each sub-clause, create an appropriate function with the name given in the task description.
 - Each function should  **return** an array filled with appropriate elements. (Do you remember the difference between returning and displaying?)


 Complete the following tasks:

    * **1. Searching for tag names:**
   - find all elements with the **class**: ```sample_class```,
   - create a ```getTag(elements)``` function and pass it the found elements as a parameter,
   - make an array in the function and fill it with those tag names. Pick them from elements passed as parameter.


* **2. Searching for class names:**
  - Find element with **id**: ```sample_id```.
  - create a ```getClass(element)``` function that takes the found element as a parameter.
  - make an array in the function and fill it with class names. Pick them from the element passed as parameter.
  - return the array.

* **3. Searching for text:**
  - find all __list__ elements in the element with the **class**: ```sample_class_2```,
  - write a ```getInnerText(elements)``` function and pass it the found elements as parameter,
  - make an array in the function and fill it with the texts picked from the elements passed as parameter.
  - return the array.


* **4. Searching for link addresses:**
  - find all links,
  - write a ```getAddress(elements)``` function and pass it the found elements as a parameter.
  - make an array in the function and fill it with addresses picked from the elements passed as parameter.
  - return the array.


* **5. Searching for the child tags:**
    - Find all children of the element with the **class**: ```sample_class_3```,
    - pass the found children as parameter to the function that searches for element tags.



### Exercise 5

(3 pts)

You can use DOMContentLoaded event in this exercise.

For all buttons on the site, add an event so that after pressing the button, in the **div** with ```container``` appears the text from the ```data-text```.

### Exercise 6

(5 pts)

You can use DOMContentLoaded event in this exercise.

The website contains a shopping list. Look at the HTML and see how the list is built. Add appropriate events so that:

- After clicking the first button, a new product - ```bread``` was added to the list.
- After clicking the second button, the last item was removed from the list.
- After clicking the third button, a new product was added to the end of the list, which is the clone of the second product.

__Good luck! :)__
