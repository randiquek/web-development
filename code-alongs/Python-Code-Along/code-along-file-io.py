
# open a file
# file_path = r"C:\Users\rawrr\Documents\web-development\code-alongs\Python-Code-Along\foods.txt" absolute path to a file is not portable, usually you want to use a relative path to the program working directory

import os


# file_path = "foods.txt"

# file = open(file_path)
# # print(file.read())   you can quickly test read from a file using read() to check that the file exists/looks correct
# # you can use file.readlines() if you want to retain the newline character at the end of each element
# food_list = file.read().splitlines()

# index = 0
# for line in food_list:
#     print(f"{index}. {line}")
#     index += 1

# file.close()
# # write to a file with "w" param when opening 
# # append to an existing file with "a"

# new_file = open("sample.txt", "a")
# new_file.write("\nappend to new line")

# file_with_many_lines = open("multi_line.txt", "w")

# sum = 0
# for i in range(0, 101):
#     sum += 1
#     file_with_many_lines.write(f"line#{i}: sum:{sum}\n")
# file_with_many_lines.close()

# modified_foods = open(file_path, "r+")
# lines = modified_foods.readlines()
# modified_foods.seek(0) # returns to top of the file after reading

# for line in lines:
#     modified_foods.write(line.lower())

# modified_foods.close()

# os.remove("multi_line.txt")

# # with keyword is like using the try with resourcea in java

with open("sampledata.txt", "w") as my_file:
    my_file.write("testing with keyboard when opening a file\n")
    my_file.write("testing with keyboard when opening a file\n")
    my_file.write("testing with keyboard when opening a file\n")
    my_file.write("testing with keyboard when opening a file")


# exception handing with a try/except/else/finally

# while True:
#     try:
#         number_input = int(input("Enter a number: "))
#     except ValueError: 
#         print("bad number given")
#     else: 
#         print(number_input, "is a great number!")
#         break
#     finally: 
#         print("finally block is always executed")


# adding error handing to a with/open
try:
    with open("sampledata.txt", "r") as my_file:
        print(my_file.readlines())
except FileNotFoundError: 
    print("file sampledata.txt not found")
else:
    print("finished reading file")
finally: 
    print("file open finished")

