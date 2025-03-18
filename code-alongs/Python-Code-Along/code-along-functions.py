# def print_hello_world():
#     print("hello world")

# # method overloading is not allowed in python, if we try to define a function that already exists 
# # def print_hello_world():
# #     print("hello world", name)

# print_hello_world()

# def multiply_numbers(num1, num2):
#     return num1 * num2

# multi_result = multiply_numbers(2, 4)
# print(multi_result)

# # setting a default number for a parameter
# def calc_exp(num, power = 1):
#     return num ** power

# print(calc_exp(9))

# # using *args to add an unknown number of params to a function  (we don't have to name it args, only the * is important)

# def add(*number_list):
#     sum = 0

#     for num in number_list: 
#         sum = sum + num

#     return sum

# print(add(1, 2, 3, 4, 5, 6))

# # using **kargs to define key-value pairs in your function , can be renamed just like *args, only the ** is important

# def print_food_basket(**kwargs):
#     if len(kwargs) > 0:
#         for key, value in kwargs.items():
#             print(key + ": " + value)
#     else:
#         print("The basket is empty")

# print_food_basket(maincourse="Coney Dog", dessert="Mackinac Island Fudge", fruit="cherries", drink="Dr. Pepper")

# # mixing params, *args and **kwargs
# # these do need to be defined in a specific order: 1. params 2. *args 3. **kwargs
# # if *args or **kwargs are not used when calling the function they will be set to the None datatype

# def print_mab_libs(title, *args, **kwargs):
#     print("================================")
#     print(title.title())
#     print("================================")

#     if args:
#         print("Some words we're including are:")
#         for word in args:
#             print(str(word), end="\t") # adding a kwarg end to the print function is similar to system.out.print() in java
#         print("\n================================")

#     if kwargs:
#         print("We even have some keyworded-values:")
#         for key, value in kwargs.items():
#             print(key + ": " + str(value))
#         print("================================")

# print_mab_libs("mad libs title", 3.14, "Happily", 27, False, job="plumber", verb="waltzing", place="Antarctica" )

# global vs local variables in python

nbr1 = 5

def print_nbr1():
    nbr1 = 10
    print(f"In print_nbr1(): {nbr1}")

print_nbr1()
print(f"Outside of print_nbr1(): {nbr1}") # Global variable not modified in the scope of the print_nbr1() function

print("================================ After Redefining function")
def print_nbr1():
    global nbr1             # specify we want to use the global variable in this scope
    nbr1 = 10
    print(f"In print_nbr1(): {nbr1}")

print_nbr1()
print(f"Outisde of print_nbr1(): {nbr1}")  # original global variable has been modified

