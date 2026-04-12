const n=`---

id: 3
title: Exception Handling in Python (Basics)
date: April 12, 2026
readTime: 5 min read
category: Learning
excerpt: Learn the basics of exception handling in Python including try-except, raise, and custom exceptions.
author: Rujeet J.
-----------------

# Exception Handling in Python (Basics)

Exception handling is used to manage errors during program execution and prevent crashes. Python provides several constructs to handle exceptions effectively.

---

## Using \`raise\`

The \`raise\` keyword is used to explicitly trigger an exception and stop execution when a condition is met.

\`\`\`python
number = 10

if number > 5:
    raise Exception(f"The number should not exceed 5. ({number=})")

print(number)
\`\`\`

---

## \`try ... except\`

The \`try\` block contains code that may raise an exception. If an error occurs, execution immediately stops and moves to the \`except\` block.

### Avoid Catch-All Exceptions

\`\`\`python
try:
    # some code
    pass
except:
    # catches all exceptions (not recommended)
    pass
\`\`\`

This approach is not recommended because it hides the actual error.

### Preferred: Specific Exceptions

\`\`\`python
try:
    # some code
    pass
except FileNotFoundError as err:
    print(err)
\`\`\`

Handling specific exceptions makes debugging easier and improves code clarity.

---

## Multiple Exceptions

When multiple \`except\` blocks are used, Python checks them from top to bottom and executes the first matching one.

\`\`\`python
try:
    # some code
    pass
except FileNotFoundError:
    print("File not found")
except ValueError:
    print("Invalid value")
\`\`\`

---

## \`try ... except ... else\`

The \`else\` block runs only if the \`try\` block executes successfully without any exceptions.

\`\`\`python
try:
    print("No errors here")
except Exception:
    print("An error occurred")
else:
    print("Executed successfully")
\`\`\`

---

## \`try ... except ... finally\`

The \`finally\` block always executes, regardless of whether an exception occurs or not. It is commonly used for cleanup operations.

\`\`\`python
try:
    file = open("example.txt")
except FileNotFoundError:
    print("File not found")
finally:
    print("Closing resources (if opened)")
\`\`\`

Typical use cases:

* Closing files
* Releasing resources
* Closing database connections

---

## Custom Exceptions

Custom exceptions are created by defining a class that inherits from the base \`Exception\` class.

\`\`\`python
class PlatformException(Exception):
    """Incompatible platform."""
    pass
\`\`\`

### Example Usage

\`\`\`python
def linux_interaction():
    import sys

    if "linux" not in sys.platform:
        raise PlatformException("Function can only run on Linux systems.")

    print("Doing Linux things.")
\`\`\`

Custom exceptions help make your code more readable and domain-specific.

---

## Summary

* Use \`raise\` to trigger exceptions manually
* Prefer specific exceptions over generic ones
* Use \`else\` for code that should run only if no errors occur
* Use \`finally\` for cleanup tasks
* Create custom exceptions for better error handling design

---

`;export{n as default};
