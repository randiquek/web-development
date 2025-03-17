# comments are made with '#' symbol 
# built in data types in python:

# text
name = "My name is Randi"
print(name)

# int/number
x = 20
print(x)

# decimal/float
y = .5
print(y % x)

# List
test_list = ["item1", "item2", "item3"]
print(test_list[0])
print(test_list)

bool_test = True

# Some python variable naming conventions: 
# names can't start with a number 
# variable names can start with an underscore or a letter

my_multi_line_string = """Assess 
Educate 
Advance"""
print(my_multi_line_string)

# Check the type of a variable with type() method 
print(type(my_multi_line_string))

# Instead of nulls or undefined data types, in python  we have the None data type
my_variable = None
print(my_variable)

favorite_number = 7
print(7**2)

# Challenges 
# ● Create a variable named num1 and set it to 3.14
num1 = 3.14

# ● Create a variable named num2 and set it to 2
num2 = 2

# ● Create a variable named num3 and set it to 16.00
num3 = 16.00

# ● Create a variable named add_result and set it to num1 + num2
add_result = num1 + num2

# ● Create a variable named exponent_result and set it to num1 ** num2
exponent_result = (num1**num2)

# ● Create a variable named remainder_result and set it to num3 % num2
remainder_result = (num3%num2)

# ● Create a variable named greater_than_check to evaluate num1 > num2
greater_than_check = num1 > num2
# Code-Along: Variables - 8
# ● Print each of the variables that are storing results from expressions -
# add_result, exponent_result, remainder_result, and
# greater_than_check
print("Add result:", add_result, "Exponent Result:", exponent_result, "Remainder Result:", remainder_result, "Greater than Check:", greater_than_check)

# Create variable to test rounding in python
divide_check = (num3 / num2) ** num1
print(divide_check) 
print(round(divide_check,2)) 

# python strings
string_escaped = "\"Always look on the bright side of life,\" he said forcefully"
print(string_escaped)

# len() method to get the length of a string 
string_length = (len(string_escaped))
print(string_length)

# strip() to remove whitespace characters before and after numbers/letters 

filepath = "      /var/www/java/packages    "
print(filepath)
print(filepath.strip())

# Use split() too break up a string into a list based on a character (used for CSVs)
folders = filepath.split("/")
print(folders)

# Using join() to add all elements of a list together 
windows_path = "\\".join(folders)
print(windows_path)

# Using splitlines() to create a list that is split on new line characters
multi_line_list = my_multi_line_string.splitlines()
print(multi_line_list)

# Using find() to get the first occurence of a character in a string 
reservation_name = "Froman, Abe "
char_location = reservation_name.find(",")
print(char_location)

print(reservation_name.index(","))

# since strings are an array of characters we can split a string using 
last_name = reservation_name[0:char_location]
print(last_name)

first_name = reservation_name[char_location+1:len(reservation_name)]
print(first_name)

# strip either the left side or right side of string with lstrip() and rstrip()
print(first_name.lstrip())

# Just like in Java, we can use the '+' operator  to concatenate strings
full_name = first_name.lstrip() + last_name
print(full_name)

# Use upper(), lower(), swapcase(), annd capitalize() to manipulate the casing of a string
print(full_name.upper(), "| ", full_name.lower(), "| ", full_name.title(), "| ", full_name.swapcase(), "| ", full_name.capitalize())

# f-strings are special to python, they allow us to inject variables and method calls inside of a string to easily format them
name_test = 'Patrick'
age = 36
print(f"Hello, my name is {name_test} and I am {age} years old.")
print(f"{full_name.upper()} is a very funny man.")

name_test.islower()

# Using count() to return the number of times a string pattern appears in another string
print("xxaxbxxxxcxx".count("xx"))

# Using replace() to switch all characters to another
print("xxaxbxxxxcxx".replace("x", "*"))

# A second int param can be passed to only modify the first 'x' characters specified
print("xxaxbxxxxcxx".replace("x", "*", 3))

print("10".zfill(6))
print("100".zfill(6))
print("1000".zfill(6))

print("$", str(round(num3 / num2, 2)).zfill(-23))

